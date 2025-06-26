import Link from 'next/link';

const About = () => {
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">

          <p className="text-lg text-gray-700 mb-8 text-center">
            수학을 통해 세상의 문제를 해결하는 것에 큰 열정을 가진 석사과정 연구원입니다.
            저는 수학적 지식을 바탕으로 AI, 특히 자연어 처리(NLP)와 거대 언어 모델(LLM) 분야를 깊이 탐구하고 있습니다.
            복잡한 데이터를 분석하고, 모델을 설계하며, 새로운 알고리즘을 제안하는 연구를 진행합니다.
            또한, 데이터 분석과 머신러닝 기술을 활용하여 실제 문제를 해결하는 연구를 진행하고 있습니다.
          </p>

          <div className="space-y-10">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold mb-4 border-b pb-2">Education</h3>
              <ul className="space-y-4 text-gray-700">
                <li>
                  <p className="font-semibold">M.S. in Data Science, Sogang University</p>
                  <p className="text-sm text-gray-500 ml-4">March 2024 – Present</p>
                </li>
                <li>
                  <p className="font-semibold">B.S. in Mathematics, Sogang University</p>
                  <p className="text-sm text-gray-500 ml-4">March 2018 – Feb 2024</p>
                  <p className="ml-8 mt-1 text-sm text-gray-500 italic">
                    Republic of Korea Air Force, Mandatory Military Service (2019–2021)
                  </p>
                </li>
              </ul>
            </div>

            {/* Awards & Scholarships */}
            <div>
              <h3 className="text-2xl font-bold mb-4 border-b pb-2">Awards & Scholarships</h3>
              <ul className="space-y-4 text-gray-700">
                <li>
                  <p className="font-semibold">Graduate</p>
                  <ul className="ml-5 mt-2 list-disc space-y-2">
                    <li>BK21 Scholarship Recipient, Department of Mathematics, Sogang University (2025.03 – Present)</li>
                    <li>Best Paper Award, Korean Institute of Intelligent Systems, 2024 Fall (KIIS) – Analyzing the Limitations of Cosine Similarity for High-Dimensional Data and Evaluating DIEM</li>
                    <li>Best Paper Award, Korean Institute of Intelligent Systems, 2025 Spring (KIIS) – Utilizing RAG-Based LLMs for Real-Time Voice Phishing Detection</li>
                    <li>Best Paper Award, Korean Institute of Intelligent Systems, 2025 Spring (KIIS) – LLM-Based Methodology for Predicting Water Levels of the Gamcheon River</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold">Undergraduate</p>
                  <ul className="ml-5 mt-2 list-disc space-y-2">
                    <li>National Assembly Commendation for Academic Excellence (Award No. 2024-069, 2024)</li>
                    <li>Academic Excellence Scholarship, Incheon National University (2023, Fall)</li>
                    <li>Highest Academic Distinction Scholarship, Incheon National University (2023 Spring, 2022 Fall, 2022 Spring, 2021 Fall, 2021 Spring)</li>
                    <li>INU Development Fund Scholarship, Incheon National University (2022, Spring)</li>
                    <li>College of Natural Sciences Scholarship, Incheon National University (2021, Fall)</li>
                    <li>Startup Scholarship, Incheon National University Startup Support Center (2018)</li>
                    <li>President of University Startup Club, Incheon National University Startup Support Center (2018.03 – 2018.12)</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Publications */}
            <div>
              <h3 className="text-2xl font-bold mb-4 border-b pb-2">Publications</h3>
              <ul className="list-disc list-inside space-y-3 text-gray-700">
                <li>
                  <p>Application of TimeGPT for Enhancing Water Level Prediction in Gamcheon River, Korea</p>
                  <p className="text-sm italic ml-4">Jon-Lark Kim, Jae-Hyun Baek, Keon-Hwi Kim, Tae-Hyo Baek, Chang-Lae Jang</p>
                  <p className="text-sm ml-4">Submitted to IJFIS (January 2025)</p>
                </li>
                <li>
                  <p>High-Dimensional Time Series Classification Based on Similarity Measure</p>
                  <p className="text-sm italic ml-4">Keon-Hwi Kim, Jon-Lark Kim</p>
                  <p className="text-sm ml-4">Submitted to IJFIS (December 2024)</p>
                </li>
              </ul>
            </div>

             {/* Presentations */}
            <div>
              <h3 className="text-2xl font-bold mb-4 border-b pb-2">Presentations</h3>
               <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-lg">2025</p>
                    <ul className="ml-5 mt-2 list-disc space-y-3">
                      <li>
                        <p className="font-medium">"Solving Sudoku through Structure-Inference and Genetic Algorithms"</p>
                        <p className="text-sm text-gray-500">(KSIAM) Korean Society for Industrial and Applied Mathematics, May 16, 2025</p>
                      </li>
                      <li>
                        <p className="font-medium">"Utilizing RAG-Based LLMs for Real-Time Voice Phishing Detection"</p>
                        <p className="text-sm text-gray-500">(KIIS) Korean Institute of Intelligent Systems, April 26, 2025</p>
                      </li>
                      <li>
                        <p className="font-medium">"LLM-Based Methodology for Predicting Water Levels of the Gamcheon River"</p>
                        <p className="text-sm text-gray-500">(KIIS) Korean Institute of Intelligent Systems, April 25, 2025</p>
                      </li>
                      <li>
                        <p className="font-medium">"Invited Talk: Introducing the Model Context Protocol and Its Practical Use in Economic Research"</p>
                        <p className="text-sm text-gray-500">Graduate School of Economics, Sogang University, April 16, 2025</p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">2024</p>
                    <ul className="ml-5 mt-2 list-disc space-y-3">
                      <li>
                        <p className="font-medium">"Limitations of Cosine Similarity"</p>
                        <p className="text-sm text-gray-500">SSG (Sinchon Seminar of Graduates in Mathematics), November 22, 2024</p>
                      </li>
                       <li>
                        <p className="font-medium">"Analyzing the Limitations of Cosine Similarity for High-Dimensional Data and Evaluating DIEM"</p>
                        <p className="text-sm text-gray-500">KIIS (Korean Institute of Intelligent Systems), October 25, 2024</p>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 