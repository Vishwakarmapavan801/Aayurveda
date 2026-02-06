// import React, { useState } from "react";
// import "../allcss/About.css";

// // Assets Imports
// import Banner4 from "../assets/Banner-4.jpg";
// import AshokGupta from "../assets/AshokGupta.png";
// import SingleService2 from "../assets/single-service-2.jpg";
// import SingleService3 from "../assets/single-service-3.jpg";
// import mf from "../assets/mf.png";
// import AboutShape5 from "../assets/about-shape-5.png";
// import icon1 from "../assets/icon-1.png";
// import icon2 from "../assets/icon-2.png";
// import icon3 from "../assets/icon-3.png";
// import icon4 from "../assets/icon-4.png";
// import icon5 from "../assets/icon-5.png";
// import icon6 from "../assets/icon-6.png";
// import resize from '../assets/resize.png';
// import smicon1 from "../assets/smicon1.webp";
// import smicon2 from "../assets/smicon2.webp";
// import smicon3 from "../assets/smicon3.webp";
// import combo from "../assets/combo.png";
// import combo1 from "../assets/combo1.png";
// import combo2 from "../assets/combo2.png";
// import combo4 from "../assets/combo4.jpeg";
// import combo5 from "../assets/combo5.jpeg";
// import combo6 from "../assets/combo6.jpeg";

// const About = () => {
//   const images = [combo4, combo5, combo6];
//   const [index, setIndex] = useState(0);

//   const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
//   const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

//   return (
//     <div className="about-container">
//       {/* Hero Section */}
//       <section className="about-content">
//         <h2>
//           बांझपन लाईलाज बीमारी नहीं है <br />
//           पुत्रवेदा से गूँजी हमारे घर में खुशियों की किलकारियां
//         </h2>
//         <img src={Banner4} alt="Banner" className="hero-banner" />
//       </section>

//       {/* Intro Text Section */}
//       <section className="text-section">
//         <p>नमस्कार, दोस्तों मेरा नाम Anu शर्मा है और मेरा यह ब्लॉग लिखने का मकसद बांझपन से जूझ रहे दंपतियों को सही मार्ग दिखाना है।</p>
//         <p>
//           4.5 साल। क्या आप कल्पना भी कर सकते है, के अगर एक महिला शादी के 4.5 साल बाद तक भी माँ नहीं बन पाये तो उसको और उसके पति को कितने दुखों और कितनी जिल्लतों से गुज़रना पड़ता है। सच तो यह है के, मै नहीं चाहती, के आप लोग इसकी कल्पना भी करे। क्योंकि इस संसार का सबसे बड़ा दुख यही है के आप औलाद के सुख से वंचित रह जाये।
//           <br /><br />
//           मेरी शादी को 2 साल गुज़र चुके थे लेकिन अभी तक हमारा Parents बनने का सपना अधूरा ही था। हमने अपने शहर की Best Gynecologist से Consult किया। रिपोर्ट्स के बाद पता चला कि मुझे PCOD की समस्या है और मेरे Husband का Semen Count और Motility कम है।
//         </p>
//       </section>

//       {/* Service Images */}
//       <div className="service-img-grid">
//         <img src={SingleService2} alt="service 1" />
//         <img src={SingleService3} alt="service 2" />
//       </div>

//       <section className="text-section">
//         <p>
//           Problem Diagnose होते ही हमने Treatment शुरू कर दिया। 6 महीने बाद भी जब कोई Result नहीं मिला, तो हमने Doctor से पूछा। Doctor ने कहा कि इसमें कितना भी वक्त लग सकता है। Doctor की इस बात को सुनकर हमारे Stress का Level और बढ़ने लगा।
//         </p>
//       </section>

//       {/* Doctor Quote Section */}
//       <section className="doctor-section">
//         <div className="doctor-img">
//           <img src={AshokGupta} alt="Dr Ashok Gupta" />
//         </div>
//         <h2 className="quote">
//           “ यदि आप वास्तव में प्रजनन क्षमता हासिल करना चाहते हैं, तो डॉ. अशोक गुप्ता द्वारा विकसित उत्पादों का उपयोग करें ”
//         </h2>
//       </section>

