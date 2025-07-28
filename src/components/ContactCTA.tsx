import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactCTA = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 98765 43210",
      description: "24/7 Emergency Support",
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "info@yatraelevators.com",
      description: "Get Quote Within 24 Hours",
      action: "Send Email",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "Bangalore, Karnataka",
      description: "South India Operations",
      action: "Get Directions",
    },
    {
      icon: Clock,
      title: "Service Hours",
      info: "24/7 Available",
      description: "Emergency & Maintenance",
      action: "Schedule Service",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Contact us today for a free consultation and quote. Our expert team
            is ready to help you find the perfect elevator solution for your
            needs.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group cursor-pointer"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 group-hover:bg-white/30 transition-colors duration-300">
                  <method.icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {method.title}
                </h3>

                <p className="text-blue-100 font-medium mb-1">{method.info}</p>

                <p className="text-blue-200 text-sm mb-4">
                  {method.description}
                </p>

                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/20 border border-white/30 hover:border-white/50 rounded-full px-6"
                >
                  {method.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link to="/client-requirement">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Get Free Quote
              </Button>
            </Link>

            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-black bg-white hover:text-blue-600 px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:bg-white"
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>

          <div className="mt-8">
            <Link to="/feedback">
              <Button
                size="sm"
                variant="ghost"
                className="text-blue-200 hover:text-white hover:bg-white/10 underline"
              >
                Share Your Experience & Feedback
              </Button>
            </Link>
          </div>

          <p className="text-blue-200 mt-6 text-sm">
            ✓ Free consultation ✓ Same-day response ✓ Expert guidance ✓
            Competitive pricing
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
