import { AnimatedSection } from "./animated-section"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <AnimatedSection animation="fade-in">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} Kiran Kumar Reddy Savireddy. All rights reserved.
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Aspiring Cybersecurity Professional</p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </footer>
  )
}

export default Footer