//       {/* Male & Female Product Info */}
//       <div className="mf-section">
//         <div className="male-content">
//           <h3>पुत्रजीविक में Male और Female दोनों के लिये अलग-अलग मेडिसिन आती है</h3>
//           <p>
//             वक़्त बीतता गया, और हमारा Putraveda का कोर्स चलता गया। Putraveda का टोटल कोर्स 2 महीने का था। कोर्स खत्म होने के 1 महीने बाद हमारे साथ वो हुआ जिसकी हमने कल्पना भी नहीं की थी। मेरी Pregnancy Test Report Positive आयी।
//           </p>
//         </div>
//         <div className="mf-img-wrapper">
//           <img src={mf} alt="Medicine" className="mf-main" />
//           <img src={AboutShape5} alt="Shape" className="mf-shape-rotate" />
//         </div>
//       </div>

//       {/* Effectiveness Icons */}
//       <section className="effectiveness-section">
//         <h2>विज्ञान द्वारा समर्थित सिद्ध प्रभावशीलता</h2>
//         <div className="steps-grid">
//           {[
//             { img: icon1, text: "गर्भाशय ग्रीवा बलगम सुधार" },
//             { img: icon2, text: "प्रजनन प्रणाली मजबूत" },
//             { img: icon3, text: "स्वस्थ गर्भावस्था" },
//             { img: icon4, text: "पोषित गर्भाशय" },
//             { img: icon5, text: "समय पर ओव्यूलेशन" },
//             { img: icon6, text: "हार्मोन संतुलन" }
//           ].map((item, i) => (
//             <div key={i} className="step-card">
//               <img src={item.img} alt={item.text} />
//               <span>{item.text}</span>
//             </div>
//           ))}
//         </div>
//         <img src={resize} alt="Divider" className="divider-img" />
//       </section>

//       {/* Monthly Progress */}
//       <section className="months-grid">
//         <div className="month-card">
//           <img src={smicon1} alt="Month 1" />
//           <h3>महीना 1</h3>
//           <p>स्वस्थ अंडे जारी करना</p>
//         </div>
//         <div className="month-card">
//           <img src={smicon2} alt="Month 2" />
//           <h3>महीना 2</h3>
//           <p>समय पर ओव्यूलेशन</p>
//         </div>
//         <div className="month-card">
//           <img src={smicon3} alt="Month 3" />
//           <h3>महीना 3</h3>
//           <p>गर्भधारण की संभावना</p>
//         </div>
//       </section>

//       {/* Static Combo Images */}
//       <div className="combo-static">
//         <img src={combo} alt="combo 1" />
//         <img src={combo1} alt="combo 2" />
//         <img src={combo2} alt="combo 3" />
//       </div>

//       {/* Final Offer & Slider Section */}
//       <div className="mf-section slider-section">
//         <div className="male-content">
//           <h3>पुत्रजीविक में Male और Female दोनों के लिये अलग-अलग मेडिसिन आती है</h3>
//           <p>कोर्स खत्म होने के 1 महीने बाद मेरी Pregnancy Report Positive आयी।</p>
//           <button className="mf-btn">Order Now</button>
//         </div>
//         <div className="mf-slider">
//           <button className="nav-btn left" onClick={prevSlide}>‹</button>
//           <img src={images[index]} alt="Product Slide" className="fade-in" />
//           <button className="nav-btn right" onClick={nextSlide}>›</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;





import React, { useState } from "react";



import "../allcss/About.css";



import Banner4 from "../assets/Banner-4.jpg";
import AshokGupta from "../assets/AshokGupta.png";
import SingleService2 from "../assets/single-service-2.jpg";
import SingleService3 from "../assets/single-service-3.jpg";
import mf from "../assets/mf.png";
import AboutShape5 from "../assets/about-shape-5.png";

import icon1 from "../assets/icon-1.png";
import icon2 from "../assets/icon-2.png";
import icon3 from "../assets/icon-3.png";
import icon4 from "../assets/icon-4.png";
import icon5 from "../assets/icon-5.png";
import icon6 from "../assets/icon-6.png";

import resize from '../assets/resize.png'

import smicon1 from "../assets/smicon1.webp";
import smicon2 from "../assets/smicon2.webp";
import smicon3 from "../assets/smicon3.webp";

import combo from "../assets/combo.png";
import combo1 from "../assets/combo1.png";
import combo2 from "../assets/combo2.png";

import combo4 from "../assets/combo4.jpeg";
import combo5 from "../assets/combo5.jpeg";
import combo6 from "../assets/combo6.jpeg";

