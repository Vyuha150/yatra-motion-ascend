import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (!openAIApiKey) {
      throw new Error('OPENAI_API_KEY is not set');
    }

    const { message, chatHistory = [] } = await req.json();
    
    console.log('Received chat request:', { message, historyLength: chatHistory.length });

    if (!message) {
      throw new Error('Message is required');
    }

    // Prepare messages for OpenAI API including chat history
    const messages = [
      {
        role: 'system',
        content: `You are a helpful assistant for Yatra Elevators, a premium elevator company. You specialize in:
        - Elevator installations and maintenance
        - Safety consultations
        - Product recommendations
        - Service scheduling
        - Technical support
        
        Be professional, helpful, and knowledgeable about elevator systems. If users ask about pricing or specific technical details, encourage them to contact the sales team for detailed information.
        
        Company details:
        - Phone: +91 98765 43210
        - Email: info@yatraelevators.com
        - Services: Residential elevators, commercial elevators, freight elevators, elevator maintenance, modernization
        
        Keep responses concise but informative.`
      },
      ...chatHistory.map((msg: any) => ({
        role: msg.role,
        content: msg.content
      })),
      {
        role: 'user',
        content: message
      }
    ];

    console.log('Sending to OpenAI with messages:', messages.length);

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('OpenAI API error:', response.status, errorData);
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('OpenAI response received successfully');

    const assistantMessage = data.choices[0].message.content;

    return new Response(JSON.stringify({ 
      response: assistantMessage,
      success: true 
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in chat-bot function:', error);
    return new Response(JSON.stringify({ 
      error: error.message,
      success: false 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});