import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Users, 
  Award, 
  Heart, 
  Lightbulb, 
  Shield,
  Target,
  Eye,
  Leaf,
  Factory,
  Search,
  HandHeart,
  Building,
  Hotel,
  Truck,
  GraduationCap,
  Mountain,
  Utensils,
  Users2
} from 'lucide-react';

const AboutUs = () => {
  const iconicVerticals = [
    { icon: Hotel, title: "Hotels & Resorts", color: "text-blue-500" },
    { icon: Building, title: "Ready Mix Concrete", color: "text-gray-500" },
    { icon: Building2, title: "Enterprises & Global Infrastructure", color: "text-purple-500" },
    { icon: Building2, title: "Elevators & Escalators", color: "text-green-500" },
    { icon: Utensils, title: "Food Products & Solutions", color: "text-orange-500" },
    { icon: Truck, title: "Highway Food Courts", color: "text-red-500" },
    { icon: Users2, title: "Women Empowerment Initiatives", color: "text-pink-500" },
    { icon: GraduationCap, title: "Education & IT Solutions", color: "text-indigo-500" },
    { icon: Mountain, title: "Mining Division", color: "text-yellow-500" }
  ];

  const coreValues = [
    {
      icon: Award,
      title: "Excellence",
      description: "Excellence navigates us to excel expectations with each and every delivery.",
      color: "text-yellow-500"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Integrity designs how we function with honesty, impartiality, and respect for all stakeholders.",
      color: "text-blue-500"
    },
    {
      icon: Heart,
      title: "Customer-First",
      description: "Our in-depth focus on the customer guarantees that we remain attentive to real needs, never compromising on quality or care.",
      color: "text-red-500"
    }
  ];

  const sustainabilityPractices = [
    "Usage of energy efficient machinery",
    "Mandatory Implementation of zero-waste protocols",
    "Water consumption in a more reducible way",
    "Procurement of sustainable raw materials whenever possible"
  ];

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-background to-muted">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-yellow-400">ICONIC Group</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Fifteen years of excellence, trust, and innovation in shaping the future
            </p>
          </div>
        </section>

        {/* Our Legacy Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Legacy: The ICONIC Group
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
            </div>

            <Card className="mb-12">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  For more than fifteen years, ICONIC Group has addressed a reputation ingrained in brilliance, trust, and innovation. What initiated as a visionary vertical in shaping homes and office spaces from two to three-bedroom residences to expansive duplex and triplex villas, and also extensive materialistic interiors has grown into a hybrid legacy that touched numerous lives.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  At ICONIC, each and every project is the journey of dreams shaping into reality. Our dedication to quality workmanship and client satisfaction has remained the milestone of our journey. As a matter of fact, our legacy speaks for itself. We were able to see this success because of thousands of satisfied customers.
                </p>
              </CardContent>
            </Card>

            {/* ICONIC Group Verticals */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-center mb-8">
                  <Building2 className="h-8 w-8 inline-block mr-3 text-blue-500" />
                  ICONIC Group Verticals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground mb-8">
                  Throughout the years, our pioneering spirit has guided us to expand over innumerable industries. Today, the ICONIC Group pridefully operates in:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {iconicVerticals.map((vertical, index) => (
                    <div key={index} className="flex items-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                      <vertical.icon className={`h-6 w-6 ${vertical.color} mr-3 flex-shrink-0`} />
                      <span className="font-medium">{vertical.title}</span>
                    </div>
                  ))}
                </div>
                <p className="text-center text-muted-foreground mt-8 italic">
                  Each vertical reflects our commitment in molding a better future - one that is Eco-Friendly, inclusive, and ingenious.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Elevators & Escalators Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
          <div className="max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center mb-8">
                  <Target className="h-8 w-8 inline-block mr-3 text-green-500" />
                  Why Elevators & Escalators?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  At ICONIC Group, our growth has always originated from listening to the advancing needs of the globe around us. As contemporary infrastructure scales upward, the want for structured vertical mobility becomes more pivotal than ever. Our journey into Elevators & Escalators is not just a supplement of our engineering potentiality, but a tactical move positioned with our mission to form forward-thinking surroundings.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  With urbanization and sustainable cities rising rapidly, we recognize an accelerating gap in authentic, energy-efficient, and brilliantly designed mobility solutions. This new vertical, Yatra, represents an influential joining of innovation, safety, and sustainability.
                </p>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 p-6 rounded-lg">
                  <p className="text-lg font-medium text-foreground mb-4">
                    More than a product, Yatra is a commitment to promote lives by:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Simplifying day-to-day movement</li>
                    <li>• Certifying accessibility for all age groups and abilities</li>
                    <li>• Combining cutting-edge technology with accommodating design</li>
                    <li>• Increasing user experience and operational dependability</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Mission */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    <Target className="h-8 w-8 inline-block mr-3 text-blue-500" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    At ICONIC Group, our mission is to promote day-to-day living by designing innovative, forward-thinking spaces and solutions that encourage trust, innovation, and sustainability. With each and every project, from magnificent homes to contemporary infrastructure, we always aim to deliver incomparable quality and dedicated design that inspires communities and enhances lives.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Through our multiple verticals, including our latest approach to Elevators & Escalators under the Yatra brand, we are accomplishing engineering progress that is approachable, structured, and impressive.
                  </p>
                </CardContent>
              </Card>

              {/* Vision & Values */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    <Eye className="h-8 w-8 inline-block mr-3 text-purple-500" />
                    Vision & Values
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Our vision is to become a life-changing force in each and every vertical we enter, preparing a well-planned future where architecture, motive, and liability synchronize consensually. We see a planet where every structure, every business, and every transformation by ICONIC Group helps to human well-being and sustainable progress.
                  </p>
                  <div className="space-y-4">
                    {coreValues.map((value, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <value.icon className={`h-5 w-5 ${value.color} mt-1 flex-shrink-0`} />
                        <div>
                          <h4 className="font-semibold text-foreground">{value.title}</h4>
                          <p className="text-sm text-muted-foreground">{value.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-950/20 dark:to-blue-950/20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <Users className="h-10 w-10 inline-block mr-3 text-blue-500" />
              Leadership Team
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
            <Card>
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  ICONIC Group has an inspiring and accomplished leadership team that navigates our mission with intention and integrity. With ingrained expertise across various industries, our leaders bring a futuristic approach that moulds innovation with responsibility. They not only direct our organization toward brilliance but also motivate us to create solutions that serve a better social cause. Led by their insight and steady commitment to values, we continue to build a legacy that delegates communities, supports sustainability, and designs a brighter, more comprehensive future.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Manufacturing & R&D Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Manufacturing */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    <Factory className="h-8 w-8 inline-block mr-3 text-orange-500" />
                    Manufacturing
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    At ICONIC Group, our manufacturing process is the foundation for our dedication to quality, capability, and innovation. With the latest facilities and a meticulous quality assurance framework, we guarantee that every elevator and escalator produced under the Yatra brand reaches the highest industry standards.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our production units are equipped with leading-edge machinery and follow environmentally conscious methodologies to reduce waste and energy use. From raw material selection to final assembly, every step indicates our dedication to resilience, safety, and performance.
                  </p>
                </CardContent>
              </Card>

              {/* R&D */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    <Search className="h-8 w-8 inline-block mr-3 text-purple-500" />
                    Research & Development
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Innovation is at the heart of our journey, and our R&D division is where ideas change into impressive solutions. At ICONIC Group, we invest in research and development to stay ahead of industry trends and review user experiences in vertical mobility.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Our engineers and designers constantly prospect new technologies, sustainable systems, smart automation, and improving safety features. Whether it's adjustable control systems or eco-friendly materials, our R&D efforts enable us to create smarter, safer, and more sustainable mobility experiences.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                <Leaf className="h-10 w-10 inline-block mr-3 text-green-500" />
                Sustainability & Green Practices
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8" />
            </div>

            <Card className="mb-8">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  At ICONIC Group, sustainability is not considered as secondary - in fact it stands as our primary focus and it is our focal point of our innovation and purpose. With fast-growing urbanization and an urgent need for conscious-oriented climate development, we are committed to build a greener tomorrow through each and every purpose, product, process, and partnership.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Green Manufacturing Practices</h3>
                    <div className="space-y-3">
                      {sustainabilityPractices.map((practice, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                          <span className="text-muted-foreground">{practice}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Eco-Friendly Solutions</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our vertical mobility solutions under the Yatra brand are directed towards a strong emphasis on designs that are eco-friendly, energy efficient, and environment friendly. From drives that are regenerative oriented that bring power to the grid, to less machine occupancy procedures that reduce space and resource consumption.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-950/30 dark:to-blue-950/30 p-6 rounded-lg">
                  <p className="text-center text-foreground font-medium">
                    "Our journey is focused on green because the future depends on it."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CSR Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <HandHeart className="h-10 w-10 inline-block mr-3 text-red-500" />
              Corporate Social Responsibility
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto mb-8" />
            
            <Card>
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  At Yatra, elevators transform many lives in an impeccable way through skill development programs, performing new challenging activities, accelerating education for the youth, supporting women empowerment and championing sustainable practices across all our operations.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  We firmly believe that real progress is not just quantified by technological innovation, but by the positive influence and enhancement we create in the communities we serve. Our attempts are strongly rooted in empathy, bringing out the potential of empowering leadership.
                </p>
                <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 p-6 rounded-lg">
                  <p className="text-foreground font-medium">
                    "As we create and rise in the vertical mobility sector, we are more focused on enhancing lifestyles and venturing on a new journey of chanceful opportunities exclusively in the world where we are building for our future generations."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience the ICONIC Difference?
            </h2>
            <p className="text-xl mb-8">
              Join thousands of satisfied customers who have trusted ICONIC Group for over fifteen years
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge variant="outline" className="text-white border-white px-6 py-3 text-lg">
                15+ Years of Excellence
              </Badge>
              <Badge variant="outline" className="text-white border-white px-6 py-3 text-lg">
                9 Industry Verticals
              </Badge>
              <Badge variant="outline" className="text-white border-white px-6 py-3 text-lg">
                Thousands of Satisfied Customers
              </Badge>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default AboutUs;
