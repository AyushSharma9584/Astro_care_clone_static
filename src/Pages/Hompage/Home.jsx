import React from 'react'

import styles from './Home.module.css'




import mandiraBan from "../../Assets/mandiraBan.webp"
import icon1 from "../../Assets/message-solid.svg"
import icon2 from "../../Assets/phone-solid.svg"
import icon3 from "../../Assets/video-solid.svg"
import icon4 from "../../Assets/book-open-reader-solid.svg"

import { AstroservicesSlider } from './AstroservicesSlider/AstroservicesSlider';
import { LatestFromBlog } from './LatestFromBlog/LatestFromBlog';
import { AstrocareReview } from './AstrocareReview/AstrocareReview';
import { OurAstrologer } from './OurAstrologer/OurAstrologer';




export const Home = () => {
  
  return (
    <div>
      <div className={styles.part1_as}>
        <div className={styles.part1div1_as}>
          <div className={styles.part1img_as}>
            <img className={styles.mahindraimg_as} src={mandiraBan} />
          </div>


          <div className={styles.part1headingdiv_as}>
            <p>Got any questions?</p>
            <p><spam className={styles.boldheading_as}>Chat with Astrologer</spam></p>
            <p>FOR FREE</p>
            <button className={styles.btn_as}>Chat Now</button>
            <div className={styles.part1name_as}>
              <h5>Mahindra Bedi</h5>
            </div>


          </div>

        </div>

        <div className={styles.part1div2_as}>
          <div className={styles.block_as}>
            <div className={styles.icondiv_as}>
              <img src={icon1} />

            </div>

            <div className={styles.icondetail}>
              <h6>Chat with Astrologer</h6>

            </div>


          </div>

          <div className={styles.block_as}>
            <div className={styles.icondiv_as}>
              <img src={icon2} />

            </div>

            <div className={styles.icondetail}>
              <h6>Talk to Astrologer</h6>

            </div>


          </div>

          <div className={styles.block_as}>
            <div className={styles.icondiv_as}>
              <img src={icon3} />

            </div>

            <div className={styles.icondetail}>
              <h6>Live Astrologer</h6>

            </div>


          </div>

          <div className={styles.block_as}>
            <div className={styles.icondiv_as}>
              <img src={icon4} />

            </div>

            <div className={styles.icondetail}>
              <h6>Astrocare Blogs</h6>

            </div>


          </div>

        </div>

      </div>


      <div className={styles.part2_as} >
        <h4>COMPLIMENTARY ASTROLOGY SERVICES</h4>
        <AstroservicesSlider/>
        
      </div>




      <div className={styles.part5_as}>
        <div className={styles.part5heading1_as}>
          <h4>LATEST FROM BLOG</h4>
        </div>
        <div className={styles.part5heading2_as}>
          <p>Top Astrologers. 24 * 7 customer support. Happy to help</p>
        </div>
        <LatestFromBlog/>

      </div>

      <div className={styles.part6_as}>
        <div className={styles.part6heading1_as}>
          <h4>ASTROCARE REVIEWS</h4>


        </div>
        <div className={styles.part6heading2_as}>
          <p>Here about us from our customers</p>

        </div>
        <AstrocareReview/>

      </div>


      <div className={styles.part7_as}>
        <div className={styles.part7heading1_as}>
          <h4>OUR ASTROLOGERS</h4>


        </div>
        <div className={styles.part7heading2_as}>
          <p>5000+ Best Astrologers from India for Online Consultation</p>

        </div>
        <OurAstrologer/>

      </div>

      <div className={styles.part8_as}>
        <div className={styles.part8heading1_as}>
          <h4>WHY ASTROLOGY ?</h4>

        </div>
        <div className={styles.part8heading2_as}>
          <p>Astrology reveals the will of the God</p>

        </div>
        <div className={styles.part8paras_as}>
          <p>Astrology is a predictive science with its own sets of methods, claims and findings that have forever inspired and allowed people with insights into different aspects of their life. Astrology, with its wows and hows, is contentful and approving enough to make people a believer of the same. And thankfully, it continues to do so despite the world shifting bases from what they believe in and what they don’t.</p>
          <p>If one has to go into the technicalities of astrology, it is the study of different cosmic objects, which are usually stars and planets, that have an effect on the lives of the people. You must be aware that there are as many as 8 planets in the solar system. However, If I ask an online astrologer near me about the planets in astrology, they will tell me that there are as many as 9 planets in astrology also called Navagrahas. And surprisingly, the planet Earth, in astrology, is not counted among the nine planets.</p>
          <p>The 9 planets in astrology are Sun (Surya), Moon (Chandra), Mars (Mangala), Mercury (Budha), Jupiter (Brihaspati), Venus (Shukra), Saturn (Shani), Rahu (north node of the moon), and Ketu (south node of the moon).</p>
          <p>Among these planets, some planets are called friendly planets, meaning the presence of them brings positivity to your life. And then, there are also planets that have a negative influence on humans. The latter would be planets like Rahu and Ketu. Their presence in one’s Kundli is said to bring pain and misery. However, there is another aspect one needs to be aware of. It’s the fact that the presence of Ketu in one’s horoscope is not always bad and similarly, the presence of Jupiter in one’s Kundli might not be the best every time.</p>
          <p>It all depends on which houses these planets are sitting in. If you ever had the opportunity to talk to an astrologer online, then s/he must have told you about houses in astrology and the movements of planets in the same. There are as many as 12 houses in Kundli. And all of these houses represent one thing or the other. You can check your free kundali online.</p>
          <p>For example, the first house, which any online astrology consultation would tell you is also the ascendant of the person, is the house of self. It represents a person’s personality and physical traits. Similarly, the fifth house in the Vedic horoscope, also known as Putra Bhava is the house of creativity, playfulness, joy, pleasure, and romance. If, for example, a good planet, like Jupiter, is camping in the fifth house, your love life will excel. Likewise, if Rahu is camping in the same house, then you might feel the need for online astrology consultation to deal with the woes.</p>
          <p>Then there are other things in astrology like elements, the Moon sign of an individual, numerology, tarot and so much more that is impossible to wind up here.</p>
          <h5>Online Astrology Consultation 	&#38; Services</h5>
          <p>The online footprint of things and people has grown over the years. And Astrocare, as a brand, is using the best of it to cater online astrology services to anyone and everyone across the length and breadth of the globe. Astrocare, over the years, has nurtured as a community of the best astrologers who have their expertise in Vedic Astrology, tarot card reading, Vastu Shastra, numerology, Reiki healing, Palmistry, and many more subjects.</p>
          <p>The motive behind providing astrology predictions online is simply helping people save time, money, and pain to find astrologers in the hustle and bustle of the city lights. Besides, to ensure credibility, Astrocare has, over the years, worked extensively to add value to customer service. And a good chunk of credit for this goes to the astrologers who work for 100% customer satisfaction using their knowledge to deliver impeccable astrology consultancy.</p>
          <p>Surely, not everything in life should revolve around money, so we at Astrocare, besides online astrology, also organize various events that help one get a better understanding of online astrology prediction and more related themes. These events range from free astrology predictions sessions to live events involving Aartis and Pujas that happen across India at some of the most renowned temples. It's a way for us to connect with people.</p>
          <h5>Online Astrologer</h5>
          <p>A huge chunk of credit for what we are today goes to the force of online astrologers we have got on board. Astrologers come from different walks of life and only the best, who has a piece of extensive knowledge in their field, make it to this platform for your convenience. As the Astrologers work with us, they are scrutinized in the form of ratings that the customers give them. The better the rating, the better the service. Talking about service, there are multiple ways to avail the same. Either you can talk to the astrologer over a call or simply chat with them at your convenience. And guess what, the first chat with an astrologer can be availed at a 50% discount.</p>
          <p>The astrologers, we have on board, understand the essence of the 5000-year old science and try their best to do justice with it. Besides sharing their knowledge with you, they also share videos, write up and other rich content with us that is available across our social media pages and in the blog section of our website. These writings on Muhurats, upcoming festivals, online astrology prediction will quench the thirst of your pious soul for online astrology knowledge.</p>
          <h5>Stay Updated With Daily Horoscope Predictions 	&#38; Zodiac Signs</h5>
          <p>We as a brand are new in the online astrology consultation arena but, at the same time, also empowered to offer our visitors the best invariably. So within a short span of time, we have created a space to offer even the minutest details on astrological elements like transits, astrology daily horoscope for different zodiac signs, updates on upcoming auspicious dates, and much more.</p>
          <p>While astrology's daily horoscope allows one an opportunity to realign their day as per what the stars have for them in the box, having knowledge of muhurats, among other astrology services, on the other hand, ensures you are well updated on the best times of the day. So much information under one roof? Well, that’s what our purpose has been over the years and we continue to refine it.</p>
          <h5>Why Choose Our Astrology Experts?</h5>
          <p>In a nutshell, Astrocare and our experts could be your partner and guide when it comes to astrology. Be it a question on horoscope or numerology, tarot card reading or even connecting you with a foreign astrologer, we have practitioners to answer all your starry queries.</p>
          <p>At last, what do you need to do to get in touch with our astrologers? Simply, login to the Astrocare app, and guess what? There is a free astrology online session waiting for you. Once you have finished your free astrology predictions session, and you want to stay with us for longer (which you would) then you can recharge your wallet, and connect with live astrologers to receive instant astrology consultation.</p>
          <p>The best way to choose the best astrologers is to select the category and choose the top astrologers as per the ratings given to them by people like you. One can completely trust our service to be of supreme quality. And just in case you bump into a nag during astrology online consultation, you will be heard by our customer service team invariably.</p>
          <p>Astrocare connects you with the best astrologer in India. If want to get the best astrological consultation from one of the best Indian astrologers online, search for the phrase “best astrologer near me” on Google, and you will find Indian astrologers online. Astrocare connects you with the best astrologers in India, the USA, Canada, Australia or we can say that you can connect with the best astrologers in the world by using the Astrocare website and App. If you are looking for the best astrologers in Noida, Delhi/NCR, Gurgaon, etc., Astrocare is the best online platform for you. We have the best astrologers online for marriage, career, health, etc. Astrocare is your ultimate destination <b>if you want to talk to astrologer online, chat with astrologers</b>, check <b>free kundali, match making</b>, daily horoscopes, gems, and rudraksha shopping, etc.</p>

        </div>

      </div>


      <div className={styles.part9_as}>
        <div className={styles.part9heading1_as}>
          <h4>FAQ'S ABOUT ASTROLOGY</h4>
        </div>
        <div className={styles.part9heading2_as}>
          <p>Why Is Astrology So Accurate?</p>
        </div>
        <div className={styles.part9paras_as}>
          <p>First of all, the credit for astrology and the predictions we make here being so accurate goes to the 100s of learned and astrologically-versed astrologers we have on board. And to answer what makes astrology so accurate, then it is the pure knowledge of our astrologers about the planets, planetary configurations, constellations and learning of how they influence human life and behaviour as they move, shift or even stay still. Astrology is not some random guesswork but science that entails scientific principles that were sketched by learned Gurus 1000s of years ago and have not changed to date. These gurus studied the movement of planets and how their aura influences the life of people on earth. The antiquity of astrology is revealed from the fact that millions of people continue to stay connected with it due to the accuracy it has to offer. Astrology has changed the lives of millions of people through us and many other astrologers who continue to share their knowledge of astrology one prediction at a time.</p>
          <h5>Why Should You Choose Astrocare For An Astrology Horoscope?</h5>
          <p>From 4.8/5 Google Rating, 5/5 Facebook Rating to appreciation across various other platforms, Astrocare, over the years, has garnered a wide user base that is nothing but satisfied with all the astrology related material we have to offer. The process of recruiting the astrologers on the Astrocare platform is really stringent and only the best astrologers can make it to the platform only to ensure you're getting the best service each and every time you get along with us.</p>
          <p>The services we are talking about range across online Kundli matching, horoscope predictions, daily horoscope, weekly horoscope, numerology, tarot reading, shopping, free blogs, and many more services.</p>
          <p>Moreover, in case you bump into any sort of problem, you can directly connect with the CEO to register the same with us. Providing exceptional service is our main motto and we ensure that is achieved whatsoever.</p>
          <h5>Is Astrology Prediction True?</h5>
          <p>Many people have misconceptions that an astrologer can tell them what exactly is going to happen with them in the future or next moment, which is a wrong way to think about astrology. Astrology predictions are based on planetary movements. A planet moves from one house to another, one zodiac sign to another, etc. These moments by plantes can either be good or unfavourable for the native. For example, if say the planet Mercury is camping in a friendly zodiac sign, the outcomes are to be good for the native. Meanwhile, if the mercury is camping in an unfriendly zodiac sign, the outcome can be critical. An astrologer, based on calculations, notes down such shifts and traits and based on the same share with you if your upcoming time would be good or tough. If you think this way, astrology predictions ought to be true. Accurate predictions are possible when you seek to know about things like upcoming shubh muhurats, whether you are manglik or not?, etc.</p>
          <h5>How Can Online Astrology Help Me In Predicting The Future?</h5>
          <p>Online astrology can be of two types. One, you can visit a website and find astrology tools available on the same. Then all you need to do is enter some details like your date of birth, time of your birth, place of birth, etc. and you will have for yourself a contentful report describing you better than anyone else ever would. Meanwhile, the other way around is to directly get in touch with the astrologers (over a call or chat) we have on board to get the same information in a much detailed manner. Online astrology may look modern but when it comes to making predictions about your future, the old school way of calculating the position of the stars and planets is used to provide you the most accurate results. Simply say, online astrology is just a change of mode of communication between an astrologer and the one who seeks to know about their past, present and future. However, the ways to come to these answers is still old school and one one of the most authentic one.</p>
          <h5>What Kind Of Questions Can I Ask To Online Astrologers?</h5>
          <p>Until you are being respectful and authentic about your queries, there isn't a limit to what you can chat with an astrologer and what you can’t. Astrology has an answer for literally anything and everything. Starting right from your career to your love life or health, astrology can predict endless queries. You can trust us when we say our astrologers have been inundated with some of the most difficult questions, which they have answered with ease.</p>
          <p>Are you a manglik? An astrologer can help you find that. Or what the shubh muhurat for getting married? Or what are the chances of you improving your financial position in the years to come? Our astrologers can answer all such questions by simply calculating the position of the planets and combining them with numerous factors like your nakshatra, zodiac signs, houses in astrology and more.</p>
          <h5>What Is The Duration For Online Astrology Consultation?</h5>
          <p>Astrology has no limits and nor do we. We have so many astrologers on board with whom you can connect and ask questions to. They would help you with all your queries without any time limit intact.</p>
          <h5>Can Astrology Predictions Be Changed?</h5>
          <p>Astrological predictions may change in several cases:</p>
          <p>The first is when an astrologer unintentionally makes a mistake in locating the position of the planets. In such a case, the predictions can go wrong.</p>
          <p>Secondly, if you have provided the wrong information, especially the date and time of your birth, then astrology predictions are subject to change.</p>
          <p>The third situation when astrology predictions can go wrong is when you try to change yourself for good or bad. Many of you must be thinking that how an astrological prediction can change when it is mostly based on the movement of planets (which does not change)? Well, there is more to it. Every planet rules some good traits and bad traits. And it’s your deeds that decides which traits of the planet will become powerful. So for example, if you are a careless person as of now with Mercury as your ruling planet, you are unable to gain the good effects of Mercury. However, if you try to change yourself with time, the good traits of Mercury will eventually reflect in your chart and personality thus changing the astrology prediction.</p>
          <h5>Can Astrology Predict About Lottery Winning?</h5>
          <p>Astrology can’t predict if you will win a lottery today or not but it can surely help you predict what are your chances to win a lottery. Also, numerology is another form of prediction that can help you with lucky numbers prospects, which can eventually help you decide what number you can go with to get lucky with winning a lottery.</p>
          <h5>What Benefits Can I Expect If I Avail Astrology Services?</h5>
          <p>First of all, if you are new to our platforms, you get a flat 50% discount on your first prediction. So that’s some savings. Secondly, using the insights provided by our astrologers about your future or the present self, you can be careful in terms that will help you deal with major problems, which could be finance-related, career-related, love related etc.</p>
          <p>By seeing your astrological chart, an astrologer can not only predict about you but also about your behaviour towards your family, your relatives, your colleagues and more. Learning about these behaviours can help you better present yourself in front of people that matter. This way, astrology can positively help you improve your personality among uncountable goods it can do to you. For more details about astrology and future predictions, you can talk to astrologer.</p>
          <h5>Which app is best for kundli?</h5>
          <p>Astrocare is one of the best platforms to get an online kundli for yourself. The exhaustive and free kundli available on Astrocare is prepared by the best and the most learned astrologers of Astrocare and is available in multiple languages for your convenience. The online kundli of Astrocare covers all dimensions of your life from past, present and future and based on these dimensions allow you suggestions that you can adopt into your life for a better future ahead. In the online Kundli, we have various sections that highlight the good, bad and neutral Dashas that lie ahead of you and what you must do during these Dasha periods to get the best of the different phases. The kundli also has as many as 20 charts, remedies and so much more that will allow you a 360-degree view of your life. So without a doubt, you can use Astrocare for the most authentic kundli. </p>
          <h5>How reliable is the Astrocare app?</h5>
          <p>Interestingly, the Astrocare app is made in such a way that it helps you with all your astrology needs. Apart from the main Talk to astrologers and Call to astrologers features, where the best astrologers from across the world are at your service, the Astrocare app also has many free features that a user can enjoy. These features include Free live sessions on the app through which you can talk to astrologers for free. Astrocare also has daily, weekly, monthly and yearly horoscopes prepared by expert astrologers that help you decode your future in advance. Then, Astrocare further has Free kundli, Free matchmaking and more such features that again are prepared by expert astrologers and come in handy for you any time of the day. Apart from this, if you need any kind of astrology products such as Rudraksha, Yantras, Gemstones, Reiki healing, etc. such products are too available on the app. So Astrocare is a one-stop destination for all your astrology needs and thus very reliable. </p>
          <h5>How much does Astrocare cost?</h5>
          <p>Simply put, Astrocare suits your budget. And if you consider the First Chat Free feature, then it will definitely suit your budget. On Astrocare, a user can get services at as low as Rs 10 per minute to Rs 250 per minute. The astrologers on Astrocare charge as per their experiences, both in personal life and their time on the app. So it doesn’t mean an astrologer who is charging low is not good. It could simply mean that he/she may have just started on the app and thus want to keep his/her price affordable for the user. Interestingly, some astrologers deliberately keep their consultation prices low as their prime motive is to only help others with their talent. In a nutshell, you will find both affordable and not so budget-friendly astrologers on Astrocare but at the end of the day, all of them are best at what they do as they have been scrutinised by the expert astrologers before they make it to the app.</p>



        </div>

      </div>

    </div>

  )
}
