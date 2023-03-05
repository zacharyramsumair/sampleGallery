let DesktopData = [
	{
		ArtName: "Starry Night",
		ArtistName: "Vincent van Gogh",
		Info:
			"The Starry Night is an oil-on-canvas painting by the Dutch Post-Impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Rémy-de-Provence, just before sunrise, with the addition of an imaginary village. It has been in the permanent collection of the Museum of Modern Art in New York City since 1941, acquired through the Lillie P. Bliss Bequest. Widely regarded as Van Gogh's magnum opus, The Starry Night is one of the most recognizable paintings in Western art.",
		Year: "1889",
		Image: "./images/starrynight.jpeg",
	},
	{
		ArtName: "The Storm on the Sea of Galilee",
		ArtistName: "	Rembrandt van Rijn",
		Info:
			"The Storm on the Sea of Galilee is a 1633 oil-on-canvas painting by the Dutch Golden Age painter Rembrandt van Rijn. It was previously in the Isabella Stewart Gardner Museum in Boston but was stolen in 1990 and remains missing. The painting depicts the biblical story of Jesus calming the storm on the Sea of Galilee, specifically as it is described in the fourth chapter of the Gospel of Mark. It is Rembrandt's only seascape.",
		Year: "1633",
		Image: "./images/the storm on the Sea of Galilee.jpg",
	},
	{
		ArtName: "Lady with an Ermine",
		ArtistName: "Leonardo da Vinci",
		Info:
			'The Lady with an Ermine[n 1] is a portrait painting widely attributed to the Italian Renaissance artist Leonardo da Vinci. Dated to c. 1489–1491, the work is painted in oils on a panel of walnut wood. Its subject is Cecilia Gallerani, a mistress of Ludovico Sforza ("Il Moro"), Duke of Milan; Leonardo was painter to the Sforza court in Milan at the time of its execution. It is the second of only four surviving portraits of women painted by Leonardo, the others being Ginevra de Benci, La Belle Ferronnière and the Mona Lisa.[3]',
		Year: "1489–1491",
		Image: "./images/lady with an ermin.jpg",
	},
	{
		ArtName: "The Boy in the Red Vest",
		ArtistName: "Paul Cézanne",
		Info:
			"Cézanne painted four oil portraits of this Italian boy in the red vest (in British English, a waistcoat), all in different poses, which allowed him to study the relationship between the figure and space. The most famous of the four, and the one commonly referred to by this title, is the one which depicts the boy in a melancholic seated pose with his elbow on a table and his head cradled in his hand. It is currently held in Zürich, Switzerland. The other three portraits, of different poses, are in museums in the US.",
		Year: "1890",
		Image: "./images/the boy in the red vest.jpg",
	},
	{
		ArtName: "Girl with a Pearl Earring",
		ArtistName: "Johannes Vermeer",
		Info:
			"Girl with a Pearl Earring (Dutch: Meisje met de parel) is an oil painting by Dutch Golden Age painter Johannes Vermeer, dated c. 1665. Going by various names over the centuries, it became known by its present title towards the end of the 20th century after the earring worn by the girl portrayed there.The work has been in the collection of the Mauritshuis in The Hague since 1902 and has been the subject of various literary and cinematic treatments.",
		Year: "1665",
		Image: "./images/Girl_with_a_Pearl_Earring.jpg",
	},
	{
		ArtName: "The Great Wave off Kanagawa",
		ArtistName: "Katsushika Hokusai",
		Info:
			'The Great Wave off Kanagawa (Japanese: 神奈川沖浪裏, Hepburn: Kanagawa-oki Nami Ura, lit. "Under the Wave off Kanagawa")[a] is a woodblock print that was made by Japanese ukiyo-e artist Hokusai, probably in late 1831 during the Edo period of Japanese history. The print depicts three boats moving through a storm-tossed sea with a large wave forming a spiral in the centre and Mount Fuji visible in the background.',
		Year: "1831",
		Image: "./images/the great wave off kanagawa.jpg",
	},
	{
		ArtName: "The Night Café",
		ArtistName: "Vincent van Gogh",
		Info:
			"The Night Café (French: Le Café de nuit) is an oil painting created by Dutch artist Vincent van Gogh in September 1888 in Arles.[1] Its title is inscribed lower right beneath the signature. The painting is owned by Yale University and is currently held at the Yale University Art Gallery in New Haven, Connecticut.The interior depicted is the Café de la Gare, 30 Place Lamartine, run by Joseph-Michel Ginoux and his wife Marie, who in November 1888 posed for Van Gogh's and Gauguin's Arlésienne; a bit later, Joseph Ginoux evidently posed for both artists, too.",
		Year: "1888",
		Image: "./images/the night cafe.jpg",
	},
	{
		ArtName: "Arnolfini Portrait",
		ArtistName: "Jan van Eyck",
		Info:
			"The Arnolfini Portrait (or The Arnolfini Wedding, The Arnolfini Marriage, the Portrait of Giovanni Arnolfini and his Wife, or other titles) is a 1434 oil painting on oak panel by the Early Netherlandish painter Jan van Eyck. It forms a full-length double portrait, believed to depict the Italian merchant Giovanni di Nicolao Arnolfini and his wife, presumably in their residence at the Flemish city of Bruges.It is considered one of the most original and complex paintings in Western art, because of its beauty, complex iconography,[1] geometric orthogonal perspective,[2] and expansion of the picture space with the use of a mirror.[3][4] According to Ernst Gombrich 'in its own way it was as new and revolutionary as Donatello's or Masaccio's work in Italy. A simple corner of the real world had suddenly been fixed on to a panel as if by magic... For the first time in history the artist became the perfect eye-witness in the truest sense of the term'.[5] The portrait has been considered by Erwin Panofsky and some other art historians as a unique form of marriage contract, recorded as a painting.[6] Signed and dated by van Eyck in 1434, it is, with the Ghent Altarpiece by the same artist and his brother Hubert, the oldest very famous panel painting to have been executed in oils rather than in tempera. The painting was bought by the National Gallery in London in 1842.",
		Year: "1434",
		Image: "./images/arnolfini protrait.jpg",
	},
	{
		ArtName: "Guernica",
		ArtistName: "Pablo Picasso",
		Info:
			"Guernica (Spanish: [ɡeɾˈnika]; Basque: [ɡernika]) is a large 1937 oil painting by Spanish artist Pablo Picasso. It is one of his best-known works, regarded by many art critics as the most moving and powerful anti-war painting in history. Guernica is exhibited in the Museo Reina Sofía in Madrid.",
		Year: "	1937",
		Image: "./images/guernica.jpeg",
	},
	{
		ArtName: "Van Gogh self-portrait",
		ArtistName: "Vincent van Gogh",
		Info:
			"This self-portrait was one of about 32 produced over a 10-year period, and these were an important part of his work as a painter;[1][2] he painted himself because he often lacked the money to pay for models.[5] He took the painting with him to Auvers-sur-Oise, near Paris, where he showed it to Dr. Paul Gachet, who thought it was absolutely fanatical.",
		Year: "1889",
		Image: "./images/van gogh self.jpg",
	},
	{
		ArtName: "Mona Lisa",
		ArtistName: "Leonardo da Vinci",
		Info:
			'The Mona Lisa bears a strong resemblance to many Renaissance depictions of the Virgin Mary, who was at that time seen as an ideal for womanhood.[46] The woman sits markedly upright in a "pozzetto" armchair with her arms folded, a sign of her reserved posture. Her gaze is fixed on the observer. The woman appears alive to an unusual extent, which Leonardo achieved by his method of not drawing outlines (sfumato). The soft blending creates an ambiguous mood "mainly in two features: the corners of the mouth, and the corners of the eyes".[47]',
		Year: "1517",
		Image: "./images/mona lisa.jpg",
	},
	{
		ArtName: "Penitent Magdalene",
		ArtistName: "Caravaggio",
		Info:
			"Penitent Magdalene (also called Repentant Madalene) is a 16th-century oil on canvas painting by Italian Baroque painter Caravaggio. The painting portrays a repentant Mary Magdalene, bowed over in penitent sorrow as she leaves behind her dissolute life, its trappings abandoned beside her. At the time of its completion, ca. 1594–1595, the painting was unconventional for its contemporary realism and departure from traditional Magdalene iconography. It has invited both criticism and praise, with speculation even into the 21st century as to Caravaggio's intentions. The work hangs in the Doria Pamphilj Gallery in Rome.",
		Year: "1594–1595",
		Image: "./images/penitent magdalene.jpg",
	},

	{
		ArtName: "The Sleeping Gypsy",
		ArtistName: "Henri Rousseau",
		Info:
			"The Sleeping Gypsy (French: La Bohémienne endormie) is an 1897 oil painting by French Naïve artist Henri Rousseau (1844–1910). It is a fantastical depiction of a lion musing over a sleeping woman on a moonlit night.Rousseau first exhibited the painting at the 13th Salon des Indépendants, and tried unsuccessfully to sell it to the mayor of his hometown, Laval. Instead, it entered the private collection of a Parisian charcoal merchant where it remained until 1924, when it was discovered by the art critic Louis Vauxcelles. The Paris-based art dealer Daniel-Henry Kahnweiler purchased the painting in 1924, although a controversy arose over whether the painting was a forgery. It was acquired by art historian Alfred H. Barr Jr. for the New York Museum of Modern Art",
		Year: "1897",
		Image: "./images/the sleeping gypsy.jpg",
	},

	{
		ArtName: "The Basket of Apples",
		ArtistName: "Paul Cézanne",
		Info:
			"The Basket of Apples (French: Le panier de pommes) is a still life oil painting by French artist Paul Cézanne, which he created c. 1893. The painting rejected realistic representation in favour of distorting objects to create multiple perspectives. This approach eventually influenced other art movements, including Fauvism and Cubism. It belongs to the Helen Birch Bartlett Memorial Collection of the Art Institute of Chicago.",
		Year: "c. 1893",
		Image: "./images/the basket of apples.jpg",
	},

	{
		ArtName: "The Swing",
		ArtistName: "Jean-Honoré Fragonard",
		Info:
			"The painting depicts an elegantly dressed young woman on a swing. A smiling young man, hiding in the bushes below and to the left, points towards her billowing dress with hat in hand. A smiling older man, who is nearly hidden in the shadows on the right, propels the swing with a pair of ropes, as a small white dog barks nearby. The lady is wearing a bergère hat (shepherdess hat), as she flings her shoe with an outstretched left foot. Two statues are present, one of a putto, who watches from above the young man on the left with its finger in front of its lips, the other of two putti is on the right beside the older man.",
		Year: "c. 1767",
		Image: "./images/the swing.jpg",
	},
	{
		ArtName: "",
		ArtistName: "",
		Info: "",
		Year: "",
	},
];

module.exports = DesktopData;
