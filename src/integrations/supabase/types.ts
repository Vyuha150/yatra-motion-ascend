export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      amc_contracts: {
        Row: {
          annual_amount: number
          assigned_technician: string | null
          contract_end_date: string
          contract_number: string
          contract_start_date: string
          created_at: string | null
          created_by: string | null
          customer_email: string | null
          customer_name: string
          customer_phone: string | null
          elevator_model: string | null
          elevator_serial_number: string | null
          id: string
          payment_frequency: string | null
          property_address: string
          showroom_id: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          annual_amount: number
          assigned_technician?: string | null
          contract_end_date: string
          contract_number: string
          contract_start_date: string
          created_at?: string | null
          created_by?: string | null
          customer_email?: string | null
          customer_name: string
          customer_phone?: string | null
          elevator_model?: string | null
          elevator_serial_number?: string | null
          id?: string
          payment_frequency?: string | null
          property_address: string
          showroom_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          annual_amount?: number
          assigned_technician?: string | null
          contract_end_date?: string
          contract_number?: string
          contract_start_date?: string
          created_at?: string | null
          created_by?: string | null
          customer_email?: string | null
          customer_name?: string
          customer_phone?: string | null
          elevator_model?: string | null
          elevator_serial_number?: string | null
          id?: string
          payment_frequency?: string | null
          property_address?: string
          showroom_id?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "amc_contracts_assigned_technician_fkey"
            columns: ["assigned_technician"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "amc_contracts_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "amc_contracts_showroom_id_fkey"
            columns: ["showroom_id"]
            isOneToOne: false
            referencedRelation: "showrooms"
            referencedColumns: ["id"]
          },
        ]
      }
      brochure_downloads: {
        Row: {
          brochure_name: string
          created_at: string | null
          id: string
          ip_address: unknown | null
          product_id: string | null
          user_agent: string | null
          visitor_email: string | null
          visitor_name: string | null
          visitor_phone: string | null
        }
        Insert: {
          brochure_name: string
          created_at?: string | null
          id?: string
          ip_address?: unknown | null
          product_id?: string | null
          user_agent?: string | null
          visitor_email?: string | null
          visitor_name?: string | null
          visitor_phone?: string | null
        }
        Update: {
          brochure_name?: string
          created_at?: string | null
          id?: string
          ip_address?: unknown | null
          product_id?: string | null
          user_agent?: string | null
          visitor_email?: string | null
          visitor_name?: string | null
          visitor_phone?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "brochure_downloads_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      bulk_buyer_contracts: {
        Row: {
          address: string
          buyer_id: string | null
          company_name: string
          contact_person: string
          contract_end_date: string
          contract_number: string
          contract_start_date: string
          created_at: string | null
          created_by: string | null
          credit_limit: number | null
          discount_percentage: number | null
          email: string
          id: string
          minimum_order_value: number | null
          payment_terms: string | null
          phone: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          address: string
          buyer_id?: string | null
          company_name: string
          contact_person: string
          contract_end_date: string
          contract_number: string
          contract_start_date: string
          created_at?: string | null
          created_by?: string | null
          credit_limit?: number | null
          discount_percentage?: number | null
          email: string
          id?: string
          minimum_order_value?: number | null
          payment_terms?: string | null
          phone?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string
          buyer_id?: string | null
          company_name?: string
          contact_person?: string
          contract_end_date?: string
          contract_number?: string
          contract_start_date?: string
          created_at?: string | null
          created_by?: string | null
          credit_limit?: number | null
          discount_percentage?: number | null
          email?: string
          id?: string
          minimum_order_value?: number | null
          payment_terms?: string | null
          phone?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bulk_buyer_contracts_buyer_id_fkey"
            columns: ["buyer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bulk_buyer_contracts_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      contacts: {
        Row: {
          company: string | null
          created_at: string | null
          email: string
          id: string
          message: string
          name: string
          phone: string | null
          status: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string | null
          email: string
          id?: string
          message: string
          name: string
          phone?: string | null
          status?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string | null
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string | null
          status?: string | null
        }
        Relationships: []
      }
      invoices: {
        Row: {
          amc_contract_id: string | null
          balance_amount: number
          created_at: string | null
          created_by: string | null
          customer_address: string
          customer_name: string
          due_date: string
          id: string
          invoice_date: string
          invoice_number: string
          invoice_type: string | null
          order_id: string | null
          paid_amount: number | null
          payment_date: string | null
          payment_method: string | null
          showroom_id: string | null
          status: string | null
          subtotal: number
          tax_amount: number | null
          total_amount: number
          updated_at: string | null
        }
        Insert: {
          amc_contract_id?: string | null
          balance_amount: number
          created_at?: string | null
          created_by?: string | null
          customer_address: string
          customer_name: string
          due_date: string
          id?: string
          invoice_date: string
          invoice_number: string
          invoice_type?: string | null
          order_id?: string | null
          paid_amount?: number | null
          payment_date?: string | null
          payment_method?: string | null
          showroom_id?: string | null
          status?: string | null
          subtotal: number
          tax_amount?: number | null
          total_amount: number
          updated_at?: string | null
        }
        Update: {
          amc_contract_id?: string | null
          balance_amount?: number
          created_at?: string | null
          created_by?: string | null
          customer_address?: string
          customer_name?: string
          due_date?: string
          id?: string
          invoice_date?: string
          invoice_number?: string
          invoice_type?: string | null
          order_id?: string | null
          paid_amount?: number | null
          payment_date?: string | null
          payment_method?: string | null
          showroom_id?: string | null
          status?: string | null
          subtotal?: number
          tax_amount?: number | null
          total_amount?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "invoices_amc_contract_id_fkey"
            columns: ["amc_contract_id"]
            isOneToOne: false
            referencedRelation: "amc_contracts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_showroom_id_fkey"
            columns: ["showroom_id"]
            isOneToOne: false
            referencedRelation: "showrooms"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          assigned_to: string | null
          company: string | null
          created_at: string | null
          email: string
          estimated_value: number | null
          follow_up_date: string | null
          id: string
          lead_type: string | null
          message: string | null
          name: string
          phone: string | null
          showroom_id: string | null
          source: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          assigned_to?: string | null
          company?: string | null
          created_at?: string | null
          email: string
          estimated_value?: number | null
          follow_up_date?: string | null
          id?: string
          lead_type?: string | null
          message?: string | null
          name: string
          phone?: string | null
          showroom_id?: string | null
          source?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          assigned_to?: string | null
          company?: string | null
          created_at?: string | null
          email?: string
          estimated_value?: number | null
          follow_up_date?: string | null
          id?: string
          lead_type?: string | null
          message?: string | null
          name?: string
          phone?: string | null
          showroom_id?: string | null
          source?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "leads_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leads_showroom_id_fkey"
            columns: ["showroom_id"]
            isOneToOne: false
            referencedRelation: "showrooms"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          action_url: string | null
          created_at: string | null
          id: string
          is_read: boolean | null
          message: string
          title: string
          type: string | null
          user_id: string | null
        }
        Insert: {
          action_url?: string | null
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message: string
          title: string
          type?: string | null
          user_id?: string | null
        }
        Update: {
          action_url?: string | null
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message?: string
          title?: string
          type?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          assigned_to: string | null
          attachments: Json | null
          bulk_buyer_id: string | null
          created_at: string | null
          created_by: string | null
          customer_address: string
          customer_email: string | null
          customer_name: string
          customer_phone: string | null
          delivery_date: string | null
          discount_percentage: number | null
          final_amount: number
          id: string
          installation_date: string | null
          order_number: string
          order_type: string | null
          product_id: string | null
          quantity: number | null
          showroom_id: string | null
          special_requirements: string | null
          status: string | null
          total_amount: number
          unit_price: number
          updated_at: string | null
        }
        Insert: {
          assigned_to?: string | null
          attachments?: Json | null
          bulk_buyer_id?: string | null
          created_at?: string | null
          created_by?: string | null
          customer_address: string
          customer_email?: string | null
          customer_name: string
          customer_phone?: string | null
          delivery_date?: string | null
          discount_percentage?: number | null
          final_amount: number
          id?: string
          installation_date?: string | null
          order_number: string
          order_type?: string | null
          product_id?: string | null
          quantity?: number | null
          showroom_id?: string | null
          special_requirements?: string | null
          status?: string | null
          total_amount: number
          unit_price: number
          updated_at?: string | null
        }
        Update: {
          assigned_to?: string | null
          attachments?: Json | null
          bulk_buyer_id?: string | null
          created_at?: string | null
          created_by?: string | null
          customer_address?: string
          customer_email?: string | null
          customer_name?: string
          customer_phone?: string | null
          delivery_date?: string | null
          discount_percentage?: number | null
          final_amount?: number
          id?: string
          installation_date?: string | null
          order_number?: string
          order_type?: string | null
          product_id?: string | null
          quantity?: number | null
          showroom_id?: string | null
          special_requirements?: string | null
          status?: string | null
          total_amount?: number
          unit_price?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_showroom_id_fkey"
            columns: ["showroom_id"]
            isOneToOne: false
            referencedRelation: "showrooms"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          id: string
          image_url: string | null
          is_featured: boolean | null
          name: string
          price_range: string | null
          specifications: Json | null
          updated_at: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          name: string
          price_range?: string | null
          specifications?: Json | null
          updated_at?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          name?: string
          price_range?: string | null
          specifications?: Json | null
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          bulk_buyer_id: string | null
          created_at: string | null
          email: string | null
          employee_id: string | null
          first_name: string | null
          id: string
          last_name: string | null
          phone: string | null
          role: Database["public"]["Enums"]["user_role"]
          showroom_id: string | null
          updated_at: string | null
        }
        Insert: {
          bulk_buyer_id?: string | null
          created_at?: string | null
          email?: string | null
          employee_id?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          showroom_id?: string | null
          updated_at?: string | null
        }
        Update: {
          bulk_buyer_id?: string | null
          created_at?: string | null
          email?: string | null
          employee_id?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          showroom_id?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          client_name: string | null
          completion_date: string | null
          created_at: string | null
          created_by: string | null
          description: string | null
          id: string
          image_url: string | null
          location: string | null
          project_type: string | null
          start_date: string | null
          status: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          client_name?: string | null
          completion_date?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          location?: string | null
          project_type?: string | null
          start_date?: string | null
          status?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          client_name?: string | null
          completion_date?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          location?: string | null
          project_type?: string | null
          start_date?: string | null
          status?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      service_tickets: {
        Row: {
          amc_contract_id: string | null
          assigned_technician: string | null
          completed_date: string | null
          created_at: string | null
          created_by: string | null
          customer_name: string
          customer_phone: string | null
          customer_rating: number | null
          id: string
          issue_description: string
          priority: string | null
          property_address: string
          resolution_notes: string | null
          scheduled_date: string | null
          showroom_id: string | null
          status: string | null
          ticket_number: string
          updated_at: string | null
        }
        Insert: {
          amc_contract_id?: string | null
          assigned_technician?: string | null
          completed_date?: string | null
          created_at?: string | null
          created_by?: string | null
          customer_name: string
          customer_phone?: string | null
          customer_rating?: number | null
          id?: string
          issue_description: string
          priority?: string | null
          property_address: string
          resolution_notes?: string | null
          scheduled_date?: string | null
          showroom_id?: string | null
          status?: string | null
          ticket_number: string
          updated_at?: string | null
        }
        Update: {
          amc_contract_id?: string | null
          assigned_technician?: string | null
          completed_date?: string | null
          created_at?: string | null
          created_by?: string | null
          customer_name?: string
          customer_phone?: string | null
          customer_rating?: number | null
          id?: string
          issue_description?: string
          priority?: string | null
          property_address?: string
          resolution_notes?: string | null
          scheduled_date?: string | null
          showroom_id?: string | null
          status?: string | null
          ticket_number?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "service_tickets_amc_contract_id_fkey"
            columns: ["amc_contract_id"]
            isOneToOne: false
            referencedRelation: "amc_contracts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_tickets_assigned_technician_fkey"
            columns: ["assigned_technician"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_tickets_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "service_tickets_showroom_id_fkey"
            columns: ["showroom_id"]
            isOneToOne: false
            referencedRelation: "showrooms"
            referencedColumns: ["id"]
          },
        ]
      }
      showrooms: {
        Row: {
          address: string | null
          created_at: string | null
          email: string | null
          id: string
          location: string
          manager_id: string | null
          name: string
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          location: string
          manager_id?: string | null
          name: string
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string | null
          email?: string | null
          id?: string
          location?: string
          manager_id?: string | null
          name?: string
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "showrooms_manager_id_fkey"
            columns: ["manager_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      check_user_role: {
        Args: {
          user_id: string
          required_role: Database["public"]["Enums"]["user_role"]
        }
        Returns: boolean
      }
      generate_contract_number: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      generate_invoice_number: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      generate_order_number: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      generate_ticket_number: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_user_showroom: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      is_admin: {
        Args: { user_id: string }
        Returns: boolean
      }
      is_admin_or_super: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
    }
    Enums: {
      user_role:
        | "super_admin"
        | "admin"
        | "showroom_employee"
        | "bulk_buyer"
        | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      user_role: [
        "super_admin",
        "admin",
        "showroom_employee",
        "bulk_buyer",
        "user",
      ],
    },
  },
} as const
