let citiesworld = JSON.parse(localStorage.getItem("arr")) || [
  {
    id: 0,
    City: "Kingdom Saudi Arabia",
    imgurl:
      "https://images.pexels.com/photos/5561857/pexels-photo-5561857.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description:
      "Kingdom of Saudi Arabia (KSA),[d] is a country in Western Asia. It spans the vast majority of the Arabian Peninsula, with a land area of approximately 2,150,000 km2 (830,000 sq mi). Saudi Arabia is the largest country in the Middle East, and the second-largest country in the Arab world. It is bordered by Jordan and Iraq to the north, Kuwait to the northeast, Qatar, Bahrain, and the United Arab Emirates to the east, Oman to the southeast and Yemen to the south; it is separated from Egypt and Israel in the north-west by the Gulf of Aqaba. Saudi Arabia is the only country with a coastline along both the Red Sea and the Persian Gulf, and most of its terrain consists of arid desert, lowland, steppe and mountains. Its capital and largest city is Riyadh, with Mecca and Medina serving as important cultural and religious centers.",
    extraimage: [
      "https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2F1ZGklMjBhcmFiaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
      "https://images.unsplash.com/photo-1590959914819-b767b9fe4cfb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2F1ZGklMjBhcmFiaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
      "https://images.unsplash.com/photo-1605237165959-dcc784975d51?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNhdWRpJTIwYXJhYmlhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
      "https://images.unsplash.com/photo-1542639492-23184001faed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNhdWRpJTIwYXJhYmlhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
      "https://images.unsplash.com/photo-1579004043177-b341306c3616?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNhdWRpJTIwYXJhYmlhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
      "https://images.unsplash.com/photo-1611313053536-065b4fbaa40c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHNhdWRpJTIwYXJhYmlhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
      "https://images.unsplash.com/photo-1606994741963-36fb6f29b3f9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fHNhdWRpJTIwYXJhYmlhfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60",
      "https://www.experiencealula.com/getattachment/11a2ec68-f11a-4d3e-ba19-ddc4a36fc352/stargazing_content-slider_783z441.jpg",
      "https://media.istockphoto.com/photos/madain-saleh-al-ula-ksa-old-village-saudi-arabia-picture-id1250906442?k=20&m=1250906442&s=612x612&w=0&h=qW6S4lNZz4-IGqFxlcuPrb1ezDvYgnjDV5TQjWVxfFg=",
      "https://media.istockphoto.com/photos/elephant-rock-near-al-ula-saudi-arabia-picture-id1138757773?k=20&m=1138757773&s=612x612&w=0&h=DqYLV-48HAUROKV-dOZx5mzADhCwpwD2yYZaKHsCh5Q=",
      "https://media.istockphoto.com/photos/mount-shada-picture-id1131607218?k=20&m=1131607218&s=612x612&w=0&h=sXQ0zoAEPM7ChyMvZhAZ0PQRWw9rk8gHfjjO5yyokTA=",
      "https://media.istockphoto.com/photos/narrow-street-in-a-traditional-arab-mud-brick-village-al-majmaah-picture-id1006374626?k=20&m=1006374626&s=612x612&w=0&h=Ma8raGM9UXII0w6FR0U2OKtRZrxNTKtrM3N5Sef5ztQ=",
      "https://media.istockphoto.com/photos/old-arabic-city-picture-id1168722159?k=20&m=1168722159&s=612x612&w=0&h=p-qHkRQpze2AFlXX701MXtyY22NPydtgt0gL_I1Fs48=",
    ],
    inFav: false,
  },

  {
    id: 1,
    City: "United States of America",
    imgurl:
      "https://images.pexels.com/photos/5847357/pexels-photo-5847357.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description:
      "The United States of America (U.S.A. or USA), commonly known as the United States (U.S. or US) or America, is a country primarily located in North America. It consists of 50 states, a federal district, five major unincorporated territories, 326 Indian reservations, and some minor possessions.[i] At 3.8 million square miles (9.8 million square kilometers), it is the world's third- or fourth-largest country by total area.[e] The United States shares significant land borders with Canada to the north and Mexico to the south as well as limited maritime borders with the Bahamas, Cuba, and Russia.[20] With a population of more than 331 million",
    extraimage: [
      "https://images.pexels.com/photos/5627275/pexels-photo-5627275.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      "https://images.pexels.com/photos/973049/pexels-photo-973049.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/5847357/pexels-photo-5847357.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/4353813/pexels-photo-4353813.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/631522/pexels-photo-631522.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/6940978/pexels-photo-6940978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/9836879/pexels-photo-9836879.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1202726/pexels-photo-1202726.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/4386439/pexels-photo-4386439.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/5825560/pexels-photo-5825560.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/5322515/pexels-photo-5322515.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1237103/pexels-photo-1237103.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    inFav: false,
  },
  {
    id: 2,
    City: "France",
    imgurl:
      "https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description:
      "In the High Middle Ages, France was a powerful but highly decentralised feudal kingdom in which the king's authority was barely felt. King Philip Augustus achieved remarkable success in the strengthening of royal power and the expansion of his realm, defeating his rivals and doubling its size. By the end of his reign, the kingdom had emerged as the most powerful state in Europe. From the mid-14th to the mid-15th century, France was plunged into a series of dynastic conflicts for the French throne, collectively known as the Hundred Years' War, and a distinct French identity emerged as a result. The French Renaissance saw art and culture flourish, various wars with rival powers, and the establishment of a global colonial empire, which by the 20th century would become the second-largest in the world.[14] The second half of the 16th century was dominated by religious civil wars between Catholics and Huguenots that severely weakened the country. But France once again emerged as Europe's dominant cultural, political and military power in the 17th century under Louis XIV following the Thirty Years' War.[15] Inadequate economic policies, an inequitable taxation system as well as endless wars (notably a defeat in the Seven Years' War and costly involvement in the American War of Independence), left the kingdom in a precarious economic situation by the end of the 18th century. This precipitated the French Revolution of 1789, which overthrew the absolute monarchy, replaced the Ancien Régime with one of history's first modern republics and produced the Declaration of the Rights of Man and of the Citizen, which expresses the nation's ideals to this day.",
    extraimage: [
      "https://images.pexels.com/photos/2265845/pexels-photo-2265845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/342113/pexels-photo-342113.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/2574631/pexels-photo-2574631.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/34223/mont-saint-michel-france-normandy-europe.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/705764/pexels-photo-705764.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/705771/pexels-photo-705771.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/2633855/pexels-photo-2633855.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    inFav: false,
  },
  {
    id: 3,
    City: "Italy",
    imgurl:
      "https://images.pexels.com/photos/2225439/pexels-photo-2225439.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description:
      "Due to its central geographic location in Southern Europe and the Mediterranean, Italy has historically been home to myriad peoples and cultures. In addition to the various ancient peoples dispersed throughout what is now modern-day Italy, the most predominant being the Indo-European Italic peoples who gave the peninsula its name, beginning from the classical era, Phoenicians and Carthaginians founded colonies mostly in insular Italy,[21] Greeks established settlements in the so-called Magna Graecia of Southern Italy, while Etruscans and Celts inhabited central and northern Italy respectively. An Italic tribe known as the Latins formed the Roman Kingdom in the 8th century BC, which eventually became a republic with a government of the Senate and the People. The Roman Republic initially conquered and assimilated its neighbours on the Italian peninsula, eventually expanding and conquering parts of Europe, North Africa and Asia. By the first century BC, the Roman Empire emerged as the dominant power in the Mediterranean Basin and became a leading cultural, political and religious centre, inaugurating the Pax Romana, a period of more than 200 years during which Italy's law, technology, economy, art, and literature developed.",
    extraimage: [
      "https://images.pexels.com/photos/3933128/pexels-photo-3933128.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3772442/pexels-photo-3772442.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/879537/pexels-photo-879537.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/4329928/pexels-photo-4329928.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/5864071/pexels-photo-5864071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/572780/pexels-photo-572780.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1666018/pexels-photo-1666018.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/609554/pexels-photo-609554.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/819806/pexels-photo-819806.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/763771/pexels-photo-763771.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://media.istockphoto.com/photos/colosseum-in-rome-and-morning-sun-italy-picture-id539115110?k=20&m=539115110&s=612x612&w=0&h=_vaURTolEYbJoQuVziXEmquo_QOW_P5A_I82owLx-D0=",
      "https://images.pexels.com/photos/3226070/pexels-photo-3226070.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3560781/pexels-photo-3560781.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    inFav: false,
  },
  {
    id: 4,
    City: "China",
    imgurl:
      "https://images.pexels.com/photos/2412603/pexels-photo-2412603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description:
      "China emerged as one of the world's first civilizations in the fertile basin of the Yellow River in the North China Plain. China was one of the world's foremost economic powers for most of the two millennia from the 1st until the 19th century. For millennia, China's political system was based on absolute hereditary monarchies, or dynasties, beginning with the semi-legendary Xia dynasty in 21st century BCE. Since then, China has expanded, fractured, and re-unified numerous times. In the 3rd century BCE, the Qin reunited core China and established the first Chinese empire. The succeeding Han dynasty (206 BCE–220 CE) saw some of the most advanced technology at that time, including papermaking and the compass, along with agricultural and medical improvements. The invention of gunpowder and movable type in the Tang dynasty (618–907) and Northern Song Dynasty (960–1127) completed the Four Great Inventions. Tang culture spread widely in Asia, as the new Silk Route brought traders to as far as Mesopotamia and the Horn of Africa. The Qing Empire, China's last dynasty, which formed the territorial basis for modern China, suffered heavy losses to foreign imperialism. The Chinese monarchy collapsed in 1912 with the 1911 Revolution, when the Republic of China (ROC) replaced the Qing dynasty. China was invaded by the Empire of Japan during World War II. The Chinese Civil War resulted in a division of territory in 1949 when the Chinese Communist Party (CCP) led by Mao Zedong established the People's Republic of China on mainland China while the Kuomintang-led ROC government retreated to the island of Taiwan.[k] Both the PRC and the ROC currently claim to be the sole legitimate government of China, resulting in an ongoing dispute even after the United Nations recognized the PRC as the government to represent China at all UN conferences in 1971. China is currently governed as a unitary one-party socialist republic by the CCP.",
    extraimage: [
      "https://images.pexels.com/photos/1586205/pexels-photo-1586205.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/189833/pexels-photo-189833.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3204950/pexels-photo-3204950.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1653823/pexels-photo-1653823.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3210189/pexels-photo-3210189.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/2310815/pexels-photo-2310815.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/58802/pexels-photo-58802.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3650339/pexels-photo-3650339.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/2599543/pexels-photo-2599543.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/5745998/pexels-photo-5745998.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/7363747/pexels-photo-7363747.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1313814/pexels-photo-1313814.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    inFav: false,
  },
  {
    id: 5,
    City: "Japan",
    imgurl:
      "https://images.pexels.com/photos/3800117/pexels-photo-3800117.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description:
      "Japan has been inhabited since the Upper Paleolithic period (30,000 BC), though the first written mention of the archipelago appears in a Chinese chronicle finished in the 2nd century AD. Between the 4th and 9th centuries, the kingdoms of Japan became unified under an emperor and the imperial court based in Heian-kyō. Beginning in the 12th century, political power was held by a series of military dictators (shōgun) and feudal lords (daimyō), and enforced by a class of warrior nobility (samurai). After a century-long period of civil war, the country was reunified in 1603 under the Tokugawa shogunate, which enacted an isolationist foreign policy. In 1854, a United States fleet forced Japan to open trade to the West, which led to the end of the shogunate and the restoration of imperial power in 1868. In the Meiji period, the Empire of Japan adopted a Western-modeled constitution and pursued a program of industrialization and modernization. In 1937, Japan invaded China; in 1941, it entered World War II as an Axis power. After suffering defeat in the Pacific War and two atomic bombings, Japan surrendered in 1945 and came under a seven-year Allied occupation, during which it adopted a new constitution. Under the 1947 constitution, Japan has maintained a unitary parliamentary constitutional monarchy with a bicameral legislature, the National Diet.",

    extraimage: [
      "https://images.pexels.com/photos/1654748/pexels-photo-1654748.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/2187662/pexels-photo-2187662.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/2235302/pexels-photo-2235302.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/2187603/pexels-photo-2187603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/2187622/pexels-photo-2187622.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3625115/pexels-photo-3625115.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1494077/pexels-photo-1494077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/5994150/pexels-photo-5994150.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    inFav: false,
  },

  {
    id: 6,
    City: "South Korea",
    imgurl:
      "https://images.pexels.com/photos/2122406/pexels-photo-2122406.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description:
      "The Korean Peninsula was inhabited as early as the Lower Paleolithic period. Its first kingdom was noted in Chinese records in the early 7th century BCE. Following the unification of the Three Kingdoms of Korea into Silla and Balhae in the late 7th century, Korea was ruled by the Goryeo dynasty (918–1392) and the Joseon dynasty (1392–1897). The succeeding Korean Empire was annexed in 1910 into the Empire of Japan. Japanese rule in Korea ended following the former's surrender in World War II, after which Korea was divided into two zones; a northern zone occupied by the Soviet Union and a southern zone occupied by the United States. After negotiations on reunification failed, the latter became the Republic of Korea in August 1948 while the former became North Korea.",
    extraimage: [
      "https://images.pexels.com/photos/2122406/pexels-photo-2122406.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/2246790/pexels-photo-2246790.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3018977/pexels-photo-3018977.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/2128039/pexels-photo-2128039.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/366107/pexels-photo-366107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3871071/pexels-photo-3871071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/5067489/pexels-photo-5067489.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/6306919/pexels-photo-6306919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/9647528/pexels-photo-9647528.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    inFav: false,
  },
  {
    id: 7,
    City: "Jordan",
    imgurl:
      "https://images.pexels.com/photos/1631665/pexels-photo-1631665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description:
      "Modern-day Jordan has been inhabited by humans since the Paleolithic period. Three stable kingdoms emerged there at the end of the Bronze Age: Ammon, Moab and Edom. Later rulers include the Nabataean Kingdom, the Persian Empire, the Roman Empire, the Rashidun, Umayyad, and Abbasid Caliphates, and the Ottoman Empire. After the Great Arab Revolt against the Ottomans in 1916 during World War I, the Ottoman Empire was partitioned by Britain and France. The Emirate of Transjordan was established in 1921 by the Hashemite, then Emir, Abdullah I, and the emirate became a British protectorate. In 1946, Jordan became an independent state officially known as the Hashemite Kingdom of Transjordan, but was renamed in 1949 to the Hashemite Kingdom of Jordan after the country captured the West Bank during the 1948 Arab–Israeli War and annexed it until it was lost to Israel in 1967. Jordan renounced its claim to the territory in 1988, and became the second Arab state to sign a peace treaty with Israel in 1994.[11] Jordan is a founding member of the Arab League and the Organisation of Islamic Co-operation. The sovereign state is a constitutional monarchy, but the king holds wide executive and legislative powers.",
    extraimage: [
      "https://images.pexels.com/photos/3214958/pexels-photo-3214958.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3264722/pexels-photo-3264722.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3293854/pexels-photo-3293854.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3258236/pexels-photo-3258236.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/5104065/pexels-photo-5104065.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/1631661/pexels-photo-1631661.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/5273316/pexels-photo-5273316.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3879073/pexels-photo-3879073.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    ],
    inFav: false,
  },
  {
    id: 8,
    City: "Malaysia",
    imgurl:
      "https://images.pexels.com/photos/22804/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description:
      "Malaysia has its origins in the Malay kingdoms which, from the 18th century, became subject to the British Empire, along with the British Straits Settlements protectorate. Peninsular Malaysia was unified as the Malayan Union in 1946. Malaya was restructured as the Federation of Malaya in 1948 and achieved independence on 31 August 1957. The independent Malaya united with the then British crown colonies of North Borneo, Sarawak, and Singapore on 16 September 1963 to become Malaysia. In August 1965, Singapore was expelled from the federation and became a separate independent country. The country is multi-ethnic and multi-cultural, which has a significant effect on its politics. About half the population is ethnically Malay, with minorities of Chinese, Indians, and indigenous peoples. The countrys official language is Malaysian, a standard form of the Malay language. English remains an active second language. While recognising Islam as the countrys established religion, the constitution grants freedom of religion to non-Muslims. The government is modelled on the Westminster parliamentary system and the legal system is based on common law. The head of state is an elected monarch, chosen from among the nine state sultans every five years. The head of government is the Prime Minister",
    extraimage: [
      "https://images.pexels.com/photos/1538177/pexels-photo-1538177.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/326716/pexels-photo-326716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3050018/pexels-photo-3050018.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3243021/pexels-photo-3243021.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/295813/pexels-photo-295813.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3733565/pexels-photo-3733565.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/3823436/pexels-photo-3823436.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/4070907/pexels-photo-4070907.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "https://images.pexels.com/photos/5433266/pexels-photo-5433266.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "WhatsApp Image 2021-10-27 at 1.50.02 PM.jpeg",
    ],
    inFav: false,
  },
];

const reandar = (input) => {
  if (input) {
    $("#cards").html("");
    citiesworld.forEach((item, i) => {
      if (item.City.toLowerCase().includes(input.toLowerCase())) {
        $("#cards").append(`
      <div class='card'> <h1 id="ciety">${item.City}</h1>   
      <img src="${item.imgurl}" class='imggg' id="image-${i}" >
      <button id='fav-${i}' class="like">like</button>
      </div>`);
        $("#image-" + i).click(() => {
          $("#cards").hide();

          renderItem(i);
        });
        $("#fav-" + i).click(() => {
          citiesworld[i].inFav = !citiesworld[i].inFav;
          localStorage.setItem("arr", JSON.stringify(citiesworld));
        });
      }
    });
  } else {
    $("#cards").html("");
    citiesworld.forEach((item, i) => {
      $("#cards").append(`
    <div class='card'> <h1 id="ciety">${item.City}</h1>   
    <img src="${item.imgurl}" class='imggg' id="image-${i}" >
    <button id='fav-${i}' class="like">like</button>
    </div>`);
      $("#image-" + i).click(() => {
        $("#cards").hide();
        $(".search-bar").hide();
        renderItem(i);
      });

      $("#fav-" + i).click(() => {
        citiesworld[i].inFav = !citiesworld[i].inFav;
        localStorage.setItem("arr", JSON.stringify(citiesworld));
      });
    });
  }
};

reandar();

function renderItem(i) {
  $("#image").append(`
       <div id="image"><h1>${citiesworld[i].City}</h1>
       <p>${citiesworld[i].description}</p>
       <div class='extraimage-in-imag'><img class='oneImGToChange' src=" ${citiesworld[i].extraimage[0]}"></div>
       </div> `);
  $(".search-bar").hide();

  citiesworld[i].extraimage.forEach((item, iindex) => {
    $("#cieldimag").append(
      `<div class='imgextra' id="imgextraChose-${iindex}"> <img src="${item}" class="Childimg"> </div>`
    );
    $("#imgextraChose-" + iindex).click(() => {
      document.querySelector(".oneImGToChange").src = item;
    });
  });


  // arrayimg();
}

const renderFav = () => {
  $("#cards").html("");
  $("#image").hide();
  $(".search-bar").hide();

  $("#cieldimag").hide();
  const fav = citiesworld.filter((item) => {
    return item.inFav === true;
  });
  $("#cards").html("");
  fav.forEach((item, i) => {
    console.log(item);
    $("#cards").append(`<div class="card">
       <h1 id="ciety">${item.City}</h1> 
      <img src="${item.imgurl}"class='imggg' id="image-${i}" >
      <button id='remove-${i}' class="like">remove</button>
      </div>`);

    $("#remove-" + i).click(() => {
      remove(item.id);
    });
  });
};

const remove = (id) => {
  console.log(id);
  citiesworld = citiesworld.map((item) => {
    if (item.id === id) {
      return { ...item, inFav: false };
    } else {
      return item;
    }
  });
  localStorage.setItem("arr", JSON.stringify(citiesworld));
  renderFav();
};

$("#favor").click(renderFav);
