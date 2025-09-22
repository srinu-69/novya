// // syllabus.js

// const syllabus = {
//   english: {
//     name: "English",
//     classes: {
//       7: [
//         { id: "prose", name: "Prose", subtopics: ["Learning Together", "Wit & Humour", "Dreams & Discoveries", "Travel & Adventure", "Bravehearts"] },
//         { id: "poetry", name: "Poetry", subtopics: ["The Squirrel", "The Rebel", "The Shed", "The Duck and the Kangaroo", "The Ball Poem"] },
//         { id: "grammar", name: "Grammar", subtopics: ["Tenses", "Modals", "Articles", "Prepositions", "Conjunctions"] },
//         { id: "writing", name: "Writing", subtopics: ["Diary Entry", "Letter Writing", "Story Writing"] }
//       ],
//       8: [
//         { id: "prose", name: "Prose", subtopics: ["The Best Christmas Present in the World", "The Tsunami", "Glimpses of the Past", "Bepin Choudhury's Lapse of Memory", "The Summit Within"] },
//         { id: "poetry", name: "Poetry", subtopics: ["The Ant and the Cricket", "A Short Monsoon Diary", "The Duck and the Kangaroo", "The Ball Poem"] },
//         { id: "grammar", name: "Grammar", subtopics: ["Tenses", "Modals", "Articles", "Prepositions", "Conjunctions"] },
//         { id: "writing", name: "Writing", subtopics: ["Diary Entry", "Letter Writing", "Story Writing"] }
//       ],
//       9: [
//         { id: "prose", name: "Prose", subtopics: ["The Fun They Had", "The Sound of Music", "The Little Girl", "A Truly Beautiful Mind", "The Snake and the Mirror"] },
//         { id: "poetry", name: "Poetry", subtopics: ["The Road Not Taken", "Wind", "Rain on the Roof", "A Legend of the Northland", "No Men Are Foreign"] },
//         { id: "grammar", name: "Grammar", subtopics: ["Tenses", "Modals", "Articles", "Prepositions", "Conjunctions"] },
//         { id: "writing", name: "Writing", subtopics: ["Diary Entry", "Letter Writing", "Story Writing"] }
//       ],
//       10: [
//         { id: "prose", name: "Prose", subtopics: ["A Letter to God", "Nelson Mandela: Long Walk to Freedom", "Two Stories About Flying", "From the Diary of Anne Frank", "The Hundred Dresses – I"] },
//         { id: "poetry", name: "Poetry", subtopics: ["Dust of Snow", "Fire and Ice", "A Tiger in the Zoo", "How to Tell Wild Animals", "The Ball Poem"] },
//         { id: "grammar", name: "Grammar", subtopics: ["Tenses", "Modals", "Articles", "Prepositions", "Conjunctions"] },
//         { id: "writing", name: "Writing", subtopics: ["Diary Entry", "Letter Writing", "Story Writing"] }
//       ]
//     }
//   },
//   mathematics: {
//     name: "Maths",
//     classes: {
//       7: [
//         { id: "integers", name: "Integers", subtopics: ["Properites of Addition and Subtraction of integers", "Multiplication of integers", "Properties of multiplication of Integers", "Division of integers","Properities of Division of integers"] },
//         { id: "fractions", name: "Fractions and Decimals", subtopics: ["Multiplication of Fractions", "Division of Fractions", "Multiplication of Decimal Numbers","Division of Decimal Numbers"] },
//         { id: "data", name: "Data Handling", subtopics: ["Representative Values", "Arthematic Mean", "Mode", "Median","USe of BarGraph with different purposes"] },
//         { id: "simple_equations", name: "Simple Equations", subtopics:["A Mind Reading Game", "Setting up an equation","What is an equation","More Equations","Application of Simple Equations to Practical Sistuations",] },
//         { id: "lines_angles", name: "Lines and Angles", subtopics: ["Introduction and related angels" , "Pairs of lines", "Checking for Parallel Lines"] },
//         { id: "triangles", name: "Triangles", subtopics: ["Medians of a Triangles", "Altitudes of a Triangles", "Exterior angles and its property","Angels sum property of a triangle","Two special triangle: Equilateral and isosceles","Sum of length of two sides of a triangle","Right-Angled triangles and pythogoras property"] },
//         { id: "comparing", name:"Comparing Quantaties", subtopics: ["Another way of comparing quantities", "Uses of percentages","prices related to an item","Charge given on borrowed money or simple intrest"] },
//         { id: "solid_shapes", name: "Rational Numbers", subtopics: ["Introduction and need for rational numbers", "Positive and negative rational numbers", "Rational numbers on the number line","Rational numbers in standard form","Comparison of rational numbers","Rational numbers between two rational numbers","Operations on rational numbers",] },
//         {id: "perimeter_area", name:"Perimeter and Area" ,subtopics:["Area of paralelogram","Area of triangles","Understanding circles"]},
//         {id: "algebraic_expressions", name:"Algebraic Expressions", subtopic:["Introduction to algebraic expresssions","Formation of expressions","Terms of an expression","Like and unlike terms","Monomials,binomilas,trinomials,polynomials","Finding the value of an expression"]},
//         {id: "exponents_powers", name:"Exponents and Powers", subtopic:["Indroduction to exponents","Laws of Exponents","Miscellaneous examples using laws of exponens","Decimal number system","Expressing large numbers in standard form"]},
//         {id: "symmetry", name:"Symmetry", subtopic:["Lines of symmetry for regular polygons","Rotational symmetry","Line symmetry vs rotational symmetry"]},
//         {id: "visualising", name:"Visualising Solid Shapes",subtopic:["plane figures vs solid shapes","Faces,edges","Visualisation from different persepectives"] }
//       ],
//       8: [
//         { id: "rational_numbers", name: "Rational Numbers", subtopics: ["Properties of Rational Numbers", "Operations on Rational Numbers"] },
//         { id: "linear_equations", name: "Linear Equations", subtopics: ["Solving Linear Equations", "Some Applications Solving Equations having the variable on both sides","Applications","Reducing Equations to simpler form","Reducialbe Equations"] },
//         { id: "quadrilaterals", name: "Quadrilaterals", subtopics: ["Introduction", "Ploygons","Sume of the Meausres of the exterios angles of a polygon","Kinds of quadrilaterals","Some special parallelograms"] },
//         { id: "data_handling", name: "Data Handling", subtopics: ["Organising Data", "Grouping Data", "Bar Graphs", "Chance of Probability"] },
//         { id: "squares", name: "Squares and Square Roots", subtopics: ["Introduction","Properties of Squares Numbers", "Some more intersting patterns","Finding the square of a number","Square roots","Square roots of decimals","Estimating square root"] },
//         { id: "cubes", name: "Cubes and Cube Roots", subtopics: ["Introduction","Cubes", "Cube Roots"] },
//         { id: "comparing_quantities",name:"Comparing Quantities", subtopic:["Recalling ratios and percentages","Finding the increase and decrease percent","Finding discounts","Prices related to buying and selling","Sales","Compound intrest","Deducing a formula for compound intrest","Rate compounded","Applications of compound intrest formula"]},
//         { id: "algebraic_expressions_identities", name:"Algebraic Expressions and identities", subtopic:["What are expressions","Terms","Monomials,binomials,polinomials","Like and Unlike Terms ","Addition and Subtraction of Algebraic Expressions","Multiplicaton of algebraic expressions","Multiplyinf a monomial by a monomial","Multiplying a monomial by a ploynomial","Multiplying a polynomial by a polynomial","what is an identity","standard identities","Applying identites"]},
//         { id: "mensuration", name: "Mensuration", subtopics: ["Introduction", "Let us recall","Area of Teapezium"] },
//         { id: "exponents", name: "Exponents", subtopics: ["Laws of Exponents", "Applications of Exponents"] }
//       ],
//       9: [
//         { id: "number_system", name: "Number System", subtopics: ["Real Numbers", "Laws of Exponents", "Surds"] },
//         { id: "algebra", name: "Algebra", subtopics: ["Polynomials", "Linear Equations in Two Variables"] },
//         { id: "coordinate_geometry", name: "Coordinate Geometry", subtopics: ["Cartesian Plane", "Distance Formula", "Section Formula"] },
//         { id: "geometry", name: "Geometry", subtopics: ["Euclid's Geometry", "Lines and Angles", "Triangles"] },
//         { id: "mensuration", name: "Mensuration", subtopics: ["Surface Area", "Volume", "Surface Area and Volume of Solids"] },
//         { id: "statistics", name: "Statistics", subtopics: ["Mean", "Median", "Mode", "Graphical Representation"] }
//       ],
//       10: [
//         { id: "number_system", name: "Number System", subtopics: ["Real Numbers", "Laws of Exponents", "Surds"] },
//         { id: "algebra", name: "Algebra", subtopics: ["Polynomials", "Linear Equations", "Quadratic Equations", "Arithmetic Progressions"] },
//         { id: "coordinate_geometry", name: "Coordinate Geometry", subtopics: ["Cartesian Plane", "Distance Formula", "Section Formula"] },
//         { id: "geometry", name: "Geometry", subtopics: ["Triangles", "Circles", "Constructions"] },
//         { id: "trigonometry", name: "Trigonometry", subtopics: ["Trigonometric Ratios", "Trigonometric Identities"] },
//         { id: "mensuration", name: "Mensuration", subtopics: ["Surface Area", "Volume", "Surface Area and Volume of Solids"] },
//         { id: "statistics", name: "Statistics", subtopics: ["Mean", "Median", "Mode", "Graphical Representation"] },
//         { id: "probability", name: "Probability", subtopics: ["Probability Theory", "Applications of Probability"] }
//       ]
//     }
//   },
//   science: {
//     name: "Science",
//     classes: {
//       7: [
//         { id: "Biology", name: "Nutrition in Plants", subtopics: ["Modes of Nutrition", "Photosynthesis", "Saprophytes"] },
//         { id: "Biology", name: "Nutrition in Animals", subtopics: ["Heterotrophic Nutrition", "Digestion in Humans", "Digestion in Amoeba"] },
//         { id: "Physics", name: "Heat", subtopics: ["Temperature", "Heat Transfer", "Expansion of Solids, Liquids, and Gases"] },
//         { id: "Chemistry", name: "Acids, Bases, and Salts", subtopics: ["Properties of Acids and Bases", "Neutralization", "Uses of Acids and Bases"] },
//         { id: "Chemistry", name: "Physical and Chemical Changes", subtopics: ["Physical Changes", "Chemical Changes", "Reversible and Irreversible Changes"] },
//         { id: "physics", name: "Weather, Climate, and Adaptation", subtopics: ["Weather and Climate", "Adaptations in Animals and Plants"] },
//         { id: "soil", name: "Soil", subtopics: ["Soil Formation", "Soil Profile", "Soil Erosion and Conservation"] },
//         { id: "Biology", name: "Respiration in Organisms", subtopics: ["Aerobic and Anaerobic Respiration", "Respiratory System in Humans", "Respiration in Plants"] },
//         { id: "Biology", name: "Transportation in Animals and Plants", subtopics: ["Circulatory System in Humans", "Transportation in Plants"] },
//         { id: "Biology", name: "Reproduction in Plants", subtopics: ["Modes of Reproduction", "Asexual Reproduction", "Sexual Reproduction"] },
//         { id: "Physics", name: "Motion and Time", subtopics: ["Types of Motion", "Speed and Velocity", "Measurement of Time"] },
//         { id: "Biology", name: "Electric Current and its Effects", subtopics: ["Electric Circuit", "Heating Effect of Electric Current", "Magnetic Effect of Electric Current"] }
//       ],
//       8: [
//         { id: "Biology", name: "Microorganisms", subtopics: ["Types of Microorganisms", "Useful and Harmful Microorganisms"] },
//         { id: "Biology", name: "Food", subtopics: ["Components of Food", "Balanced Diet", "Deficiency Diseases"] },
//         { id: "Physics", name: "Force and Motion", subtopics: ["Force", "Newton's Laws", "Pressure"] },
//         { id: "Biology", name: "Water: A Precious Resource", subtopics: ["Sources of Water", "Water Cycle", "Conservation of Water"] },
//         { id: "Physics", name: "Friction", subtopics: ["Types of Friction", "Advantages and Disadvantages"] },
//         { id: "Physics", name: "Sound", subtopics: ["Production of Sound", "Propagation", "Speed of Sound"] },
//         { id: "Chemistry", name: "Chemical Effects of Current", subtopics: ["Electroplating", "Applications"] },
//         { id: "Chemistry", name: "Some Natural Phenomena", subtopics: ["Lightning", "Earthquakes", "Cyclones"] }
//       ],
//       9: [
//         { id: "Physics", name: "Matter", subtopics: ["Structure of Atom", "Chemical Reactions", "Acids, Bases, Salts"] },
//         { id: "Physics", name: "Motion", subtopics: ["Speed", "Velocity", "Acceleration"] },
//         { id: "Physics", name: "Force and Laws of Motion", subtopics: ["Newton's Laws", "Momentum", "Inertia"] },
//         { id: "Physics", name: "Gravitation", subtopics: ["Law of Gravitation", "Acceleration due to Gravity", "Mass and Weight"] },
//         { id: "Physics", name: "Work, Energy and Power", subtopics: ["Work", "Energy", "Power"] },
//         { id: "Physics", name: "Sound", subtopics: ["Propagation", "Sound Waves", "Speed of Sound"] },
//         { id: "Chemistry", name: "Chemical Effects of Current", subtopics: ["Electrolysis", "Applications"] },
//         { id: "Physics", name: "Light – Reflection and Refraction", subtopics: ["Reflection", "Refraction", "Lenses"] },
//         { id: "Biology", name: "Human Eye and Colourful World", subtopics: ["Structure of Eye", "Defects of Eye", "Dispersion of Light"] }
//       ],
//       10: [
//         { id: "Chemistry", name: "Chemical Reactions and Equations", subtopics: ["Types of Reactions", "Balancing Chemical Equations", "Redox Reactions"] },
//         { id: "Chemistry", name: "Acids, Bases and Salts", subtopics: ["Properties", "Neutralization", "pH Scale"] },
//         { id: "Chemistry", name: "Metals and Non-Metals", subtopics: ["Reactivity Series", "Properties", "Uses"] },
//         { id: "Chemistry", name: "Carbon and its Compounds", subtopics: ["Hydrocarbons", "Alcohols", "Carboxylic Acids"] },
//         { id: "Chemistry", name: "Periodic Classification of Elements", subtopics: ["Mendeleev's Table", "Modern Periodic Table"] },
//         { id: "Biology", name: "Life Processes", subtopics: ["Nutrition", "Respiration", "Transportation", "Excretion"] },
//         { id: "Biology", name: "Control and Coordination", subtopics: ["Nervous System", "Hormones"] },
//         { id: "Biology", name: "Reproduction", subtopics: ["Reproduction in Humans", "Reproductive Health"] },
//         { id: "Biology", name: "Heredity and Evolution", subtopics: ["Mendelian Genetics", "Evolution"] },
//         { id: "Physics", name: "Light – Reflection and Refraction", subtopics: ["Reflection", "Refraction", "Lenses"] },
//         { id: "Physics", name: "Electricity", subtopics: ["Ohm's Law", "Resistance", "Series and Parallel Circuits"] },
//         { id: "Physics", name: "Magnetic Effects of Current", subtopics: ["Electromagnetism", "Applications"] }
//       ]
//     }
//   },
//   social_science: {
//     name: "Social",
//     classes: {
//       7: [
//         { id: "history", name: "History", subtopics: ["Tribes, Nomads and Settled Communities", "Kings, Farmers and Towns", "New Empires and Kingdoms", "Crafts and Trade", "Culture and Science"] },
//         { id: "geography", name: "Geography", subtopics: ["Our Environment", "Inside Our Earth", "Air", "Water", "Human Environment"] },
//         { id: "civics", name: "Civics", subtopics: ["Understanding Diversity", "Government and Democracy", "Role of Government", "Media and Citizen"] },
//         { id: "economics", name: "Economics", subtopics: ["Understanding Poverty", "Sectors of Economy", "Money and Credit"] }
//       ],
//       8: [
//         { id: "history", name: "History", subtopics: ["Rulers and Buildings", "Mughal Empire", "The Advent of Europeans", "Colonialism and Revolt", "Society and Reform"] },
//         { id: "geography", name: "Geography", subtopics: ["Resources", "Landforms", "Climate", "Soil and Vegetation", "Water Resources"] },
//         { id: "civics", name: "Civics", subtopics: ["The Constitution", "Electoral Politics", "Panchayati Raj", "Local Government", "Social Justice"] },
//         { id: "economics", name: "Economics", subtopics: ["Production", "Consumption", "Trade", "Globalisation"] }
//       ],
//       9: [
//         { id: "history", name: "History", subtopics: ["French Revolution", "Industrial Revolution", "Nationalism in Europe", "Colonialism in Asia", "World Wars"] },
//         { id: "geography", name: "Geography", subtopics: ["Resources and Development", "Water Resources", "Agriculture", "Minerals and Energy", "Manufacturing Industries"] },
//         { id: "civics", name: "Civics", subtopics: ["Democracy in the Contemporary World", "Constitutional Design", "Electoral Politics", "Working of Institutions"] },
//         { id: "economics", name: "Economics", subtopics: ["Development", "Sectors of the Economy", "Employment", "Rural Development"] }
//       ],
//       10: [
//         { id: "history", name: "History", subtopics: ["The Rise of Nazism", "World War II", "India's Freedom Struggle", "Contemporary World History"] },
//         { id: "geography", name: "Geography", subtopics: ["Resources and Development", "Water Resources", "Agriculture", "Minerals and Energy", "Manufacturing Industries"] },
//         { id: "civics", name: "Civics", subtopics: ["Democracy and Diversity", "Popular Struggles and Movements", "Political Parties", "Outcomes of Democracy"] },
//         { id: "economics", name: "Economics", subtopics: ["Development", "Sectors of Economy", "Globalisation", "Consumer Rights"] }
//       ]
//     }
//   },
//   computer: {
//     name: "Computer",
//     classes: {
//       7: [
//         { id: "basics", name: "Computer Basics", subtopics: ["Introduction to Computers", "Hardware and Software", "Input and Output Devices"] },
//         { id: "operating_systems", name: "Operating Systems", subtopics: ["Introduction to OS", "Functions of OS", "Types of OS"] },
//         { id: "word_processing", name: "Word Processing", subtopics: ["MS Word Basics", "Formatting Text", "Inserting Images"] },
//         { id: "internet", name: "Internet", subtopics: ["Introduction to Internet", "Browser Basics", "Search Engines"] }
//       ],
//       8: [
//         { id: "spreadsheet", name: "Spreadsheet", subtopics: ["Introduction to Excel", "Formulas and Functions", "Charts and Graphs"] },
//         { id: "presentation", name: "Presentation", subtopics: ["MS PowerPoint Basics", "Slide Design", "Animations"] },
//         { id: "programming_basics", name: "Programming Basics", subtopics: ["Introduction to Scratch", "Algorithms and Flowcharts"] },
//         { id: "internet", name: "Internet", subtopics: ["Email", "Safety on Internet", "Search Techniques"] }
//       ],
//       9: [
//         { id: "programming", name: "Programming", subtopics: ["Introduction to Python", "Variables and Data Types", "Loops and Conditional Statements"] },
//         { id: "database", name: "Database Management", subtopics: ["Introduction to DBMS", "Tables and Records", "Basic SQL Queries"] },
//         { id: "networking", name: "Networking", subtopics: ["Basics of Networking", "LAN, WAN, and Internet", "IP Addressing"] },
//         { id: "web_design", name: "Web Designing", subtopics: ["HTML Basics", "Formatting Text and Images", "Links and Tables"] }
//       ],
//       10: [
//         { id: "advanced_programming", name: "Advanced Programming", subtopics: ["Functions", "File Handling", "Exception Handling"] },
//         { id: "database", name: "Database Management", subtopics: ["Advanced SQL Queries", "Joins", "Normalization"] },
//         { id: "networking", name: "Networking", subtopics: ["Network Topologies", "Protocols", "Internet Services"] },
//         { id: "web_design", name: "Web Designing", subtopics: ["CSS Styling", "Forms", "Responsive Design"] }
//       ]
//     }
//   }
// };

