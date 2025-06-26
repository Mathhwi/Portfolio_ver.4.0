const Contact = () => {
  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">연락처</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">이메일</h3>
                <p className="text-gray-600">example@email.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">연락처</h3>
                <p className="text-gray-600">010-1234-5678</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">소셜 미디어</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                    GitHub
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 