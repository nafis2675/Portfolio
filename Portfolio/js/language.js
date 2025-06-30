document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    const langCurrent = document.querySelector('.lang-current');
    const langAlt = document.querySelector('.lang-alt');

    const translations = {
        en: {
            // Navbar
            "Home": "Home",
            "Projects": "Projects",
            "About": "About",
            "Experience": "Experience",
            "Contact": "Contact",
            // Hero Section
            "[INITIALIZING]...": "[INITIALIZING]...",
            "[LOADING PROFILE]...": "[LOADING PROFILE]...",
            "[SYSTEM READY]": "[SYSTEM READY]",
            "John Doe": "John Doe",
            "AI & Machine Learning Engineer": "AI & Machine Learning Engineer",
            "Passionate about solving complex problems using artificial intelligence and machine learning. Transforming data into intelligent solutions that make a real-world impact.": "Passionate about solving complex problems using artificial intelligence and machine learning. Transforming data into intelligent solutions that make a real-world impact.",
            "> Explore My Work": "> Explore My Work",
            "Get In Touch": "Get In Touch",
            // Stats Section
            "Projects Completed": "Projects Completed",
            "Years Experience": "Years Experience",
            "Technologies Mastered": "Technologies Mastered",
            "Problems Solved": "Problems Solved",
            // Interactive Terminal
            "Type 'help' for available commands": "Type 'help' for available commands",
            // Footer
            "© 2024 AI/ML Engineer Portfolio. Built with passion and code.": "© 2024 AI/ML Engineer Portfolio. Built with passion and code.",
            // Projects Page
            "My Projects": "My Projects",
            "A collection of my AI and Machine Learning projects, showcasing diverse applications and technical expertise.": "A collection of my AI and Machine Learning projects, showcasing diverse applications and technical expertise.",
            "Neural Style Transfer": "Neural Style Transfer",
            "Implemented a deep learning model to transfer artistic styles from one image to another.": "Implemented a deep learning model to transfer artistic styles from one image to another.",
            "Sentiment Analysis API": "Sentiment Analysis API",
            "Developed a RESTful API for real-time sentiment analysis of text data using NLP techniques.": "Developed a RESTful API for real-time sentiment analysis of text data using NLP techniques.",
            "Reinforcement Learning for Games": "Reinforcement Learning for Games",
            "Trained an AI agent to play classic arcade games using Q-learning and Deep Q-Networks.": "Trained an AI agent to play classic arcade games using Q-learning and Deep Q-Networks.",
            "View Details": "View Details",
            // About Page
            "About Me & Skills": "About Me & Skills",
            "Discover my professional background, interests, and the technical skills I bring to the table.": "Discover my professional background, interests, and the technical skills I bring to the table.",
            "Profile": "Profile",
            "Name:": "Name:",
            "Location:": "Location:",
            "Nationality:": "Nationality:",
            "Interests:": "Interests:",
            "Tokyo, Japan": "Tokyo, Japan",
            "Japanese": "Japanese",
            "AI Ethics, Quantum Computing, Robotics": "AI Ethics, Quantum Computing, Robotics",
            "Skills Matrix": "Skills Matrix",
            "Programming Languages": "Programming Languages",
            "Frameworks & Libraries": "Frameworks & Libraries",
            "Tools & Platforms": "Tools & Platforms",
            "Concepts & Domains": "Concepts & Domains",
            // Experience Page
            "Work Experience": "Work Experience",
            "A detailed timeline of my professional journey and key contributions.": "A detailed timeline of my professional journey and key contributions.",
            "Jan 2022 - Present": "Jan 2022 - Present",
            "Senior AI Engineer": "Senior AI Engineer",
            "Tech Solutions Inc., Tokyo": "Tech Solutions Inc., Tokyo",
            "Led development of a real-time fraud detection system using deep learning, reducing false positives by 30%.": "Led development of a real-time fraud detection system using deep learning, reducing false positives by 30%.",
            "Designed and implemented scalable machine learning pipelines on AWS, handling terabytes of data daily.": "Designed and implemented scalable machine learning pipelines on AWS, handling terabytes of data daily.",
            "Mentored junior engineers and contributed to internal AI research initiatives.": "Mentored junior engineers and contributed to internal AI research initiatives.",
            "Mar 2019 - Dec 2021": "Mar 2019 - Dec 2021",
            "Machine Learning Engineer": "Machine Learning Engineer",
            "Innovate AI Labs, Osaka": "Innovate AI Labs, Osaka",
            "Developed and optimized NLP models for customer sentiment analysis, improving accuracy by 15%.": "Developed and optimized NLP models for customer sentiment analysis, improving accuracy by 15%.",
            "Collaborated with cross-functional teams to integrate ML solutions into existing product lines.": "Collaborated with cross-functional teams to integrate ML solutions into existing product lines.",
            "Researched and prototyped computer vision algorithms for image recognition tasks.": "Researched and prototyped computer vision algorithms for image recognition tasks.",
            // Contact Page
            "Get In Touch": "Get In Touch",
            "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!": "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!",
            "Professional Profiles": "Professional Profiles",
            "Email Me": "Email Me",
            "Copy Email": "Copy Email",
            "Copied!": "Copied!",
            // Project Detail Page
            "Project Title": "Project Title",
            "Loading project description...": "Loading project description...",
            "View on GitHub": "View on GitHub",
            "Live Demo": "Live Demo",
            "< Back to Projects": "< Back to Projects",
            "Project Not Found": "Project Not Found",
            "The requested project could not be found. Please go back to the projects page.": "The requested project could not be found. Please go back to the projects page.",
            "Implemented a deep learning model to transfer artistic styles from one image to another using TensorFlow and VGG19. This project demonstrates the power of convolutional neural networks in creative applications.": "Implemented a deep learning model to transfer artistic styles from one image to another using TensorFlow and VGG19. This project demonstrates the power of convolutional neural networks in creative applications.",
            "Developed a RESTful API for real-time sentiment analysis of text data. Utilized Flask for the backend, NLTK and Scikit-learn for NLP, and Docker for containerization. The API can classify text as positive, negative, or neutral.": "Developed a RESTful API for real-time sentiment analysis of text data. Utilized Flask for the backend, NLTK and Scikit-learn for NLP, and Docker for containerization. The API can classify text as positive, negative, or neutral.",
            "Trained an AI agent to play classic arcade games (e.g., Atari Breakout) using Q-learning and Deep Q-Networks (DQN) with PyTorch. Explored various reward functions and network architectures.": "Trained an AI agent to play classic arcade games (e.g., Atari Breakout) using Q-learning and Deep Q-Networks (DQN) with PyTorch. Explored various reward functions and network architectures."
        },
        jp: {
            // Navbar
            "Home": "ホーム",
            "Projects": "プロジェクト",
            "About": "について",
            "Experience": "経験",
            "Contact": "連絡先",
            // Hero Section
            "[INITIALIZING]...": "[初期化中]...",
            "[LOADING PROFILE]...": "[プロファイル読み込み中]...",
            "[SYSTEM READY]": "[システム準備完了]",
            "John Doe": "ジョン・ドウ",
            "AI & Machine Learning Engineer": "AI・機械学習エンジニア",
            "Passionate about solving complex problems using artificial intelligence and machine learning. Transforming data into intelligent solutions that make a real-world impact.": "人工知能と機械学習を使用して複雑な問題を解決することに情熱を注いでいます。データを現実世界に影響を与えるインテリジェントなソリューションに変換します。",
            "> Explore My Work": "> 作品を見る",
            "Get In Touch": "連絡する",
            // Stats Section
            "Projects Completed": "完了プロジェクト",
            "Years Experience": "年の経験",
            "Technologies Mastered": "習得技術",
            "Problems Solved": "解決した問題",
            // Interactive Terminal
            "Type 'help' for available commands": "利用可能なコマンドは'help'と入力",
            // Footer
            "© 2024 AI/ML Engineer Portfolio. Built with passion and code.": "© 2024 AI/MLエンジニアポートフォリオ。情熱とコードで構築。",
            // Projects Page
            "My Projects": "私のプロジェクト",
            "A collection of my AI and Machine Learning projects, showcasing diverse applications and technical expertise.": "私のAIおよび機械学習プロジェクトのコレクション。多様なアプリケーションと技術的専門知識を紹介します。",
            "Neural Style Transfer": "ニューラルスタイル転送",
            "Implemented a deep learning model to transfer artistic styles from one image to another.": "ある画像から別の画像へ芸術的なスタイルを転送する深層学習モデルを実装しました。",
            "Sentiment Analysis API": "感情分析API",
            "Developed a RESTful API for real-time sentiment analysis of text data using NLP techniques.": "NLP技術を使用してテキストデータのリアルタイム感情分析のためのRESTful APIを開発しました。",
            "Reinforcement Learning for Games": "ゲームのための強化学習",
            "Trained an AI agent to play classic arcade games using Q-learning and Deep Q-Networks.": "Q学習と深層Qネットワークを使用して、AIエージェントに古典的なアーケードゲームをプレイするように訓練しました。",
            "View Details": "詳細を見る",
            // About Page
            "About Me & Skills": "私について＆スキル",
            "Discover my professional background, interests, and the technical skills I bring to the table.": "私の専門的な背景、興味、そして私が貢献できる技術スキルをご覧ください。",
            "Profile": "プロフィール",
            "Name:": "名前:",
            "Location:": "所在地:",
            "Nationality:": "国籍:",
            "Interests:": "興味:",
            "Tokyo, Japan": "日本、東京",
            "Japanese": "日本人",
            "AI Ethics, Quantum Computing, Robotics": "AI倫理、量子コンピューティング、ロボット工学",
            "Skills Matrix": "スキルマトリックス",
            "Programming Languages": "プログラミング言語",
            "Frameworks & Libraries": "フレームワーク＆ライブラリ",
            "Tools & Platforms": "ツール＆プラットフォーム",
            "Concepts & Domains": "概念＆ドメイン",
            // Experience Page
            "Work Experience": "職務経験",
            "A detailed timeline of my professional journey and key contributions.": "私の専門的な道のりと主要な貢献の詳細なタイムライン。",
            "Jan 2022 - Present": "2022年1月 - 現在",
            "Senior AI Engineer": "シニアAIエンジニア",
            "Tech Solutions Inc., Tokyo": "テックソリューションズ株式会社、東京",
            "Led development of a real-time fraud detection system using deep learning, reducing false positives by 30%.": "深層学習を用いたリアルタイム不正検知システムの開発を主導し、誤検知を30%削減。",
            "Designed and implemented scalable machine learning pipelines on AWS, handling terabytes of data daily.": "AWS上でスケーラブルな機械学習パイプラインを設計・実装し、毎日テラバイト規模のデータを処理。",
            "Mentored junior engineers and contributed to internal AI research initiatives.": "若手エンジニアの指導と社内AI研究イニシアチブに貢献。",
            "Mar 2019 - Dec 2021": "2019年3月 - 2021年12月",
            "Machine Learning Engineer": "機械学習エンジニア",
            "Innovate AI Labs, Osaka": "イノベートAIラボ、大阪",
            "Developed and optimized NLP models for customer sentiment analysis, improving accuracy by 15%.": "顧客感情分析のためのNLPモデルを開発・最適化し、精度を15%向上。",
            "Collaborated with cross-functional teams to integrate ML solutions into existing product lines.": "既存の製品ラインにMLソリューションを統合するため、部門横断チームと協力。",
            "Researched and prototyped computer vision algorithms for image recognition tasks.": "画像認識タスクのためのコンピュータビジョンアルゴリズムを研究・プロトタイプ作成。",
            // Contact Page
            "Get In Touch": "お問い合わせ",
            "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!": "新しいプロジェクト、創造的なアイデア、またはあなたのビジョンの一部となる機会についていつでも話し合う準備ができています。お気軽にご連絡ください！",
            "Professional Profiles": "プロフェッショナルプロフィール",
            "Email Me": "メールを送る",
            "Copy Email": "メールをコピー",
            "Copied!": "コピーしました！",
            // Project Detail Page
            "Project Title": "プロジェクトタイトル",
            "Loading project description...": "プロジェクトの説明を読み込み中...",
            "View on GitHub": "GitHubで見る",
            "Live Demo": "ライブデモ",
            "< Back to Projects": "< プロジェクトに戻る",
            "Project Not Found": "プロジェクトが見つかりません",
            "The requested project could not be found. Please go back to the projects page.": "要求されたプロジェクトは見つかりませんでした。プロジェクトページに戻ってください。",
            "Implemented a deep learning model to transfer artistic styles from one image to another using TensorFlow and VGG19. This project demonstrates the power of convolutional neural networks in creative applications.": "TensorFlowとVGG19を使用して、ある画像から別の画像へ芸術的なスタイルを転送する深層学習モデルを実装しました。このプロジェクトは、創造的なアプリケーションにおける畳み込みニューラルネットワークの力を示しています。",
            "Developed a RESTful API for real-time sentiment analysis of text data. Utilized Flask for the backend, NLTK and Scikit-learn for NLP, and Docker for containerization. The API can classify text as positive, negative, or neutral.": "テキストデータのリアルタイム感情分析のためのRESTful APIを開発しました。バックエンドにはFlask、NLPにはNLTKとScikit-learn、コンテナ化にはDockerを使用しました。APIはテキストを肯定的、否定的、中立的に分類できます。",
            "Trained an AI agent to play classic arcade games (e.g., Atari Breakout) using Q-learning and Deep Q-Networks (DQN) with PyTorch. Explored various reward functions and network architectures.": "PyTorchを使用してQ学習と深層Qネットワーク（DQN）を用いて、AIエージェントに古典的なアーケードゲーム（例：Atari Breakout）をプレイするように訓練しました。様々な報酬関数とネットワークアーキテクチャを探索しました。"
        }
    };

    let currentLang = localStorage.getItem('lang') || 'en';

    const applyTranslations = () => {
        document.querySelectorAll('[data-en]').forEach(element => {
            const enText = element.getAttribute('data-en');
            const jpText = element.getAttribute('data-jp');
            
            if (currentLang === 'en') {
                element.textContent = enText;
            } else {
                element.textContent = jpText;
            }
        });

        // Update current and alt language display
        if (currentLang === 'en') {
            langCurrent.textContent = 'EN';
            langAlt.textContent = 'JP';
            document.documentElement.lang = 'en';
        } else {
            langCurrent.textContent = 'JP';
            langAlt.textContent = 'EN';
            document.documentElement.lang = 'jp';
        }

        // Dispatch a custom event for other scripts to react to language changes
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: currentLang } }));
    };

    // Initial application of translations
    applyTranslations();

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'jp' : 'en';
        localStorage.setItem('lang', currentLang);
        applyTranslations();
    });
});