// export default syllabus;



// syllabus.js

const syllabus = {
  english: {
    name: "English",
    classes: {
      7: [
        { 
          id: "unit1", 
          name: "Learning Together", 
          subtopics: [
            "The Day the River Spoke",
            "Try Again",
            "Three Days to See",
            "Sentence completion",
            "Onomatopoeia",
            "Fill-in-the-blanks",
            "Prepositions",
            "Phrases",
            "Metaphor and simile",
            "Modal verbs",
            "Descriptive paragraph writing"
          ] 
        },
        { 
          id: "unit2", 
          name: "Wit and Humour", 
          subtopics: [
            "Animals, Birds, and Dr. Dolittle",
            "A Funny Man",
            "Say the Right Thing",
            "Compound words",
            "Palindrome",
            "Present perfect tense",
            "Notice writing",
            "Phrasal verbs",
            "Adverbs and prepositions",
            "Suffixes",
            "Verb forms",
            "Tenses",
            "Kinds of sentences"
          ] 
        },
        { 
          id: "unit3", 
          name: "Dreams & Discoveries", 
          subtopics: [
            "My Brother's Great Invention",
            "Paper Boats",
            "North, South, East, West",
            "Onomatopoeia",
            "Binomials",
            "Phrasal verbs",
            "Idioms",
            "Simple past and past perfect tense",
            "Antonyms (opposites)",
            "Diary entry writing",
            "Associate words with meanings",
            "Subject-verb agreement",
            "Letter format (leave application)"
          ] 
        },
        { 
          id: "unit4", 
          name: "Travel and Adventure", 
          subtopics: [
            "The Tunnel",
            "Travel",
            "Conquering the Summit",
            "Phrases",
            "Onomatopoeia",
            "Punctuation",
            "Descriptive paragraph writing",
            "Parts of speech",
            "Articles",
            "Formal letter writing"
          ] 
        },
        { 
          id: "unit5", 
          name: "Bravehearts", 
          subtopics: [
            "A Homage to Our Brave Soldiers",
            "My Dear Soldiers",
            "Rani Abbakka",
            "Prefix and root words",
            "Main clause",
            "Subordinate clause",
            "Subordinating conjunctions",
            "Collocations",
            "Fill-in-the-blanks (spelling)",
            "Speech (direct & indirect)"
          ] 
        }
      ],
      8: [
        { 
          id: "prose", 
          name: "Prose", 
          subtopics: [
            "The Best Christmas Present in the World",
            "The Tsunami",
            "Glimpses of the Past",
            "Bepin Choudhury's Lapse of Memory",
            "The Summit Within",
            "This is Jody's Fawn",
            "A Visit to Cambridge",
            "A Short Monsoon Diary",
            "The Great Stone Face – I",
            "The Great Stone Face – II"
          ] 
        },
        { 
          id: "poetry", 
          name: "Poetry", 
          subtopics: [
            "The Ant and the Cricket",
            "Geography Lesson",
            "Macavity: The Mystery Cat",
            "The Last Bargain",
            "The School Boy",
            "The Duck and the Kangaroo",
            "When I set out for Lyonnesse",
            "On the Grasshopper and Cricket"
          ] 
        },
        { 
          id: "supplementary", 
          name: "Supplementary", 
          subtopics: [
            "How the Camel Got His Hump",
            "Children at Work",
            "The Selfish Giant",
            "The Treasure Within",
            "Princess September",
            "The Fight",
            "The Open Window",
            "Jalebis",
            "The Comet – I",
            "The Comet – II"
          ] 
        },
        { 
          id: "grammar", 
          name: "Grammar", 
          subtopics: [
            "Tenses",
            "Modals",
            "Articles",
            "Prepositions",
            "Conjunctions"
          ] 
        },
        { 
          id: "writing", 
          name: "Writing", 
          subtopics: [
            "Diary Entry",
            "Letter Writing",
            "Story Writing"
          ] 
        }
      ],
      9: [
        { 
          id: "prose", 
          name: "Prose", 
          subtopics: [
            "The Fun They Had",
            "The Sound of Music",
            "The Little Girl",
            "A Truly Beautiful Mind",
            "The Snake and the Mirror",
            "My Childhood",
            "Reach for the Top",
            "Kathmandu",
            "If I Were You"
          ] 
        },
        { 
          id: "poetry", 
          name: "Poetry", 
          subtopics: [
            "The Road Not Taken",
            "Wind",
            "Rain on the Roof",
            "The Lake Isle of Innisfree",
            "A Legend of the Northland",
            "No Men Are Foreign",
            "On Killing a Tree",
            "A Slumber Did My Spirit Seal"
          ] 
        },
        { 
          id: "supplementary", 
          name: "Supplementary", 
          subtopics: [
            "The Lost Child",
            "The Adventures of Toto",
            "Iswaran the Storyteller",
            "In the Kingdom of Fools",
            "The Happy Prince",
            "The Last Leaf",
            "A House is Not a Home",
            "The Beggar"
          ] 
        },
        { 
          id: "grammar", 
          name: "Grammar", 
          subtopics: [
            "Tenses",
            "Modals",
            "Articles",
            "Prepositions",
            "Conjunctions"
          ] 
        },
        { 
          id: "writing", 
          name: "Writing", 
          subtopics: [
            "Diary Entry",
            "Letter Writing",
            "Story Writing"
          ] 
        }
      ],
      10: [
        { 
          id: "prose", 
          name: "Prose", 
          subtopics: [
            "A Letter to God",
            "Nelson Mandela: Long Walk to Freedom",
            "From the Diary of Anne Frank",
            "Glimpses of India",
            "Madam Rides the Bus",
            "The Sermon at Benares",
            "Mijbil the Otter",
            "The Proposal"
          ] 
        },
        { 
          id: "poetry", 
          name: "Poetry", 
          subtopics: [
            "Dust of Snow",
            "Fire and Ice",
            "The Ball Poem",
            "A Tiger in the Zoo",
            "How to Tell Wild Animals",
            "The Trees",
            "Fog",
            "The Tale of Custard the Dragon",
            "For Anne Gregory"
          ] 
        },
        { 
          id: "supplementary", 
          name: "Supplementary", 
          subtopics: [
            "A Triumph of Surgery",
            "The Thief's Story",
            "The Midnight Visitor",
            "A Question of Trust",
            "Footprints Without Feet",
            "The Making of a Scientist",
            "The Necklace",
            "Bholi",
            "The Book That Saved the Earth"
          ] 
        },
        { 
          id: "grammar", 
          name: "Grammar", 
          subtopics: [
            "Tenses",
            "Modals",
            "Articles",
            "Prepositions",
            "Conjunctions"
          ] 
        },
        { 
          id: "writing", 
          name: "Writing", 
          subtopics: [
            "Diary Entry",
            "Letter Writing",
            "Story Writing"
          ] 
        }
      ]
    }
  },
  mathematics: {
    name: "Maths",
    classes: {
      7: [
        { 
          id: "integers", 
          name: "Integers", 
          subtopics: [
            "Properties of Addition and Subtraction of integers",
            "Multiplication of integers",
            "Properties of multiplication of Integers",
            "Division of integers",
            "Properties of Division of integers"
          ] 
        },
        { 
          id: "fractions", 
          name: "Fractions and Decimals", 
          subtopics: [
            "Multiplication of Fractions",
            "Division of Fractions",
            "Multiplication of Decimal Numbers",
            "Division of Decimal Numbers"
          ] 
        },
        { 
          id: "data", 
          name: "Data Handling", 
          subtopics: [
            "Representative Values",
            "Arithmetic Mean",
            "Mode",
            "Median",
            "Use of BarGraph with different purposes"
          ] 
        },
        { 
          id: "simple_equations", 
          name: "Simple Equations", 
          subtopics: [
            "A Mind Reading Game",
            "Setting up an equation",
            "What is an equation",
            "More Equations",
            "Application of Simple Equations to Practical Situations"
          ] 
        },
        { 
          id: "lines_angles", 
          name: "Lines and Angles", 
          subtopics: [
            "Introduction and related angles",
            "Pairs of lines",
            "Checking for Parallel Lines"
          ] 
        },
        { 
          id: "triangles", 
          name: "Triangles", 
          subtopics: [
            "Medians of a Triangle",
            "Altitudes of a Triangle",
            "Exterior angles and its property",
            "Angle sum property of a triangle",
            "Two special triangles: Equilateral and isosceles",
            "Sum of length of two sides of a triangle",
            "Right-Angled triangles and Pythagoras property"
          ] 
        },
        { 
          id: "comparing", 
          name: "Comparing Quantities", 
          subtopics: [
            "Another way of comparing quantities",
            "Uses of percentages",
            "Prices related to an item",
            "Charge given on borrowed money or simple interest"
          ] 
        },
        { 
          id: "rational_numbers", 
          name: "Rational Numbers", 
          subtopics: [
            "Introduction and need for rational numbers",
            "Positive and negative rational numbers",
            "Rational numbers on the number line",
            "Rational numbers in standard form",
            "Comparison of rational numbers",
            "Rational numbers between two rational numbers",
            "Operations on rational numbers"
          ] 
        },
        { 
          id: "perimeter_area", 
          name: "Perimeter and Area", 
          subtopics: [
            "Area of parallelogram",
            "Area of triangles",
            "Understanding circles"
          ] 
        },
        { 
          id: "algebraic_expressions", 
          name: "Algebraic Expressions", 
          subtopics: [
            "Introduction to algebraic expressions",
            "Formation of expressions",
            "Terms of an expression",
            "Like and unlike terms",
            "Monomials, binomials, trinomials, polynomials",
            "Finding the value of an expression"
          ] 
        },
        { 
          id: "exponents_powers", 
          name: "Exponents and Powers", 
          subtopics: [
            "Introduction to exponents",
            "Laws of Exponents",
            "Miscellaneous examples using laws of exponents",
            "Decimal number system",
            "Expressing large numbers in standard form"
          ] 
        },
        { 
          id: "symmetry", 
          name: "Symmetry", 
          subtopics: [
            "Lines of symmetry for regular polygons",
            "Rotational symmetry",
            "Line symmetry vs rotational symmetry"
          ] 
        },
        { 
          id: "visualising", 
          name: "Visualising Solid Shapes", 
          subtopics: [
            "Plane figures vs solid shapes",
            "Faces, edges, vertices",
            "Visualisation from different perspectives"
          ] 
        }
      ],
      8: [
        { 
          id: "rational_numbers", 
          name: "Rational Numbers", 
          subtopics: [
            "Introduction",
            "Properties of Rational Numbers",
            "Operations on Rational Numbers",
            "Representation of Rational Numbers on the Number Line",
            "Rational Number between Two Rational Numbers",
            "Word Problems"
          ] 
        },
        { 
          id: "linear_equations", 
          name: "Linear Equations in One Variable", 
          subtopics: [
            "Introduction",
            "Solving Equations which have Linear Expressions on one Side and Numbers on the other Side",
            "Some Applications",
            "Solving Equations having the Variable on both sides",
            "Some More Applications",
            "Reducing Equations to Simpler Form",
            "Equations Reducible to the Linear Form"
          ] 
        },
        { 
          id: "quadrilaterals", 
          name: "Understanding Quadrilaterals", 
          subtopics: [
            "Polygons",
            "Sum of the Measures of the Exterior Angles of a Polygon",
            "Kinds of Quadrilaterals",
            "Some Special Parallelograms"
          ] 
        },
        { 
          id: "data_handling", 
          name: "Data Handling", 
          subtopics: [
            "Looking for Information",
            "Organising Data",
            "Grouping Data",
            "Circle Graph or Pie Chart",
            "Chance and Probability"
          ] 
        },
        { 
          id: "squares", 
          name: "Squares and Square Roots", 
          subtopics: [
            "Introduction",
            "Properties of Square Numbers",
            "Some More Interesting Patterns",
            "Finding the Square of a Number",
            "Square Roots",
            "Square Roots of Decimals",
            "Estimating Square Root"
          ] 
        },
        { 
          id: "cubes", 
          name: "Cubes and Cube Roots", 
          subtopics: [
            "Introduction",
            "Cubes",
            "Cube Roots"
          ] 
        },
        { 
          id: "comparing_quantities", 
          name: "Comparing Quantities", 
          subtopics: [
            "Recalling Ratios and Percentages",
            "Finding the Increase and Decrease Percent",
            "Finding Discounts",
            "Prices Related to Buying and Selling (Profit and Loss)",
            "Sales Tax/Value Added Tax/Goods and Services Tax",
            "Compound Interest",
            "Deducing a Formula for Compound Interest",
            "Rate Compounded Annually or Half Yearly (Semi Annually)",
            "Applications of Compound Interest Formula"
          ] 
        },
        { 
          id: "algebraic_expressions_identities", 
          name: "Algebraic Expressions and Identities", 
          subtopics: [
            "What are Expressions?",
            "Terms, Factors and Coefficients",
            "Monomials, Binomials and Polynomials",
            "Like and Unlike Terms",
            "Addition and Subtraction of Algebraic Expressions",
            "Multiplication of Algebraic Expressions: Introduction",
            "Multiplying a Monomial by a Monomial",
            "Multiplying a Monomial by a Polynomial",
            "Multiplying a Polynomial by a Polynomial",
            "What is an Identity?",
            "Standard Identities",
            "Applying Identities"
          ] 
        },
        { 
          id: "mensuration", 
          name: "Mensuration", 
          subtopics: [
            "Area of Trapezium",
            "Area of General Quadrilateral",
            "Area of Polygons",
            "Solid Shapes",
            "Surface Area of Cube, Cuboid and Cylinder",
            "Volume of Cube, Cuboid and Cylinder",
            "Volume and Capacity"
          ] 
        },
        { 
          id: "exponents", 
          name: "Exponents and Powers", 
          subtopics: [
            "Powers with Negative Exponents",
            "Laws of Exponents",
            "Use of Exponents to Express Small Numbers in Standard Form"
          ] 
        },
        { 
          id: "direct_inverse", 
          name: "Direct and Inverse Proportions", 
          subtopics: [
            "Direct Proportion",
            "Inverse Proportion"
          ] 
        },
        { 
          id: "factorisation", 
          name: "Factorisation", 
          subtopics: [
            "What is Factorisation?",
            "Division of Algebraic Expressions",
            "Division of Algebraic Expressions Continued (Polynomial / Polynomial)",
            "Finding Errors"
          ] 
        },
        { 
          id: "graphs", 
          name: "Introduction to Graphs", 
          subtopics: [
            "Linear Graphs",
            "Some Applications"
          ] 
        }
      ],
      9: [
        { 
          id: "number_system", 
          name: "Number System", 
          subtopics: [
            "Real Numbers",
            // "Laws of Exponents",
            // "Surds"
          ] 
        },
        { 
          id: "algebra", 
          name: "Algebra", 
          subtopics: [
            "Polynomials",
            "Linear Equations in Two Variables"
          ] 
        },
        { 
          id: "coordinate_geometry", 
          name: "Coordinate Geometry", 
          subtopics: [
            // "Cartesian Plane",
            // "Distance Formula",
            // "Section Formula
            // "
            "Coordinate Geometry"
          ] 
        },
        { 
          id: "geometry", 
          name: "Geometry", 
          subtopics: [
            "Introduction to Euclid's Geometry",
            "Lines and Angles",
            "Triangles",
            "Quadrilaterals",
            "Circles"
          ] 
        },
        { 
          id: "mensuration", 
          name: "Mensuration", 
          subtopics: [
            "Areas",
            "Surface areas and volumes"
          ] 
        },
        { 
          id: "statistics", 
          name: "Statistics", 
          subtopics: [
            // "Mean",
            // "Median",
            // "Mode",
            // "Graphical Representation"
            "Statistics"
          ] 
        }
      ],
      10: [
        { 
          id: "number_system", 
          name: "Number System", 
          subtopics: [
            "Real Numbers"
          ] 
        },
        { 
          id: "algebra", 
          name: "Algebra", 
          subtopics: [
            "Polynomials",
            "Pair of Linear Equations in Two Variables",
            "Quadratic Equations",
            "Arithmetic Progressions"
          ] 
        },
        { 
          id: "coordinate_geometry", 
          name: "Coordinate Geometry", 
          subtopics: [
            "Coordinate Geometry"
          ] 
        },
        { 
          id: "geometry", 
          name: "Geometry", 
          subtopics: [
            "Triangles",
            "Circles"
          ] 
        },
        { 
          id: "trigonometry", 
          name: "Trigonometry", 
          subtopics: [
            "Introduction to Trigonometry",
            "Trigonometric Identities",
            "Heights and Distances"
          ] 
        },
        { 
          id: "mensuration", 
          name: "Mensuration", 
          subtopics: [
            "Areas Related to Circles",
            "Surface Areas and Volumes"
          ] 
        },
        { 
          id: "statistics", 
          name: "Statistics", 
          subtopics: [
            "Statistics"
          ] 
        },
        { 
          id: "probability", 
          name: "Probability", 
          subtopics: [
            "Probability"
          ] 
        }
      ]
    }
  },
  science: {
    name: "Science",
    classes: {
      7: [
        { 
          id: "nutrition_plants", 
          name: "Nutrition in Plants", 
          subtopics: [
            "Photosynthesis",
            "Modes of nutrition: Autotrophic, Heterotrophic",
            "Saprotrophic nutrition",
            "Structure of leaves"
          ] 
        },
        { 
          id: "nutrition_animals", 
          name: "Nutrition in Animals", 
          subtopics: [
            "Human digestive system",
            "Nutrition in different animals",
            "Feeding habits"
          ] 
        },
        { 
          id: "fibre_fabric", 
          name: "Fibre to Fabric", 
          subtopics: [
            "Natural fibres (Cotton, Wool, Silk)",
            "Processing of fibres",
            "Spinning, Weaving, Knitting",
            "Synthetic fibres"
          ] 
        },
        { 
          id: "heat", 
          name: "Heat", 
          subtopics: [
            "Measurement of temperature",
            "Methods of heat transfer: Conduction, Convection, Radiation",
            "Effects of heat on substances"
          ] 
        },
        { 
          id: "acids_bases", 
          name: "Acids, Bases and Salts", 
          subtopics: [
            "Properties of acids and bases",
            "Indicators",
            "Neutralization",
            "Common salts and uses"
          ] 
        },
        { 
          id: "physical_chemical", 
          name: "Physical and Chemical Changes", 
          subtopics: [
            "Characteristics of physical and chemical changes",
            "Examples and observations"
          ] 
        },
        { 
          id: "weather_climate", 
          name: "Weather, Climate and Adaptations of Animals to Climate", 
          subtopics: [
            "Difference between weather and climate",
            "Climatic zones",
            "Adaptations of animals"
          ] 
        },
        { 
          id: "winds_storms", 
          name: "Winds, Storms and Cyclones", 
          subtopics: [
            "Air movement",
            "Types of winds",
            "Storms, cyclones, and safety measures"
          ] 
        },
        { 
          id: "soil", 
          name: "Soil", 
          subtopics: [
            "Types of soil",
            "Soil profile",
            "Soil conservation"
          ] 
        },
        { 
          id: "respiration", 
          name: "Respiration in Organisms", 
          subtopics: [
            "Human respiratory system",
            "Breathing mechanism",
            "Respiration in animals and plants"
          ] 
        },
        { 
          id: "transportation", 
          name: "Transportation in Animals and Plants", 
          subtopics: [
            "Circulatory system in humans",
            "Transport of water and minerals in plants",
            "Phloem and xylem"
          ] 
        },
        { 
          id: "reproduction_plants", 
          name: "Reproduction in Plants", 
          subtopics: [
            "Sexual and asexual reproduction",
            "Pollination",
            "Seed formation and dispersal"
          ] 
        },
        { 
          id: "motion_time", 
          name: "Motion and Time", 
          subtopics: [
            "Distance and displacement",
            "Speed and velocity",
            "Uniform and non-uniform motion",
            "Graphical representation of motion"
          ] 
        },
        { 
          id: "electric_current", 
          name: "Electric Current and Its Effects", 
          subtopics: [
            "Electric circuit, conductors, and insulators",
            "Heating effect of current",
            "Magnetic effect of current",
            "Safety measures"
          ] 
        },
        { 
          id: "light", 
          name: "Light", 
          subtopics: [
            "Reflection and refraction",
            "Lenses and mirrors",
            "Human eye and defects"
          ] 
        },
        { 
          id: "water", 
          name: "Water: A Precious Resource", 
          subtopics: [
            "Water cycle",
            "Water conservation",
            "Uses of water"
          ] 
        },
        { 
          id: "forests", 
          name: "Forests: Our Lifeline", 
          subtopics: [
            "Types of forests",
            "Importance of forests",
            "Deforestation and conservation"
          ] 
        },
        { 
          id: "wastewater", 
          name: "Wastewater Story / Wastewater Management", 
          subtopics: [
            "Sewage treatment",
            "Recycling of water",
            "Water pollution"
          ] 
        }
      ],
      8: [
        { 
          id: "crop_production", 
          name: "Crop Production and Management", 
          subtopics: [
            "Agriculture practices",
            "Crop production techniques",
            "Storage and preservation"
          ] 
        },
        { 
          id: "microorganisms", 
          name: "Microorganisms: Friend and Foe", 
          subtopics: [
            "Bacteria, viruses, fungi",
            "Useful microbes",
            "Harmful microbes and diseases"
          ] 
        },
        { 
          id: "synthetic_fibres", 
          name: "Synthetic Fibres and Plastics", 
          subtopics: [
            "Types of synthetic fibres",
            "Characteristics and uses",
            "Plastics: Thermoplastics, Thermosetting"
          ] 
        },
        { 
          id: "metals_nonmetals", 
          name: "Materials: Metals and Non-Metals", 
          subtopics: [
            "Physical and chemical properties",
            "Reactivity series",
            "Uses of metals and non-metals"
          ] 
        },
        { 
          id: "coal_petroleum", 
          name: "Coal and Petroleum", 
          subtopics: [
            "Fossil fuels",
            "Refining petroleum",
            "Uses of coal and petroleum"
          ] 
        },
        { 
          id: "combustion", 
          name: "Combustion and Flame", 
          subtopics: [
            "Types of combustion",
            "Structure of flame",
            "Fire safety"
          ] 
        },
        { 
          id: "conservation", 
          name: "Conservation of Plants and Animals", 
          subtopics: [
            "Biodiversity",
            "Endangered species",
            "Wildlife conservation"
          ] 
        },
        { 
          id: "cell", 
          name: "Cell – Structure and Functions", 
          subtopics: [
            "Plant and animal cell",
            "Cell organelles",
            "Cell division"
          ] 
        },
        { 
          id: "reproduction_animals", 
          name: "Reproduction in Animals", 
          subtopics: [
            "Modes of reproduction",
            "Human reproductive system",
            "Fertilization and development"
          ] 
        },
        { 
          id: "force_pressure", 
          name: "Force and Pressure", 
          subtopics: [
            "Types of forces",
            "Pressure in solids, liquids, and gases",
            "Applications"
          ] 
        },
        { 
          id: "friction", 
          name: "Friction", 
          subtopics: [
            "Advantages and disadvantages",
            "Reducing friction"
          ] 
        },
        { 
          id: "sound", 
          name: "Sound", 
          subtopics: [
            "Production and propagation",
            "Characteristics of sound",
            "Human ear"
          ] 
        },
        { 
          id: "chemical_effects", 
          name: "Chemical Effects of Electric Current", 
          subtopics: [
            "Electrolysis",
            "Applications in daily life"
          ] 
        },
        { 
          id: "natural_phenomena", 
          name: "Some Natural Phenomena", 
          subtopics: [
            "Lightning, Earthquakes, and Safety measures"
          ] 
        },
        { 
          id: "light", 
          name: "Light", 
          subtopics: [
            "Reflection, refraction, dispersion",
            "Human eye and defects"
          ] 
        },
        { 
          id: "stars", 
          name: "Stars and the Solar System", 
          subtopics: [
            "Solar system structure",
            "Planets, moons, comets, and meteors"
          ] 
        },
        { 
          id: "pollution", 
          name: "Pollution of Air and Water", 
          subtopics: [
            "Causes and effects",
            "Control measures"
          ] 
        }
      ],
      9: [
        { 
          id: "matter", 
          name: "Matter in Our Surroundings", 
          subtopics: [
            "States of matter",
            "Properties of solids, liquids, and gases",
            "Changes of state"
          ] 
        },
        { 
          id: "pure_matter", 
          name: "Is Matter Around Us Pure?", 
          subtopics: [
            "Mixtures, solutions, alloys",
            "Separation techniques"
          ] 
        },
        { 
          id: "atoms_molecules", 
          name: "Atoms and Molecules", 
          subtopics: [
            "Laws of chemical combination",
            "Atomic and molecular masses",
            "Mole concept"
          ] 
        },
        { 
          id: "atom_structure", 
          name: "Structure of the Atom", 
          subtopics: [
            "Discovery of electron, proton, neutron",
            "Atomic models"
          ] 
        },
        { 
          id: "cell", 
          name: "The Fundamental Unit of Life", 
          subtopics: [
            "Cell structure",
            "Cell organelles",
            "Cell functions"
          ] 
        },
        { 
          id: "tissues", 
          name: "Tissues", 
          subtopics: [
            "Plant tissues",
            "Animal tissues"
          ] 
        },
        { 
          id: "diversity_1", 
          name: "Diversity of the Living Organisms – I", 
          subtopics: [
            "Classification of organisms",
            "Kingdom Monera, Protista, Fungi"
          ] 
        },
        { 
          id: "diversity_2", 
          name: "Diversity of the Living Organisms – II", 
          subtopics: [
            "Plant kingdom",
            "Angiosperms, Gymnosperms"
          ] 
        },
        { 
          id: "diversity_3", 
          name: "Diversity of the Living Organisms – III", 
          subtopics: [
            "Animal kingdom",
            "Classification of animals"
          ] 
        },
        { 
          id: "motion", 
          name: "Motion", 
          subtopics: [
            "Distance, displacement, speed, velocity",
            "Acceleration, uniform and non-uniform motion"
          ] 
        },
        { 
          id: "force_laws", 
          name: "Force and Laws of Motion", 
          subtopics: [
            "Newton's laws",
            "Momentum, force, and inertia"
          ] 
        },
        { 
          id: "gravitation", 
          name: "Gravitation", 
          subtopics: [
            "Universal law of gravitation",
            "Acceleration due to gravity",
            "Free fall"
          ] 
        },
        { 
          id: "work_energy", 
          name: "Work and Energy", 
          subtopics: [
            "Work done",
            "Kinetic and potential energy",
            "Power"
          ] 
        },
        { 
          id: "sound", 
          name: "Sound", 
          subtopics: [
            "Propagation of sound",
            "Characteristics",
            "Echo"
          ] 
        },
        { 
          id: "health", 
          name: "Why Do We Fall Ill?", 
          subtopics: [
            "Health and diseases",
            "Pathogens",
            "Immunity and vaccination"
          ] 
        },
        { 
          id: "natural_resources", 
          name: "Natural Resources", 
          subtopics: [
            "Air, water, soil, forests, minerals",
            "Conservation"
          ] 
        },
        { 
          id: "food_resources", 
          name: "Improvement in Food Resources", 
          subtopics: [
            "Crop varieties",
            "Animal husbandry",
            "Food processing"
          ] 
        }
      ],
      10: [
        { 
          id: "chemical_reactions", 
          name: "Chemical Reactions and Equations", 
          subtopics: [
            "Types of Chemical Reactions",
            "Writing and Balancing Chemical Equations",
            "Effects of Oxidation and Reduction",
            "Types of Oxidizing and Reducing Agents"
          ] 
        },
        { 
          id: "acids_bases", 
          name: "Acids, Bases, and Salts", 
          subtopics: [
            "Properties of Acids and Bases",
            "pH Scale",
            "Uses of Acids and Bases"
          ] 
        },
        { 
          id: "metals_nonmetals", 
          name: "Metals and Non-Metals", 
          subtopics: [
            "Properties of Metals and Non-Metals",
            "Reactivity Series of Metals",
            "Occurrence and Extraction of Metals",
            "Corrosion of Metals",
            "Uses of Metals and Non-Metals"
          ] 
        },
        { 
          id: "carbon_compounds", 
          name: "Carbon and Its Compounds", 
          subtopics: [
            "Covalent Bonding",
            "Homologous Series",
            "Saturated and Unsaturated Compounds",
            "Functional Groups",
            "Important Carbon Compounds and Their Uses"
          ] 
        },
        { 
          id: "periodic_classification", 
          name: "Periodic Classification of Elements", 
          subtopics: [
            "Mendeleev's Periodic Table",
            "Modern Periodic Table",
            "Properties of Elements in Groups",
            "Properties of Elements in Periods"
          ] 
        },
        { 
          id: "life_processes", 
          name: "Life Processes", 
          subtopics: [
            "Nutrition",
            "Respiration",
            "Excretion"
          ] 
        },
        { 
          id: "control_coordination", 
          name: "Control and Coordination", 
          subtopics: [
            "Nervous System",
            "Hormones"
          ] 
        },
        { 
          id: "reproduction", 
          name: "How do Organisms Reproduce?", 
          subtopics: [
            "Modes of Reproduction",
            "Reproductive Health"
          ] 
        },
        { 
          id: "heredity_evolution", 
          name: "Heredity and Evolution", 
          subtopics: [
            "Mendel's Experiments",
            "Evolution Theories"
          ] 
        },
        { 
          id: "light_reflection", 
          name: "Light – Reflection and Refraction", 
          subtopics: [
            "Mirror & Lens Formulas",
            "Applications"
          ] 
        },
        { 
          id: "human_eye", 
          name: "Human Eye and Colourful World", 
          subtopics: [
            "Human Eye",
            "Colourful World"
          ] 
        },
        { 
          id: "electricity", 
          name: "Electricity", 
          subtopics: [
            "Ohm's Law",
            "Series & Parallel Circuits"
          ] 
        },
        { 
          id: "magnetic_effects", 
          name: "Magnetic Effects of Electric Current", 
          subtopics: [
            "Electromagnetism",
            "Applications"
          ] 
        },
        { 
          id: "energy_sources", 
          name: "Sources of Energy", 
          subtopics: [
            "Conventional Sources of Energy",
            "Non-Conventional Sources of Energy"
          ] 
        },
        { 
          id: "environment", 
          name: "Our Environment", 
          subtopics: [
            "Ecosystem",
            "Ozone Layer"
          ] 
        },
        { 
          id: "natural_resources", 
          name: "Sustainable Management of Natural Resources", 
          subtopics: [
            "Forest & Wildlife",
            "Water Management"
          ] 
        }
      ]
    }
  },
  social_science: {
    name: "Social",
    classes: {
      7: [
        { 
          id: "history", 
          name: "History", 
          subtopics: [
            "Tracing Changes through a Thousand Years",
            "New Kings and Kingdoms",
            "The Delhi Sultans (12th–15th Century)",
            "The Mughal Empire (16th–17th Century)",
            "Tribes, Nomads and Settled Communities",
            "Devotional Paths to the Divine",
            "The Making of Regional Cultures",
            "Eighteenth Century Political Formations"
          ] 
        },
        { 
          id: "geography", 
          name: "Geography", 
          subtopics: [
            "Environment",
            "Inside Our Earth",
            "Our Changing Earth",
            "Air",
            "Water",
            "Human Environment Interactions– The Tropical and the Subtropical Region",
            "Life in the Deserts"
          ] 
        },
        { 
          id: "civics", 
          name: "Civics", 
          subtopics: [
            "On Equality",
            "Role of the Government in Health",
            "How the State Government Works",
            "Growing up as Boys and Girls",
            "Women Change the World",
            "Understanding Media",
            "Markets Around Us",
            "A Shirt in the Market"
          ] 
        }
      ],
      8: [
        { 
          id: "history", 
          name: "History", 
          subtopics: [
            "How, When and Where",
            "From Trade to Territory– The Company Establishes Power",
            "Ruling the Countryside",
            "Tribals, Dikus and the Vision of a Golden Age",
            "When People Rebel– 1857 and After",
            "Civilising the 'Native', Educating the Nation",
            "Women, Caste and Reform",
            "The Making of the National Movement: 1870s–1947"
          ] 
        },
        { 
          id: "geography", 
          name: "Geography", 
          subtopics: [
            "Resources",
            "Land, Soil, Water, Natural Vegetation and Wildlife Resources",
            "Agriculture",
            "Industries",
            "Human Resources"
          ] 
        },
        { 
          id: "civics", 
          name: "Civics", 
          subtopics: [
            "The Indian Constitution",
            "Understanding Secularism",
            "Parliament and the Making of Laws",
            "Judiciary",
            "Understanding Marginalisation",
            "Confronting Marginalisation",
            "Public Facilities",
            "Law and Social Justice"
          ] 
        }
      ],
      9: [
        { 
          id: "history", 
          name: "History", 
          subtopics: [
            "The French Revolution",
            "Socialism in Europe and the Russian Revolution",
            "Nazism and the Rise of Hitler",
            "Forest Society and Colonialism",
            "Pastoralists in the Modern World"
          ] 
        },
        { 
          id: "geography", 
          name: "Geography", 
          subtopics: [
            "India– Size and Location",
            "Physical Features of India",
            "Drainage",
            "Climate",
            "Natural Vegetation and Wildlife",
            "Population"
          ] 
        },
        { 
          id: "political_science", 
          name: "Political Science", 
          subtopics: [
            "What is Democracy? Why Democracy?",
            "Constitutional Design",
            "Electoral Politics",
            "Working of Institutions",
            "Democratic Rights"
          ] 
        },
        { 
          id: "economics", 
          name: "Economics", 
          subtopics: [
            "The Story of Village Palampur",
            "People as Resource",
            "Poverty as a Challenge",
            "Food Security in India"
          ] 
        }
      ],
      10: [
        { 
          id: "history", 
          name: "History", 
          subtopics: [
            "The Rise of Nationalism in Europe",
            "Nationalism in India",
            "The Making of a Global World",
            "The Age of Industrialisation",
            "Print Culture and the Modern World"
          ] 
        },
        { 
          id: "geography", 
          name: "Geography", 
          subtopics: [
            "Resources and Development",
            "Forest and Wildlife Resources",
            "Water Resources",
            "Agriculture",
            "Minerals and Energy Resources",
            "Manufacturing Industries",
            "Lifelines of National Economy"
          ] 
        },
        { 
          id: "political_science", 
          name: "Political Science", 
          subtopics: [
            "Power Sharing",
            "Federalism",
            "Gender, Religion and Caste",
            "Political Parties",
            "Outcomes of Democracy"
          ] 
        },
        { 
          id: "economics", 
          name: "Economics", 
          subtopics: [
            "Development",
            "Sectors of the Indian Economy",
            "Money and Credit",
            "Globalisation and the Indian Economy",
            "Consumer Rights"
          ] 
        }
      ]
    }
  },
  computer: {
    name: "Computer",
    classes: {
      7: [
        { 
          id: "programming_language", 
          name: "Programming Language", 
          subtopics: [
            "What is a programming language?",
            "Types: Low-level vs High-level languages",
            "Examples and real-world uses",
            "Simple pseudocode or introduction to programming logic"
          ] 
        },
        { 
          id: "word_editing", 
          name: "Editing Text in Microsoft Word", 
          subtopics: [
            "Creating, saving, and opening documents",
            "Text formatting: fonts, sizes, colors, bold, italics",
            "Paragraph alignment, bullets, numbering",
            "Inserting images, tables, and hyperlinks"
          ] 
        },
        { 
          id: "powerpoint", 
          name: "Microsoft PowerPoint", 
          subtopics: [
            "Creating slides and using slide layouts",
            "Adding and editing text and images",
            "Applying themes and transitions",
            "Running a slideshow"
          ] 
        },
        { 
          id: "excel", 
          name: "Basics of Microsoft Excel", 
          subtopics: [
            "Entering and formatting data in cells",
            "Basic formulas (SUM, AVERAGE)",
            "Creating charts from data",
            "Simple data organization (sorting and filtering)"
          ] 
        },
        { 
          id: "access", 
          name: "Microsoft Access", 
          subtopics: [
            "Understanding databases and tables",
            "Creating a simple database",
            "Adding, editing, and searching records",
            "Basic queries"
          ] 
        }
      ],
      8: [
        { 
          id: "exception_handling", 
          name: "Exception Handling in Python", 
          subtopics: [
            "Introduction to errors and exceptions",
            "Types of errors: Syntax errors, Runtime errors, Logical errors",
            "Built-in exceptions (ZeroDivisionError, ValueError, etc.)",
            "Using try–except block",
            "try–except–else–finally structure",
            "Raising exceptions using raise",
            "Real-life examples of exception handling"
          ] 
        },
        { 
          id: "file_handling", 
          name: "File Handling in Python", 
          subtopics: [
            "Introduction to file handling",
            "Types of files: Text files, Binary files",
            "Opening and closing files (open(), close())",
            "File modes (r, w, a, r+)",
            "Reading from a file (read(), readline(), readlines())",
            "Writing to a file (write(), writelines())",
            "File pointer and cursor movement (seek(), tell())",
            "Practical applications: saving student records, logs, etc."
          ] 
        },
        { 
          id: "stack", 
          name: "Stack (Data Structure)", 
          subtopics: [
            "Introduction to stack",
            "LIFO principle (Last In First Out)",
            "Stack operations: Push, Pop, Peek/Top",
            "Stack implementation using list in Python",
            "Using modules (collections.deque)",
            "Applications of stack: Undo operation, Function call management"
          ] 
        },
        { 
          id: "queue", 
          name: "Queue (Data Structure)", 
          subtopics: [
            "Introduction to queue",
            "FIFO principle (First In First Out)",
            "Queue operations: Enqueue, Dequeue",
            "Types of queues: Simple, Circular, Double-ended, Priority",
            "Implementation in Python using lists and queue module",
            "Applications: Printer task scheduling, Customer service systems"
          ] 
        },
        { 
          id: "sorting", 
          name: "Sorting", 
          subtopics: [
            "Importance of sorting in data organization",
            "Basic sorting techniques: Bubble Sort, Selection Sort, Insertion Sort",
            "Advanced sorting: Merge Sort, Quick Sort",
            "Sorting in Python using built-in methods: sorted() function"
          ] 
        }
      ],
      9: [
        { 
          id: "computer_system", 
          name: "Basics of Computer System", 
          subtopics: [
            "Introduction to computer system",
            "Components of a computer: Input, Output, Storage, CPU",
            "Memory types: Primary (RAM, ROM), Secondary, Cache",
            "Number system basics: binary, decimal, conversion",
            "Difference between hardware, software, and firmware"
          ] 
        },
        { 
          id: "software_types", 
          name: "Types of Software", 
          subtopics: [
            "What is software?",
            "System Software: OS, Utility software",
            "Application Software: General purpose, Specific purpose",
            "Programming Software: Compilers, Interpreters, IDEs",
            "Open-source vs Proprietary software",
            "Freeware, Shareware, and Licensed software"
          ] 
        },
        { 
          id: "operating_system", 
          name: "Operating System", 
          subtopics: [
            "Definition and importance of OS",
            "Functions: Process management, Memory management, File management, Device management",
            "User interface (CLI vs GUI)",
            "Types of operating systems: Batch, Time-sharing, Real-time, Distributed",
            "Examples: Windows, Linux, Android"
          ] 
        },
        { 
          id: "python_intro", 
          name: "Introduction to Python Programming", 
          subtopics: [
            "Introduction to Python & its features",
            "Writing and running a Python program",
            "Variables and data types",
            "Operators (arithmetic, relational, logical)",
            "Input & Output: input(), print()",
            "Control structures: Conditional statements, Loops",
            "Functions (introductory)",
            "Simple Python programs"
          ] 
        },
        { 
          id: "cyber_security", 
          name: "Introduction to Cyber Security", 
          subtopics: [
            "What is cyber security?",
            "Importance of protecting personal data",
            "Types of cyber threats: Malware, Viruses, Phishing, Ransomware",
            "Cyber Safety measures: Strong passwords, Firewalls, Data backup",
            "Safe browsing practices",
            "Cyber ethics and responsible digital behavior",
            "Awareness of cyber laws"
          ] 
        }
      ],
      10: [
        { 
          id: "computer_fundamentals", 
          name: "Computer Fundamentals", 
          subtopics: [
            "Introduction to Computer Systems",
            "Number system basics (binary, decimal, octal, hexadecimal)",
            "Logic gates (AND, OR, NOT)",
            "Computer hardware components",
            "Memory types: primary, secondary, cache, virtual memory",
            "Software overview: System, Application, Utilities",
            "Computer networks: LAN, MAN, WAN, Internet",
            "Data transmission: wired vs wireless",
            "Cloud computing basics",
            "Emerging technologies: AI, IoT, Big Data"
          ] 
        },
        { 
          id: "gimp", 
          name: "Advanced GIMP (GNU Image Manipulation Program)", 
          subtopics: [
            "Introduction to GIMP interface",
            "Layers and layer management",
            "Image editing tools: crop, scale, rotate, flip, perspective",
            "Color tools: brightness/contrast, hue/saturation, levels, curves",
            "Selection tools: free select, fuzzy select, paths",
            "Using filters and effects",
            "Working with text in GIMP",
            "Creating banners, posters, and digital artwork",
            "Exporting images in different formats"
          ] 
        },
        { 
          id: "html_tables", 
          name: "Tables (HTML)", 
          subtopics: [
            "Introduction to HTML tables",
            "Table structure: <table>, <tr>, <td>, <th>",
            "Attributes: border, cellpadding, cellspacing, align, width, height",
            "Rowspan and Colspan for merging cells",
            "Adding captions to tables",
            "Nested tables",
            "Styling tables with CSS"
          ] 
        },
        { 
          id: "html_forms", 
          name: "Forms (HTML)", 
          subtopics: [
            "Introduction to forms and their purpose",
            "Form elements: Textbox, Password, Radio buttons, Checkboxes",
            "Dropdown menus (<select>)",
            "Text area",
            "Buttons (submit, reset)",
            "Attributes of form elements: name, value, placeholder, required",
            "Form validation (basic – HTML5 validation attributes)",
            "Form action and method (GET, POST)",
            "Simple login/registration forms"
          ] 
        },
        { 
          id: "dhtml_css", 
          name: "DHTML & CSS", 
          subtopics: [
            "DHTML (Dynamic HTML): HTML + CSS + JavaScript",
            "Differences between HTML and DHTML",
            "Role of JavaScript in making pages interactive",
            "Examples: rollover images, dynamic content updates",
            "CSS (Cascading Style Sheets): Inline, Internal, External",
            "CSS syntax (selectors, properties, values)",
            "Styling text, backgrounds and borders",
            "Box model (margin, border, padding, content)",
            "Positioning (static, relative, absolute, fixed)",
            "Pseudo classes (:hover, :active, :first-child)",
            "CSS for tables and forms",
            "Responsive design basics (media queries intro)"
          ] 
        }
      ]
    }
  }
};

export default syllabus;