const About = () => {


const images = [combo4, combo5, combo6];


  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };



  return (
    <>
      <div className="about-container">
        <div className="about-content">
          <h2>
            बांझपन लाईलाज बीमारी नहीं है <br />
            पुत्रवेदा से गूंजी हमारे घर मे खुशियो की किलकारिया
          </h2>
          <img src={Banner4} alt="Banner" />
        </div>

        <p>
          नमस्कार, दोस्तो मेरा नाम Anu शर्मा है और मेरा यह ब्लॉग लिखने का मकसद
          बांझपन से जूझ रहे दंपतियों को सही मार्ग दिखाना है।
        </p>
        <p>
          नमस्कार, दोस्तो मेरा नाम Anu शर्मा है और मेरा यह ब्लॉग लिखने का सिर्फ इतना ही मकसद है के बांझपन की समस्या की वजह से, जिस दुख और दर्द से, मै और मेरे Husband गुजरे है उससे कोई और Couple ना गुजरे।
<br />
4.5 साल। क्या आप कल्पना भी कर सकते है, के अगर एक महिला शादी के 4.5 साल बाद तक भी माँ नहीं बन पाये तो उसको और उसके पति को कितने दुखो और कितनी जिल्लतों से गुजरना पड़ता है। सच तो यह है के, मै नहीं चाहती, के आप लोग इसकी कल्पना भी करे। क्यूकि इस संसार का सबसे बड़ा दुख यही है के आप औलाद के सुख से वंचित रह जाये।
<br />

शादी के बाद मेरे In Laws Family की हमसे सबसे बड़ी उम्मीद यही थी के, हम उनके वंश को आगे बढ़ाये और जल्द से जल्द हमारे घर के आँगन मे खुशीओं की किलकारिया गूँजे। लेकिन कई बार हमारे सपनो को किसी की बुरी नज़र लग जाती है।
<br />

मेरी शादी को 2 साल गुज़र चुके थे लेकिन अभी तक हमारा Parents बनने का सपना अधुरा ही था। अब हमे लगने लगा था के हमे एक अच्छे डॉक्टर की सलाह की जरूरत है, इसीलिये हमने अपने शहर की best Gynecologist से consult करने का फैसला किया। मै उन Gynecologist का, या फिर उनके हॉस्पिटल का नाम यहा पर mention नहीं करना चहुंगी क्यूकि मेरा यह ब्लॉग लिखना का मकसद किसी को नीचा दिखना नहीं है, बल्कि बांझपन से झुझ रहे निसंतान दंपतियों को एक सही राह दिखाना है।
<br />

Gynecologist से consult करने पर उन्होने हमारी सारी problems सुनने के बाद हमे कुछ Tests करवाने की सलाह दी, जिनमे मेरे FSH, LH, AMH, TSH tests लिखे थे, और मेरे husband का Semen Analysis test लिखा था।
<br />

डॉक्टर के अनुसार, हमने अपने सभी tests करवा लिये, ओर Test Reports मिलने पर हमने दुबारा से अपने डॉक्टर के साथ consult किया, Reports को देखने के बाद हमारी डॉक्टर ने हमे बताया के मुझे PCOD की problem है और मेरे husband का Semen Count ओर Semen Motility दोनों ही कम है।
 <br />
        </p>

        <div className="img">
          <img src={SingleService2} alt="service" />
          <img src={SingleService3} alt="service" />


        </div>
        <p>Problem Diagnose होते ही हमने अपनी डॉक्टर के अनुसार treatment शुरू कर दिया। Treatment शुरू होने के बाद मुझे बड़ी उम्मीद थी के अब मै जल्द ही माँ बन जाऊँगी क्यूकि हम अपने शहर की बेस्ट Gynecologist से treatment ले रहे थे और हर इंसान बेस्ट डॉक्टर के पास जाकर येही सोचता है के अब उसकी बीमारी का ईलाज हो ही जाएगा।
<br />

6 महीने लगातार दवाईया खाने के बाद भी, जब हमे किसी भी तरह का कोई Result नहीं मिला, तो हमने एक बार फिर से अपनी Doctor के साथ consult करने का फैसला किया, इस बार की Consultation के दोहरन, अपने मन का doubt clear करने के लिये, मैंने अपनी Doctor से एक प्रशन पूछा, के डॉक्टर जी और कितना वक्त लग सकता है हमारी इस problem को ठीक होने मे, क्यूकि पिछले 6 महीनो पहले की test reports मे ओर इस बार दुबारा से करवाये गये सभी test की reports में किसी भी तरह की कोई improvement नहीं हुयी थी, ना तो मेरी PCOD की problem मे ओर ना ही मेरे Husband की Semen की प्रोब्लेम मे । इस बार की reports भी पहले की तरह एक समान थी, Reports को देखने के बाद ओर मेरे पूछने पर, उन्होने ने मुझे जवाब दिया, के Anu आपके इस प्रशन का मेरे पास कोई भी जवाब नहीं है, कितना भी वक़्त लग सकता है। Doctor की इस बात को सुन कर मेरे stress का level और बढ़ने लगा।
<br />

खैर,अपनी Gynecologist की बात मानने के इलवा हमारे पास दूसरा कोई ओर रास्ता भी तो नहीं था, इसीलिये हमने treatment को continue करने का फैसला किया। इस बार हमारी Gynecologist ने हमे कुछ नयी दवाईया recommend की ओर हमे आश्वासन दिलवाया के बहुत ही जल्द मेरा माँ बनने का सपना पूरा होगा।
<br/>

वक़्त गुजरता जा रहा था और Treatment चलता जा रहा था, लेकिन अभी तक किसी भी तरह की कोई उम्मीद नहीं दिख रही थी।
<br />
सबसे ज्यादा बुरा तो मुझे तब लगता था जब कोई पुछता था के Anu Good News कब दे रही हो।
<br />

6 महीने और बीत गये और हम आज भी मायूस ही थे। इसलिए हमने अपने डॉक्टर से दुबारा से consult किया और consult करने पर डॉक्टर ने हमे पहले से हुवे सभी टेस्टो को दुबारा से करवाने की सलाह दी, क्यूकि नयी test reports को देखकर वोह से इस बात की पुष्टि करना चाहती थी के पिछले 6 महीनो मे इस बार कितनी improvement हुयी है।
<br />

</p>

        <div className="doctor-img">
          <img src={AshokGupta} alt="Dr Ashok Gupta" />
        </div>

        <h2>
          “ यदि आप वास्तव में प्रजनन क्षमता हासिल करना चाहते हैं, तो
          डॉ. अशोक गुप्ता द्वारा विकसित उत्पादों का उपयोग करें ”
        </h2>

        {/* <div className="mf-img">
          <img src={mf} alt="mf" />
          <img src={AboutShape5} alt="shape" />
        </div>

        <div className="male">
          <h3>
            पुत्रजीविक में Male और Female दोनों के लिये अलग-अलग मेडिसिन आती है
          </h3>
          <p> वक़्त बीतता गया, ओर हमारा Putraveda का कोर्स चलता गया। Putraveda का टोटल कोर्स 2 महीने का था और हमे दवा लेते हुवे 1 महिना बीत गया थे लेकिन हमे अभी भी किसी भी तरह का कोई रिज़ल्ट नहीं मिला था। मुझे अब लगने लगा था के शायद आयुर्वेद मे भी इस समस्या का कोई उपचार नहीं है। लेकिन अभी 1 महीने का कोर्स ओर बाकी था ओर मेरे हसबेंड को पूरी उम्मीद थी के इस बार हमे जरूर रिज़ल्ट मिलेगा। Putraveda का कोर्स खतम हुवा। कोर्स खतम होने के 1 महीने बाद हमारे साथ वोह हुवा जिसकी हमने कभी कल्पना भी नहीं की थी। मेरी pregnancy test Report positive आयी।</p>
        </div> */}

{/*         
<div className="mf-section">
  <div className="male">
    <h3>
      पुत्रजीविक में Male और Female दोनों के लिये अलग-अलग मेडिसिन आती है
    </h3>

    <p>
      वक़्त बीतता गया, ओर हमारा Putraveda का कोर्स चलता गया। Putraveda का टोटल
      कोर्स 2 महीने का था और हमे दवा लेते हुवे 1 महिना बीत गया थे लेकिन हमे
      अभी भी किसी भी तरह का कोई रिज़ल्ट नहीं मिला था। मुझे अब लगने लगा था के
      शायद आयुर्वेद मे भी इस समस्या का कोई उपचार नहीं है। लेकिन अभी 1 महीने
      का कोर्स ओर बाकी था ओर मेरे हसबेंड को पूरी उम्मीद थी के इस बार हमे जरूर
      रिज़ल्ट मिलेगा। Putraveda का कोर्स खतम हुवा। कोर्स खतम होने के 1 महीने
      बाद हमारे साथ वोह हुवा जिसकी हमने कभी कल्पना भी नहीं की थी। मेरी
      pregnancy test Report positive आयी।
    </p>
  </div>

  <div className="mf-img">
    <img src={mf} alt="mf" />
    <img src={AboutShape5} alt="shape" />
  </div>
</div> */}










<div className="mf-section">
  <div className="male">
    <h3>
      पुत्रजीविक में Male और Female दोनों के लिये अलग-अलग मेडिसिन आती है
    </h3>

    <p>
      वक़्त बीतता गया, ओर हमारा Putraveda का कोर्स चलता गया। Putraveda का टोटल
      कोर्स 2 महीने का था और हमे दवा लेते हुवे 1 महिना बीत गया थे लेकिन हमे
      अभी भी किसी भी तरह का कोई रिज़ल्ट नहीं मिला था। मुझे अब लगने लगा था के
      शायद आयुर्वेद मे भी इस समस्या का कोई उपचार नहीं है। लेकिन अभी 1 महीने
      का कोर्स ओर बाकी था ओर मेरे हसबेंड को पूरी उम्मीद थी के इस बार हमे जरूर
      रिज़ल्ट मिलेगा। Putraveda का कोर्स खतम हुवा। कोर्स खतम होने के 1 महीने
      बाद हमारे साथ वोह हुवा जिसकी हमने कभी कल्पना भी नहीं की थी। मेरी
      pregnancy test Report positive आयी।
    </p>
  </div>

  <div className="mf-img">
    <img src={mf} alt="mf" />
    <img src={AboutShape5} alt="shape" />
  </div>
</div>





        <div className="about-card1">
          <h2>विज्ञान द्वारा समर्थित सिद्ध प्रभावशीलता</h2>

          <div className="steps">
            <div><img src={icon1} alt="" /><span>गर्भाशय ग्रीवा बलगम सुधार</span></div>
            <div><img src={icon2} alt="" /><span>प्रजनन प्रणाली मजबूत</span></div>
            <div><img src={icon3} alt="" /><span>स्वस्थ गर्भावस्था</span></div>
            <div><img src={icon4} alt="" /><span>पोषित गर्भाशय</span></div>
            <div><img src={icon5} alt="" /><span>समय पर ओव्यूलेशन</span></div>
            <div><img src={icon6} alt="" /><span>हार्मोन संतुलन</span></div>
          </div>

        <img src={resize} alt="resize" />

        </div>

        <div className="months">
          <div className="month-card">
            <img src={smicon1} alt="" />
            <h3>महीना 1</h3>
            <p>स्वस्थ अंडे जारी करना</p>
          </div>

          <div className="month-card">
            <img src={smicon2} alt="" />
            <h3>महीना 2</h3>
            <p>समय पर ओव्यूलेशन</p>
          </div>

          <div className="month-card">
            <img src={smicon3} alt="" />
            <h3>महीना 3</h3>
            <p>गर्भधारण की संभावना</p>
          </div>
          
        </div>
        {/* <div className="combo-img">
            <img src={combo} alt="combo" />
            <img src={combo1} alt="combo1" />
            <img src={combo2} alt="combo2" />
          </div> */}


        {/* <div  className="offer">
          <h3>मैं और मेरा परिवार</h3>
          <p>उस दिन मुझे इस बात पर पूरी तरह से यकीन हो गया के मॉडर्न science और बड़े बड़े हॉस्पिटल जिन बीमारियो के आगे हार मान जाते है उन लाईलाज बीमारियो मे भी आयुर्वेद चमत्कार कर के दिखाता है।

लेकिन मेरे मन मे अभी भी एक सवाल था के Putraveda दवा मे ऐसा क्या खास है के, मेरी और मेरे हसबेंड की जिस problem को हमारे शहर के बेस्ट Doctors 2 साल मे भी ठीक नहीं कर पाये उसे Putraveda ने मात्र 2 महीने मे कैसे ठीक कर दिया।</p>

<h3>
  ऑफर खत्म होने से पहले ऑर्डर करें
</h3>


<img src={combo4} alt="combo4" />
<img src={combo5} alt="combo5" />
<img src={combo6} alt="combo6" />

<button>Shop now</button>
        </div> */}



         <div className="mf-section">
      <div className="male">
        <h3>
          पुत्रजीविक में Male और Female दोनों के लिये अलग-अलग मेडिसिन आती है
        </h3>

        <p>
          वक़्त बीतता गया, ओर हमारा Putraveda का कोर्स चलता गया। कोर्स खत्म होने
          के 1 महीने बाद मेरी pregnancy report positive आयी।
        </p>

        {/* <button className="mf-btn">Order Now</button> */}
      </div>

      {/* <div className="mf-slider">
        <button className="nav left" onClick={prevSlide}>‹</button>

        <img src={images[index]} alt="slide" />

        <button className="nav right" onClick={nextSlide}>›</button>
      </div> */}
    </div>

      </div>
    </>
  );
};

export default About;





