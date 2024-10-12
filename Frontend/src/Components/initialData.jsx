const initialData = [
    {
      id: 1,
      name: 'Amitabh Bachchan',
      location: 'Mumbai',
      profilePicture: 'https://cdn.britannica.com/12/215912-050-02257657/Indian-actor-Amitabh-Bachchan-2013.jpg?w=300', 
      originalProfilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1WBdVF8znliHSmge3GAgM1R4ySUw4BuvQQw&s',
      email: 'amitabh.bachchan@example.com',
      contact: 'amitabh.bachchan@example.com',
      interests: ['Acting', 'Philanthropy'],
      bio: 'Amitabh Bachchan was born on October 11, 1942 in Allahabad, British India (present-day Prayagraj, Uttar Pradesh, India) to legendary poet Harivansh Rai Bachchan & Teji Bachchan. He also has a brother named Ajitabh. He completed his education from Uttar Pradesh and moved to Bombay to find work as a film star, in vain though, as film-makers preferred someone with a fairer skin, and he was not quite fair enough. But they did use one of his other assets, his deep baritone voice, which was used for narration and background commentary. He was successful in being cast in Saat Hindustani. He got his break in Bollywood after a letter of introduction from the then Prime Minister Mrs. Indira Gandhi, as he was a friend of her son, Rajiv Gandhi. This is how Bachchan made an entry in Bollywood, starting with Zanjeer, co-starred with his future wife Jaya Bhaduri, and since then there has been no looking back. He married Jaya Bhaduri, an accomplished actress in her own right, and they had two children, Shweta and Abhishek. Shweta is married, lives a non-filmy life and has two children. ',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.14571431995!2d72.71637338541295!3d19.082177512723753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1728724308228!5m2!1sen!2sin'
    },
    {
      id: 2,
      name: 'Deepika Padukone',
      location: 'Bangalore',
      profilePicture: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRm77KjJpvFOG5CSQYjYyc1cZsutz29eikNr5WswiOgqHCwvCIz',
      originalProfilePicture: 'https://imgv3.fotor.com/images/gallery/AI-3D-Female-Profile-Picture.jpg',
      email: 'deepika.padukone@example.com',
      contact: 'deepika.padukone@example.com',
      interests: ['Acting', 'Fashion'],
      bio: 'eepika Padukone, born 5 January 1986 in Copenhagen, Denmark, is an Indian model and actress. She is the daughter of former badminton champion Prakash Padukone. Her mother tongue is Konkani. Deepika has a younger sister named Anisha. She has been modeling appearances in print and television advertising campaigns for Liril, Close-Up toothpaste and Limca, receiving many prestigious modeling offers, including brand ambassadorship of the Jewels of India, an annual jewelry exhibition. She hit the international scene when Maybelline made her their new international cover-girl face. At the fifth annual Kingfisher Fashion Awards, for Indian models and designers, she was awarded the title of Model of the Year. Shortly after wards, she was chosen as one of the models for the Kingfisher Swimsuit Calendar for 2006, thus cementing her reputation as a supermodel. She also bagged two trophies at the Idea Zee F Awards in 2006 - female Model of the year (Commercial Assignments) and Fresh Face of the year.',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089930093!2d77.46612614452616!3d12.953945614144489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1728724566520!5m2!1sen!2sin'
    },
    {
      id: 3,
      name: 'Sachin Tendulkar',
      location: 'Mumbai',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Sachin-Tendulkar_%28cropped%29.jpg/330px-Sachin-Tendulkar_%28cropped%29.jpg', 
      originalProfilePicture: 'https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg',
      email: 'sachin.tendulkar@example.com',
      contact: 'sachin.tendulkar@example.com',
      interests: ['Cricket', 'Philanthropy'],
      bio: 'Sachin Tendulkar (born April 24, 1973, Bombay [Mumbai], India) is an Indian professional cricket player, considered by many to be one of the greatest batsmen of all time. In 2012, he became the first cricketer to score 100 centuries (100 runs in a single innings) in international play. Tendulkar was given his first bat when he was 11 years of age. As a 14-year-old, he used it to score 329 out of a world-record stand of 664 in a school match. A year later he scored a century on his first-class debut for Bombay (Mumbai), and at age 16 years 205 days he became India’s youngest Test (international) cricketer, making his debut against Pakistan in Karachi in November 1989. When he was 18 he scored two centuries in Australia (148 in Sydney and 114 in Perth), and in 1994 he scored 179 against the West Indies. In August 1996, at age 23, Tendulkar was made captain of his country’s team. ',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.14571431998!2d72.71637338541294!3d19.082177512723746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1728724642288!5m2!1sen!2sin'
    },
    {
      id: 4,
      name: 'Priyanka Chopra',
      location: 'Mumbai',
      profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1tOqwa9caG5cGz9NcTFPPS_mU2StJ1MBHVQ&s', 
      originalProfilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO_dSFPsRf9PhzMvBpTAdfr2X8WaVdtsPOQg&s',
      email: 'priyanka.chopra@example.com',
      contact: 'priyanka.chopra@example.com',
      interests: ['Acting', 'Singing'],
      bio: 'Priyanka Chopra Jonas (née Chopra) was born on July 18, 1982 in Jamshedpur, India, to the family of Capt. Dr. Ashok Chopra and Dr. Madhu Chopra, both Indian Army physicians. She had a very varied upbringing. She started her education at La Martinière Girls College in Lucknow as a resident student; a short stay at Maria Goretti College in Bareilly prepared her for further studies in the U.S. Having completed tenth grade in Boston, Massachusetts, U.S., she decided to become a software engineer or a criminal psychologist. She enjoys Indian music and dance; flair for writing poetry and short stories; reading, especially biographies; and has worked for a lot of social welfare programs.',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.14571431995!2d72.71637338541295!3d19.082177512723753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1728724308228!5m2!1sen!2sin'
    },
    {
      id: 5,
      name: 'Salman Khan',
      location: 'Pune',
      profilePicture: 'https://live.staticflickr.com/7512/16017712910_d890e1956c.jpg', 
      originalProfilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTLa3GF8FZ3xC2MbH3BWsxyjvU6TzLWf9ibA&s',
      email: 'salman.khan@example.com',
      contact: 'salman.khan@example.com',
      interests: ['Acting', 'Social Work'],
      bio: 'Abdul Rashid Salim Salman Khan was born on December 27, 1965, in Mumbai to legendary screenwriter Salim Khan, who penned many super-hits in the yesteryears like Sholay (1975), Deewaar (1975), and Don (1978). Khan started his acting career by doing a supporting role in the movie Biwi Ho To Aisi (1988). The following year he had the leading role in the box office romantic hit Maine Pyar Kiya (1989). From there he became a heartthrob of Indian cinema. Following with other box office hits he showed his terrific performance in Saajan (1991), Andaz Apna Apna (1994), Hum Aapke Hain Koun..! (1994), Karan Arjun (1995), Khamoshi the Musical (1996), Kuch Kuch Hota Hai (1998). His transformations can be sensitive, vulnerable, funny, aggressive and charming as his role demands.In 1998, he was arrested by the local police from the shooting location of the film Hum Saath-Saath Hain (1999), for killing protected wild animals and spent about a week behind the bars. The actor is facing trial in three cases of killing blackbucks and Chinkaras and another of illegal possession of arms. In September 2002, Khan had hit the headlines after he crashed his Land Cruiser near the American Express bakery in Bandra, killing one man and injuring others. Being known for those roguish behaviors, he tried to balance his troubled life with his career. He gave his emotionally charged performance as playing an obsessed lover in In Your Name (2003) that translated into good reviews and a good run at the box office. He not only managed to revive his career but also to restore the confidence of his producers and distributors alike.',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711154514!2d73.78056548298485!3d18.52459859952468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1728724408612!5m2!1sen!2sin'
    },
    {
      id: 6,
      name: 'Nita Ambani',
      location: 'Pune',
      profilePicture: 'https://images.news18.com/ibnlive/uploads/2023/10/nita-ambani-ioc-2023-10-06e4781f64b279f162975ec9323924f1-3x2.png', 
      originalProfilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS-rrVoDs4f0cY48bIqNGXUOUvO0Rm8Of0YQ&s',
      email: 'nita.ambani@example.com',
      contact: 'nita.ambani@example.com',
      interests: ['Philanthropy', 'Business'],
      bio: 'Nita Ambani is an educationist, philanthropist, businesswoman, patron of arts and sports, and champion of women and children’s rights. Through various initiatives of Reliance Foundation, of which she is founder and chair, she seeks to empower millions of Indians with resources and opportunities. On International Women’s Day 2021, she launched an inclusive and collaborative digital movement for women called Her Circle. She is the owner of Mumbai Indians, the most successful cricket team in the Indian Premier League, the founder chairperson of Football Sports Development Limited, which launched the Indian Super League, and the head of the Education and Sports for All initiative for children. She is the Founder and Chairperson of the Nita Mukesh Ambani Cultural Centre, a world-class platform to spotlight Indian arts and culture at its best, both for the audience and the artists. Through Sir H N Reliance Foundation Hospital and Research Centre in Mumbai, she is committed to making affordable world-class medical care available to all Indians. She is the first Indian woman to be elected as a member of the International Olympic Committee, and the first Indian to be elected an Honorary Trustee of the Board of the Metropolitan Museum of Art, New York. US magazine Town and Country recognised her as one of the world’s top philanthropists in 2020, Forbes listed her among the 50 most powerful businesswomen in Asia in 2016, and Fortune India has ranked her as India’s Most Powerful Woman..',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711154514!2d73.78056548298485!3d18.52459859952468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1728724408612!5m2!1sen!2sin'
    },
    {
      id: 7,
      name: 'Ratan Tata',
      location: 'Mumbai',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Shri_Ratan_Naval_Tata.jpg', 
      originalProfilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzGVeyFmT-RXwcvwBtHDX-RWDsSCEqUgzHkQ&s',
      email: 'ratan.tata@example.com',
      contact: 'ratan.tata@example.com',
      interests: ['Business', 'Philanthropy'],
      bio: 'Ratan Tata (born December 28, 1937, Bombay [now Mumbai], India—died October 9, 2024, Mumbai) was an Indian businessman who became chairman (1991–2012 and 2016–17) of the Tata Group, a Mumbai-based conglomerate. He was widely admired not only for his stewardship of one of the country’s largest conglomerates but also for his personal ethics and philanthropic activities. Tata was regarded as a visionary leader, and his legacy is one of compassion and innovation that transcends the confines of the corporate realm to impact millions of ordinary lives. In his lifetime he received two of India’s highest civilian honors—the Padma Vibhushan (2008) and the Padma Bhushan (2000).The first family of India Inc.Ratan Tata was a member of a prominent family of Indian industrialists and philanthropists (see Tata family), credited with pioneering much of the country’s industrial establishments and practices. His grandfather Jamsetji Tata founded the Tata Group in 1868—the businesses under this umbrella, including Tata Steel, played a key nation-building role when India achieved independence from British rule in 1947. The Tata Group was later expanded by Ratan Tata’s uncle J.R.D. Tata, who founded prominent subsidiaries such as Tata Consultancy Services, Tata Motors, and Tata Salt. Among the pioneering achievements of the Tata Group were the establishment of the iconic Taj Mahal Palace Hotel (1903, Bombay [now Mumbai]), India’s first hotel with electricity, and the founding of Air India (1932) as well as the country’s first indigenous cosmetics brand, Lakmé (1952).',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.14571431995!2d72.71637338541295!3d19.082177512723753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1728724308228!5m2!1sen!2sin'
    },
    {
      id: 8,
      name: 'Aishwarya Rai Bachchan',
      location: 'Mumbai',
      profilePicture: 'https://cdn.britannica.com/75/124975-050-32A8692C/Aishwarya-Bachchan-Rai.jpg', 
      originalProfilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFTuIuAwFTfOmRZ50seRvVMWyDo5ilUeRm_Q&s',
      email: 'aishwarya.rai@example.com',
      contact: 'aishwarya.rai@example.com',
      interests: ['Acting', 'Fashion'],
      bio: 'Aishwarya Bachchan Rai (born November 1, 1973, Mangalore, Karnataka state, India) is an Indian actress whose classic beauty made her one of Bollywood’s premier stars. Rai was raised in a traditional South Indian home and was pursuing an education in architecture when she was crowned Miss World in 1994. The title put her on the fast track of the modeling business. She landed lucrative jobs with PepsiCo, Inc., and Vogue magazine, and in 2003 she signed on as a spokesmodel for L’Oréal Paris. Her acting career began in earnest with acclaimed performances in Iruvar (1997; The Duo) and …Aur pyaar ho gaya (1997; based on the 1994 American movie Only You). Both films broke from the simplistic structure typical of Bollywood films at the time and helped to push Rai to the forefront of the “New Bollywood.” For decades the Indian film industry had produced a large number of very predictable and clichéd feature films that were enjoyed almost exclusively by South Asians. Changes in Bollywood with regard to financing and production, however, had seen the industry move to improve the artistic quality of its product and to expand its audience beyond South Asia.',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.14571431995!2d72.71637338541295!3d19.082177512723753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1728724308228!5m2!1sen!2sin'
    },
    {
      id: 9,
      name: 'Ranveer Singh',
      location: 'Mumbai',
      profilePicture: 'https://images.filmibeat.com/img/popcorn/profile_photos/ranveer-singh-20180808141457-22930.jpg', 
      originalProfilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4oeN1mwa0vBBOZNL_h1Csn9erAIMgY9a7Wg&s',
      email: 'ranveer.singh@example.com',
      contact: 'ranveer.singh@example.com',
      interests: ['Acting', 'Fashion'],
      bio: 'Ranveer Singh Bhavnani was born in July 06, 1985 to Mr. Jagjit Singh Bhavnani & Mrs. Anju Bhavnani in Mumbai, Maharashtra. He is an Indian actor and model working in the Bollywood industry. Singh had always wanted to be an actor since his childhood. However, during his college days he felt that the idea of acting was far-fetched and focused on creative writing. While pursuing his Bachelor of Arts degree from Indiana University (Bloomington), Singh again became interested in acting and after coming back to India, he started auditioning for lead roles in the Hindi film industry. In 2010, Singh auditioned for the lead role in the Yash Raj Films venture called Band Baaja Baaraat (2010), and got selected. The romantic comedy was set in the world of wedding planning and required Singh to portray a typical Delhi guy called Bittoo Sharma. The director of the film, Maneesh Sharma, sent him to the Delhi University campus during the recess of the film, and from there, Singh drew his inspiration for the character. After its release, Band Baaja Baaraat (2010) became a critical and commercial success, with Singhs portrayal of Bittoo being lauded by critics. He went on to win the Filmfare Award for Best Male Debut award at the 56th Filmfare Awards.',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.14571431995!2d72.71637338541295!3d19.082177512723753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1728724308228!5m2!1sen!2sin'
    },
    {
      id: 10,
      name: 'Virat Kohli',
      location: 'Delhi',
      profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR12ML91cSC8AkpUY_RAK4H9R-vNVbBfokv7A&s', 
      originalProfilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZbHy60ZgwP3MWJpR8e8QOr3Z2d7w_t1s5Q&s',
      email: 'virat.kohli@example.com',
      contact: 'virat.kohli@example.com',
      interests: ['Cricket', 'Fitness'],
      bio: 'Virat Kohli (born November 5, 1988, Delhi, India) is an Indian international cricketer considered by many as one of the greatest batsmen in the history of the game. Kohli plays for (and previously captained) the Royal Challengers Bangalore (RCB) in the Indian Premier League (IPL). He is also a former captain of the Indian cricket team in all three international formats—Test cricket, one-day internationals (ODIs), and Twenty20 internationals (T20I)—making him one of India’s most successful captains. Kohli has earned praise for his discipline and commitment from teammates, opponents, and cricket veterans alike. “He has changed the face of cricket and how you prepare for the game. The discipline that he has stands out, always,” cricketing great Brian Lara said of Kohli after Kohli was named Player of the Tournament for the 2023 Cricket World Cup. Kohli holds several cricket records, including the most individual hundreds in ODI matches and the most runs scored in a single edition of an ODI World Cup. He has been named Player of the Tournament at global events on three occasions: at the 2014 and 2016 T20I World Cups and the 2023 ODI World Cup. Kohli was also a member of the Indian sides that won the 2011 ODI World Cup, the 2013 ICC (International Cricket Council) Champions Trophy, and the 2024 T20I World Cup. He announced his retirement from Twenty20 international cricket after India won the 2024 T20I World Cup. Kohli’s announcement came after he was declared Player of the Match. Kohli is married to popular Bollywood actress and producer Anushka Sharma.',
      map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.5263247025!2d76.76357512440586!3d28.6436846281805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1728724518657!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    }
  ];


export default initialData;