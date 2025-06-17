import {
  Users,
  Search,
  Code,
  MonitorSpeaker,
  FileText,
  TrendingUp,
} from "lucide-react";

const processSteps = [
  {
    id: 1,
    title: "Consultation",
    description:
      "We begin with a thorough consultation to understand your business goals, technical requirements, and project vision.",
    icon: Users,
    color: "blue-600",
    delay: "0ms",
  },
  {
    id: 2,
    title: "R&D",
    description:
      "Our team conducts comprehensive research and development to identify the best technologies and approaches for your project.",
    icon: Search,
    color: "blue-500",
    delay: "100ms",
  },
  {
    id: 3,
    title: "Implementation",
    description:
      "We bring your vision to life with clean, scalable code and modern development practices.",
    icon: Code,
    color: "blue-600",
    delay: "200ms",
  },
  {
    id: 4,
    title: "Monitoring & Optimization",
    description:
      "Continuous monitoring and performance optimization ensure your application runs at peak efficiency.",
    icon: MonitorSpeaker,
    color: "blue-500",
    delay: "300ms",
  },
  {
    id: 5,
    title: "Reporting & Communications",
    description:
      "Regular reports and clear communication keep you informed throughout the development process.",
    icon: FileText,
    color: "blue-600",
    delay: "400ms",
  },
  {
    id: 6,
    title: "Continual Improvement",
    description:
      "We provide ongoing support and enhancements to ensure your application evolves with your business needs.",
    icon: TrendingUp,
    color: "blue-500",
    delay: "500ms",
  },
];

const ProcessCard = ({
  step,
  index,
}: {
  step: (typeof processSteps)[0];
  index: number;
}) => {
  const IconComponent = step.icon;

  return (
    <div
      className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:-translate-y-2 animate-fade-in"
      style={{ animationDelay: step.delay }}
    >
      {/* Step number */}
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
        {step.id}
      </div>

      {/* Icon */}
      <div
        className={`w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
      >
        <IconComponent className={`w-8 h-8 text-${step.color}`} />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {step.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{step.description}</p>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-8 shadow-lg">
            <div className="w-6 h-6 border-2 border-white rounded-full border-dashed animate-spin"></div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-blue-600 bg-clip-text text-transparent mb-6 leading-tight">
            Our Working Process
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A streamlined approach to delivering exceptional web development
            solutions that drive your business forward
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center mt-8">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full mx-4"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full"></div>
          </div>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {processSteps.map((step, index) => (
            <ProcessCard key={step.id} step={step} index={index} />
          ))}
        </div>

        {/* Bottom section */}
        <div
          className="text-center mt-20 animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-600 mb-6">
              Let's discuss how our proven process can bring your vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Started
              </button>
              <button className="border-2 border-blue-500 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
