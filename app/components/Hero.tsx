'use client';

import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-screen py-20 pt-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* 왼쪽 섹션 - 개인 정보 (좁게) */}
          <div className="md:col-span-2 space-y-8">
            <div className="relative w-48 h-48 mx-auto md:mx-0 overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={192}
                height={192}
                priority
                className="rounded-full object-cover object-center"
              />
            </div>
            
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold mb-1">김건휘</h1>
              <h2 className="text-2xl text-gray-600 mb-2">Kim Keon Hwi</h2>
              <p className="text-xl text-gray-700 mb-6">대학원생</p>
            </div>

            <div className="space-y-2 text-lg text-gray-600">
              <p>010-6661-4332</p>
              <p>rlarjsgnl@sogang.ac.kr</p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">연구실</h3>
              <ul className="space-y-2 text-gray-600">
                <li>서강대학교 리치과학관 R1416</li>
                <li>수리과학 및 데이터사이언스 연구소 (IMDS)</li>
                <li>CICAGO lab</li>
              </ul>
            </div>
          </div>

          {/* 오른쪽 섹션 - 학술 정보 (넓게) */}
          <div className="md:col-span-3 space-y-10">
            {/* 오른쪽 컬럼 상단 여백 추가 */}
            <div className="pt-10 md:pt-10"></div>
            
            {/* 배너 이미지 - 오른쪽 컬럼 최상단 */}
            <div className="relative w-full mb-10">
              <Image
                src="/banner1.png"
                alt="Banner"
                width={1200}
                height={320}
                priority
                style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                className="rounded-lg"
              />
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6 border-b pb-2">🎓 Education</h2>
              <ul className="space-y-6 text-gray-600">
                <li>
                  <p className="ml-5 mt-2 list-disc space-y-1">
                    M.S. in Mathematics & Data Science, Sogang University, (2024–Present)
                  </p>
                </li>
                <li>
                  <p className="ml-5 mt-2 list-disc space-y-1">
                    B.S. in Mathematics, Incheon National University, (2018–2023)
                  </p>
                  <p className="ml-8 mt-1 text-sm text-gray-500 italic">
                    Republic of Korea Air Force, Mandatory Military Service (2019–2021)
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 border-b pb-2">🎤 Talks & Presentations</h2>
              <ul className="space-y-6 text-gray-600">
                <li>
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
                </li>
                <li>
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
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6 border-b pb-2">🏅 Awards & Scholarships</h2>
              <ul className="space-y-6 text-gray-600">
                <li>
                  <p className="font-semibold text-lg">Graduate</p>
                  <ul className="ml-5 mt-2 list-disc space-y-1">
                    <li>BK21 Scholarship Recipient, Department of Mathematics, Sogang University (2025.03 – Present)</li>
                    <li>Best Paper Award, Korean Institute of Intelligent Systems, 2024 Fall (KIIS) – Analyzing the Limitations of Cosine Similarity for High-Dimensional Data and Evaluating DIEM</li>
                    <li>Best Paper Award, Korean Institute of Intelligent Systems, 2025 Spring (KIIS) – Utilizing RAG-Based LLMs for Real-Time Voice Phishing Detection</li>
                    <li>Best Paper Award, Korean Institute of Intelligent Systems, 2025 Spring (KIIS) –   LLM-Based Methodology for Predicting Water Levels of the Gamcheon River</li>
                  </ul>
                </li>
                <li>
                  <p className="font-semibold text-lg">Undergraduate</p>
                  <ul className="ml-5 mt-2 list-disc space-y-1">
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

            <div>
              <h2 className="text-2xl font-bold mb-6 border-b pb-2">📄Papers</h2>
              <ul className="space-y-6 text-gray-600">
                <li>
                  <p className="font-semibold text-lg">Submitted Manuscripts</p>
                  <ul className="ml-5 mt-2 list-disc space-y-3">
                    <li>
                      <p>Application of TimeGPT for Enhancing Water Level Prediction in Gamcheon River, Korea</p>
                      <p className="text-sm italic">Jon-Lark Kim, Jae-Hyun Baek, Keon-Hwi Kim, Tae-Hyo Baek, Chang-Lae Jang</p>
                      <p className="text-sm">Submitted to IJFIS (January 2025)</p>
                    </li>
                    <li>
                      <p>High-Dimensional Time Series Classification Based on Similarity Measure</p>
                      <p className="text-sm italic">Keon-Hwi Kim, Jon-Lark Kim</p>
                      <p className="text-sm">Submitted to IJFIS (December 2024)</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4 border-b pb-2">👩‍🏫 Teaching Assistant</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-gray-600">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 text-left">Semester</th>
                      <th className="px-4 py-2 text-left">Course</th>
                      <th className="px-4 py-2 text-left">Time</th>
                      <th className="px-4 py-2 text-left">Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2">Spring 2025</td>
                      <td className="px-4 py-2">Calculus I (STS2005-03)</td>
                      <td className="px-4 py-2">Mon/Wed 10:30-11:45</td>
                      <td className="px-4 py-2">Room J107</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-2">Fall 2024</td>
                      <td className="px-4 py-2">Linear Algebra (MAT2110-02)</td>
                      <td className="px-4 py-2">Tue/Thu 12:00-13:15</td>
                      <td className="px-4 py-2">Room RA310</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Fall 2024</td>
                      <td className="px-4 py-2">Linear Algebra (MAT2110-03)</td>
                      <td className="px-4 py-2">Tue/Thu 15:00-16:15</td>
                      <td className="px-4 py-2">Room RA308</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-2">Spring 2024</td>
                      <td className="px-4 py-2">Calculus I (STS2005-14)</td>
                      <td className="px-4 py-2">Mon/Wed 10:30-11:45</td>
                      <td className="px-4 py-2">Room RA308</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">Spring 2024</td>
                      <td className="px-4 py-2">Linear Algebra (MAT2110-02)</td>
                      <td className="px-4 py-2">Mon/Wed 12:00-13:15</td>
                      <td className="px-4 py-2">Room K203</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 