import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    title: 'Financial Services',
    description: 'Risk assessment, fraud detection, and automated trading systems',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    link: '/contact'
  },
  {
    title: 'Healthcare',
    description: 'Patient care optimization, diagnostic assistance, and medical imaging',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000',
    link: '/contact'
  },
  {
    title: 'Manufacturing',
    description: 'Predictive maintenance, quality control, and supply chain optimization',
    image: 'https://images.unsplash.com/photo-1565465295423-68c959f89460?auto=format&fit=crop&q=80&w=1000',
    link: '/contact'
  }
];

const Solutions = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industry Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored AI solutions for various industries, driving innovation and
            efficiency across sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {solution.description}
                  </p>
                  <Button asChild variant="outline" className="w-fit group/btn">
                    <Link to={solution.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;