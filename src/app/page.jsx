"use client";
import React from "react";

function MainComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const carouselItems = [
    {
      id: 1,
      title: "",
      subtitle: "",
      imageUrl:
        "https://mauluexe.github.io/image-hosting/title-1748257613480.jpeg",
    },
    {
      id: 2,
      title: "",
      subtitle: "",
      imageUrl:
        "https://placehold.co/1920x1080/D1FFDD/33FF57?text=New+Arrivals",
    },
    {
      id: 3,
      title: "",
      subtitle: "",
      imageUrl:
        "https://placehold.co/1920x1080/D1DFFF/5733FF?text=Double+Points",
    },
    {
      id: 4,
      title: "",
      subtitle: "",
      imageUrl: "https://placehold.co/1920x1080/FFE0B2/FF9800?text=Autumn+Fair",
    },
    {
      id: 5,
      title: "",
      subtitle: "",
      imageUrl:
        "https://placehold.co/1920x1080/B2EBF2/00BCD4?text=Winter+Thanks",
    },
    {
      id: 6,
      title: "",
      subtitle: "",
      imageUrl: "https://placehold.co/1920x1080/C8E6C9/4CAF50?text=Spring+Sale",
    },
  ];

  const toHalfWidthNumbers = (str) => {
    return str.replace(/[０-９]/g, function (s) {
      return String.fromCharCode(s.charCodeAt(0) - 0xfee0);
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const header = document.querySelector("header");
        const headerHeight = header ? header.offsetHeight : 0;
        const elementPosition = element.offsetTop - headerHeight - 20;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === carouselItems.length - 1 ? 0 : prevSlide + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? carouselItems.length - 1 : prevSlide - 1
    );
  };

  React.useEffect(() => {
    const interval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="bg-gray-50 antialiased font-inter min-h-screen">
      <header className="bg-white shadow-md py-4 rounded-b-lg">
        <nav className="container mx-auto px-4 flex justify-between items-center">
          <a
            href="#hero-carousel"
            className="flex items-center text-2xl font-extrabold text-[#DC2626] rounded-lg p-2 hover:bg-red-50 transition-colors duration-300 font-rodin-himawari-pro"
            aria-label="ナイスムラカミホームページへ"
          >
            <span className="bg-[#DC2626] text-white font-black text-3xl px-2 py-1 rounded-md mr-3">
              N
            </span>
            ナイスムラカミ
          </a>

          <div className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-[#DC2626] font-medium px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-red-50"
            >
              お店について
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-[#DC2626] font-medium px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-red-50"
            >
              提供サービス
            </button>
            <a
              href="https://g.co/gemini/share/955427f71df8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#DC2626] font-medium px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-red-50"
            >
              店舗情報
            </a>
            <a
              href="https://g.co/gemini/share/5d22c5b18e64"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#DC2626] font-medium px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-red-50"
            >
              求人情報
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-[#DC2626] font-medium px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-red-50"
            >
              お問い合わせ
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-[#DC2626] focus:outline-none focus:ring-2 focus:ring-[#DC2626] rounded-lg p-2"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-white mt-2 border-t border-gray-200 shadow-inner"
          >
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-[#DC2626] transition-colors duration-300 rounded-lg"
            >
              お店について
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-[#DC2626] transition-colors duration-300 rounded-lg"
            >
              提供サービス
            </button>
            <a
              href="https://g.co/gemini/share/955427f71df8"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMobileMenu}
              className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-[#DC2626] transition-colors duration-300 rounded-lg"
            >
              店舗情報
            </a>
            <a
              href="https://g.co/gemini/share/5d22c5b18e64"
              target="_blank"
              rel="noopener noreferrer"
              onClick={toggleMobileMenu}
              className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-[#DC2626] transition-colors duration-300 rounded-lg"
            >
              求人情報
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-[#DC2626] transition-colors duration-300 rounded-lg"
            >
              お問い合わせ
            </button>
          </div>
        )}
      </header>

      <section
        id="hero-carousel"
        className="bg-gradient-to-r from-[#DC2626] to-red-700 text-white py-20 md:py-32 rounded-b-lg shadow-xl relative overflow-hidden h-[500px] md:h-[600px] flex items-center justify-center"
      >
        <div className="relative w-full h-full">
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselItems.map((item, index) => (
              <div
                key={item.id}
                className="w-full flex-shrink-0 h-full relative"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/1200x600/cccccc/333333?text=No+Image`;
                  }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center p-4 text-center z-10">
                  <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight animate-fade-in-up">
                      {item.title}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in-up delay-200">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={goToPrevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full shadow-lg hover:bg-opacity-75 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 z-20"
            aria-label="前の情報"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full shadow-lg hover:bg-opacity-75 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 z-20"
            aria-label="次の情報"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? "bg-red-600" : "bg-gray-400"
                } hover:bg-red-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500`}
                aria-label={`スライド ${index + 1}へ移動`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
            私たちについて
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <img
                src="https://ucarecdn.com/7ff8e55b-1a78-420c-9ad9-3e3454bc7b40/-/format/auto/"
                alt="ナイスムラカミの店員さんのイラスト"
                className="w-64 h-64 object-contain"
              />
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                ナイスムラカミは、広島に位置する
                <br />
                地域密着型のスーパーマーケットです。
                <br />「
                <span className="font-bold text-[#DC2626]">
                  フレッシュ・安さ！！
                </span>
                」をモットーに、お客様に新鮮で美味しい食品を、
                <br />
                毎日お求めやすい価格で提供することを使命としています。
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                食卓に笑顔と健康をお届けするため、生鮮食品から日用品まで、
                <br />
                幅広い品揃えでお待ちしております。
                <br />
                地域のお客様に愛されるお店を目指し、スタッフ一同、心を込めてサービスを提供しています。
              </p>
              <div className="mt-8 flex justify-center md:justify-start gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center bg-[#FBBF24] text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-yellow-500 transition-colors duration-300 transform hover:scale-105"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  お問い合わせ
                </a>
                <a
                  href="https://g.co/gemini/share/955427f71df8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gray-600 text-white font-bold py-3 px-6 rounded-full shadow-md hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 2a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  店舗情報
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-[#FEE2E2]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            ナイスムラカミの提供サービス
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-red-100 transform hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <img
                  src="https://ucarecdn.com/ae0c9024-6b6d-4fb9-a3a1-8b7f8328bbc1/-/format/auto/"
                  alt="お求めやすい価格のイラスト"
                  className="w-[168px] h-[168px] object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                お求めやすい価格
              </h3>
              <p className="text-gray-600 text-center">
                「安値」をモットーに、毎日のお買い物をサポートするリーズナブルな価格設定です。
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-red-100 transform hover:-translate-y-1">
              <div className="flex justify-center mb-4">
                <img
                  src="https://mauluexe.github.io/image-hosting/ae421fe97169ba1c.jpg"
                  alt="新鮮な生鮮食品のイラスト"
                  className="w-[168px] h-[168px] object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                新鮮な生鮮食品
              </h3>
              <p className="text-gray-600 text-center">
                毎朝仕入れる新鮮な野菜、果物、肉、魚を豊富に取り揃えています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-[#DC2626] text-white py-16 md:py-24 rounded-lg shadow-lg"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            お問い合わせ(事務所)
          </h2>
          <p className="text-lg mb-4 max-w-xl mx-auto opacity-90">
            何かご不明な点がございましたら、お気軽にお問い合わせください。
          </p>
          <p className="text-2xl font-bold mb-6">Tel: 082-282-3558</p>
          <p className="text-lg opacity-90 mt-4">
            各店舗へのお問い合わせは店舗情報からお願いします
          </p>
        </div>
      </section>

      <footer className="bg-gray-800 text-gray-300 py-10 mt-16 rounded-t-lg">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>© 2025 ナイスムラカミ. 全著作権所有.</p>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;