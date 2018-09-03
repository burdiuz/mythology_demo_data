((data) => {
  window.genealogical_tree = data;
})({
  label: 'It begins with Chaos ("Nothingness")...',
  alt: 'Khaos',
  shortlabel: 'Chaos',
  rank: '2',
  desc:
    'The protogenos (primeval god) of all. His name means "emptiness" -- the void from which creation and order emerge.',
  children: [
    {
      label: 'Ananke (Inevitability)',
      shortlabel: 'Ananke',
      rank: '0',
      parents: 'None',
      desc:
        'The protogenos (primeval goddess) of inevitability, compulsion and necessity.  From the time she first appeared, Ananke was entwined in the serpentine coils of her mate, the time-god Khronos. Together they surrounded the primal egg of solid matter in their constricting coils and split it into its constituent parts (earth, heaven and sea) and so brought about the creation of the ordered universe',
    },
    {
      label: 'Erebus (Darkness)',
      shortlabel: 'Erebus',
      rank: '0',
      alt: 'Erebos',
      parents: 'Khaos alone',
      desc:
        'The Protogenos (primeval god) of the darkness of night and the netherworld. He was the father of Light and Day by Nyx, the goddess Night',
      children: [
        {
          label: 'Aether ("Upper Air")',
          shortlabel: 'Aether',
          alt: 'Aither',
          rank: '1',
          parents: 'Erebus, Nyx',
          desc:
            'Protogenos of light, the bright upper air (the shining blue of the sky).  He was the Brother of Hemera (Day), with whom he gave birth to Thalassa, the sea',
          children: [
            {
              label: 'Thalassa',
              rank: '0',
              parents: 'Aether, Hemera',
              desc:
                'The Protogenos (primeval goddess) of the sea, the female counterpart to Pontos',
            },
          ],
        },
        {
          label: 'Charon ("fierce, bright-eyed")',
          shortlabel: 'Charon',
          i: 'kharon',
          alt: 'Kharon',
          rank: '0',
          parents: 'Erebos, Nyx',
          desc:
            'A daemon of the underworld who ferried the dead across the river Acheron',
        },
        {
          label: 'Hemera (Day)',
          shortlabel: 'Hemera',
          alt: 'Hemere',
          rank: '1',
          parents: 'Erebus, Nyx',
          desc:
            'The Protogenos (Primeval goddess) of day. She was the sister of Aether (Light), with whom she gave birth to Thalassa, the sea',
          children: [
            {
              label: 'Thalassa',
              rank: '0',
              parents: 'Aether, Hemera',
              desc:
                'The Protogenos (primeval goddess) of the sea, the female counterpart to Pontos',
            },
          ],
        },
        {
          label: 'The Keres',
          rank: '0',
          parents: 'Erebos, Nyx',
          desc:
            'Female spirits of death and doom who also act as avenging spirits',
        },
      ],
    },
    {
      label: 'Eros (Procreation)',
      shortlabel: 'Eros',
      i: 'eros',
      rank: '0',
      parents: 'None',
      desc:
        'The protogenos (primeval deity) of sexual desire and procreation. He was one of the first beings to emerge at the creation of the universe',
    },
    {
      label: 'Gaia (Earth)',
      i: 'gaia',
      alt: 'Gaea',
      rank: '1',
      parents: 'None',
      desc:
        'The Protogenos (primeval goddess) of the earth, mother of gods and men, said to have been born of Chaos, along with Eros. She instigated the castration of her husband, Uranus, by their son, Cronus, thus separating earth and sky. She also gave birth to Pontos, and rescued Zeus from being swallowed by Cronus',
      children: [
        {
          label: 'Aigaios',
          rank: '0',
          parents: 'Pontos, Gaia',
          desc:
            "god of the stormy seas and an ally of the Titanes. The Aegean Sea was named after him (Pontos Aigaios).  When he was vanquished by Zeus, Aigaios' son Briareos appears to have assumed the role of god of Aegean storms.",
        },
        {
          label: 'Daktyloi-Koretes',
          rank: '0',
          parents: 'Gaia alone',
          desc:
            'The Kouretes-Daktyloi were three, five, or nine rustic Daimones (Spirits) who guarded the infant god Zeus on Mount Ida in Krete.   The five Daktyloi (Kouretes) were said to have had an equal number of sisters, the Hekaterides, who together represented the ten fingers of the hands - daktyloi being the Greek word for "fingers". ',
        },
        {
          label: 'The Dryads',
          rank: '0',
          parents: 'Zeus, Gaia',
          desc:
            'Female spirits of nature (nymphs), who preside over the groves and forests',
        },
        {
          label: 'The Erinyes',
          i: 'erinyes',
          rank: '0',
          parents: 'Ouranos, Gaia',
          desc:
            'Three chthonian goddesses who avenged crimes against the natural and moral order. They were particularly concerned with cases of homicide, unfilial conduct, crimes against the gods and perjury. Their names were Tisiphone, Megaira, and Alekto',
        },
        {
          label: 'Eurybia',
          rank: '0',
          parents: 'Pontos, Gaia',
          desc:
            'The ancient goddess of power over the sea. She was the wife of the star Titan Krios.',
          children: [
            {
              label: 'Astraeus',
              alt: 'Astraios',
              rank: '0',
              parents: 'Krios, Eurybia',
              desc:
                'The Titan-god of the stars, astronomy and astrology. He was the father of the Winds and the Stars by the dawn-goddess Eos.',
              children: [
                {
                  label: 'Boreas',
                  i: 'boreas',
                  rank: '0',
                  parents: 'Astraeus, Eos',
                  desc:
                    'The purple-haired, winged god of the North-Wind. He was also the god of winter who carried snow on his chill breath.',
                },
                {
                  label: 'Eurus',
                  alt: 'Euros',
                  rank: '0',
                  parents: 'Astraeus, Eos',
                  desc:
                    'The god of the East Wind (or more specifically the South-East Wind).',
                },
                {
                  label: 'Notus',
                  alt: 'Notos',
                  rank: '0',
                  parents: 'Astraeus, Eos',
                  desc: 'The god of the South Wind.',
                },
                {
                  label: 'Zephyrus',
                  i: 'zephyros',
                  alt: 'Zephyros',
                  rank: '0',
                  parents: 'Astraeus, Eos',
                  desc:
                    'The god of the gentle West-Wind and the season of spring.',
                },
                {
                  label: 'Astraea',
                  alt: 'Astraia',
                  rank: '0',
                  desc:
                    'The younger Titan-goddess of justice. Astraea left the earth at the end of the Golden Age and entered the heavens as the constellation Virgo.',
                },
                {
                  label: 'Hesperus',
                  alt: 'Hesperos',
                  rank: '0',
                  parents: 'Aestraeus, Eos',
                  desc: 'The god of the evening star (Venus).',
                },
                {
                  label: 'Eosphorus',
                  i: 'eosphoros',
                  alt: 'Eosphoros',
                  rank: '0',
                  parents: 'Aestraeus, Eos',
                  desc:
                    'The god of the morning star who heralded the arrival of dawn.',
                },
              ],
            },
            {
              label: 'Pallas',
              rank: '0',
              desc:
                'The Titan-god of warcraft. He was the father of Victory, Force, Power and Rivalry.',
              children: [
                {
                  label: 'Bia',
                  rank: '0',
                  parents: 'Pallas, Styx',
                  desc:
                    'The goddess of force. She sided with Zeus in the Titan-War and became one of his chief attendants.',
                },
                {
                  label: 'Nike',
                  i: 'nike',
                  parents: 'Pallas, Styx',
                  rank: '0',
                  desc:
                    'The goddess of victory who sided with Zeus in the Titan-War and became his constant companion.',
                },
                {
                  label: 'Cratos',
                  rank: '0',
                  parents: 'Pallas, Styx',
                  desc: 'The personification of strength and power.',
                },
                {
                  label: 'Zelus',
                  alt: 'Zelos',
                  parents: 'Pallas, Styx',
                  rank: '0',
                  desc:
                    'The personification of rivalry. He and his three siblings were daemon attendants of the god Zeus.',
                },
              ],
            },
            {
              label: 'Perses',
              shortlabel: 'Perses',
              parents: 'Helios, Perse',
              rank: '0',
              desc: 'The Titan god of destruction and laying waste.',
              children: [
                {
                  label: 'Hecate',
                  i: 'hekate',
                  alt: 'Hekate',
                  parents: 'Perses, Asteria',
                  rank: '0',
                  desc:
                    'The Titan goddess of witchcraft, ghosts and necromancy. She assisted Demeter in her search for Persephone, and became her minister in Hades.',
                },
              ],
            },
          ],
        },
        {
          label: 'The Hamadryads',
          rank: '0',
          parents: 'Zeus, Gaia',
          desc: 'Tree nymphs who lived and died with the tree they inhabited',
        },
        {
          label: 'Heka-Gigantes',
          i: 'heka-gigantes',
          rank: '0',
          parents: 'Ouranos, Gaia',
          desc:
            'A tribe of giants born of Gaia impregnated with the blood of the castrated Ouranos. At the instigation of their mother they made war on the gods but were destroyed in the ensuing battle with the assistance of Herakles.',
          children: [
            {
              label: 'Agasthenes',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc: 'One of the Gigantes',
            },
            {
              label: 'Agrius',
              alt: 'Agrios',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'One of the Gigantes. He was clubbed to death by the Moirae in the Giant-War.',
            },
            {
              label: 'Aigaion',
              alt: 'Aegaeon',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'A Gigante slain by Artemis with her arrows in the war against the gods',
            },
            {
              label: 'Alcyoneus',
              i: 'alkyoneus',
              alt: 'Alkyoneus',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'The strongest of the Gigantes. He was immortal but only within the boundaries of his homeland Pallene. In the Giant War Heracles shot him and dragged him away from his home to die',
            },
            {
              label: 'Aristaios',
              alt: 'Aristaeus',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'The only Gigante to survive the war against the gods. His mother Gaia (the Earth) hid him away in the shape of a dung beetle',
            },
            {
              label: 'Astraios',
              alt: 'Astraeus',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'One of the Gigantes. He was perhaps the same as the Titan of the same name',
            },
            {
              label: 'Clytius',
              alt: 'Klytios',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'One of the Gigantes. He was slain by Hecate with her flaming torches in the Giant-War.',
            },
            {
              label: 'Damysos',
              alt: 'Damysus',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'A swiftest of the Gigantes who was slain in the war against the gods. Kheiron exumed his body and extracting the swift "astragale" from his foot placed it in the heel of the hero Akhilleus',
            },
            {
              label: 'Emphytos',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc: 'One of the Gigantes',
            },
            {
              label: 'Enceladus',
              alt: 'Enkelados',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'One of the Gigantes who was crushed by Athena beneath the island of Sicily during the giant-war. His restless turnings caused Mount Etna to spit fire.',
            },
            {
              label: 'Ephialates',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                "A Giant slain by Apollon and Herakles in the war against the gods. Each pierced one of the Gigante's eyes with their arrows.",
            },
            {
              label: 'Euboios',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc: 'One of the Gigantes.',
            },
            {
              label: 'Euryalos',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc: 'One of the Gigantes.',
            },
            {
              label: 'Eurymedon',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc: 'One of the Gigantes.',
            },
            {
              label: 'Eurytus',
              alt: 'Eurytos',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc: 'A Gigante who was slain by Dionysus in the giant-war.',
            },
            {
              label: 'Gration',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'A Gigante who was slain by the goddess Artemis in the giant-war.',
            },
            {
              label: 'Hippolytus',
              alt: 'Hippolytos',
              rank: '0',
              parents: 'Ouranos, Gaiai',
              desc: 'A Gigante slain by Hermes in the giant war.',
            },
            {
              label: 'Iapetos',
              alt: 'Iapetus',
              rank: '0',
              parents: 'Ouranos, Gaiai',
              desc:
                'One of the Gigantes. He was probably the same as the Titan of the same name.',
            },
            {
              label: 'Khthonios',
              rank: '0',
              parents: 'Ouranos, Gaiai',
              desc: 'One of the Gigantes',
            },
            {
              label: 'Klytios',
              alt: 'Clytius',
              rank: '0',
              parents: 'Ouranos, Gaiai',
              desc:
                'A Gigante immolated by the torches of Hekate in the war against the gods',
            },
            {
              label: 'Koios',
              alt: 'Coeus',
              rank: '0',
              parents: 'Ouranos, Gaiai',
              desc:
                'One of the Gigantes. He was probably the same as the Titan of the same name',
            },
            {
              label: 'Leon',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'A Gigante who battled Herakles in the war against the gods. The hero made a protective cloak from his leonine skin',
            },
            {
              label: 'Mimas',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'One of the Gigantes who slain in the giant-war by Hephaestus with barrage of red-hot metal',
            },
            {
              label: 'Mimon',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'A Gigante despatched by Ares in the war against the gods. He was perhaps the same as Mimas',
            },
            {
              label: 'Molios',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'The Gigante opponent of the sun-god Helios who was slain after fierce fighting on the Isle of Aiaia. From his blood sprung the magical moly plant',
            },
            {
              label: 'Mylinos',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'One of the Gigantes who was slain by Zeus on the island of Krete',
            },
            {
              label: 'Olympos',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'The Gigante foster-father of Zeus, who urged his brethren to rise up against the gods',
            },
            {
              label: 'Otos',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'One of the Gigantes. He was probably the same as the Aload giant of the same name',
            },
            {
              label: 'Ouranion',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc: 'One of the Gigantes',
            },
            {
              label: 'Pallas',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'A Gigante slain by Athena in the war against the gods. She stripped off his goatish skin and made of it a shield for the battle (the aigis). He was perhaps the same as the Titan of the same name.',
            },
            {
              label: 'Pankrates',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc: 'One of the Gigantes',
            },
            {
              label: 'Peloreus',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'A many-armed Gigante who fought the gods wielding Mount Pelion',
            },
            {
              label: 'Phoitios',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc: 'A Gigante slain by Hera in the war against the gods',
            },
            {
              label: 'Polybotes',
              i: 'polybotes',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'A Gigante crushed beneath the island of Nisyrus by the god Poseidon in the giant war.',
            },
            {
              label: 'Porphyrion',
              i: 'porphyrion',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'A king of the giants who was slain by Zeus and Heracles in the giant war when he attempted to rape Hera',
            },
            {
              label: 'Rhoikos',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc: 'One of the Gigantes',
            },
            {
              label: 'Sykeus',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'A Gigante pursued by Zeus to Kilikia where Gaia (the Earth) transformed him into a fig-tree to escape the god',
            },
            {
              label: 'Theodamas',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc: 'One of the Gigantes',
            },
            {
              label: 'Theomises',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc: 'One of the Gigantes',
            },
            {
              label: 'Thoon',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'A Gigante clubbed to death in the war against the gods by the Moirai (Fates) with maces of bronze',
            },
            {
              label: 'Typhoeus',
              i: 'typhoeus',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc: 'A Gigante slain by Dionysos in the war against the gods',
            },
          ],
        },
        {
          label: 'Hekatonkheires',
          rank: '0',
          parents: 'Ouranos, Gaia',
          desc:
            'Gyes, Briareus, and Cottus, the hundred-handed, fifty-headed Giants, gods of violent storms and hurricanes.  Their brothers are the Kyklopes',
        },
        {
          label: 'Keto',
          alt: 'Ceto',
          rank: '0',
          parents: 'Pontos, Gaia',
          desc:
            'An ancient Sea-Goddess. She personified the dangers of the sea. Most of the monsters of mythology were descended from her.',
          children: [
            {
              label: 'Echidna',
              alt: 'Ekhidna',
              rank: '0',
              parents: 'Keto alone.',
              desc:
                'A deadly she-dragon with the upper body of a beautiful nymph, and the tail of a serpent in place of legs. The immortal Echidna married the hundred-headed giant Typhon and spawned a brood of terrible monsters.',
            },
            {
              label: 'The Gorgons',
              rank: '0',
              parents: 'Phorkys, Keto',
              desc:
                'A monstrous feminine creature whose appearance would turn anyone who laid eyes upon it to stone. Later there were three of them: Euryale ("far-roaming"), Sthenno ("forceful"), and Medusa ("ruler"), the only one of them who was mortal. ',
              children: [
                {
                  label: 'Euryale',
                  rank: '0',
                  desc: 'One of the two immortal Gorgons.',
                },
                {
                  label: 'Medusa',
                  i: 'medousa',
                  alt: 'Medousa',
                  rank: '0',
                  desc:
                    'A serpent-haired Gorgon who was slain by the hero Perseus. When she was beheaded her two children by Poseidon were born from her bloody neck.',
                  children: [
                    {
                      label: 'Pegasus',
                      i: 'pegasos',
                      alt: 'Pegasos',
                      rank: '0',
                      parents: 'Poseidon, Medusa',
                      desc:
                        'A winged horse which sprung from the neck of Medusa after her decapitation. He was tamed by the hero Bellerophon who rode him into battle against the Amazons and the monster Chimera.',
                    },
                    {
                      label: 'Chrysaor',
                      alt: 'Khrysaor',
                      rank: '0',
                      parents: 'Poseidon, Medusa',
                      desc: 'A giant, "Golden Falchion".',
                      children: [
                        {
                          label: 'Echidna',
                          alt: 'Ekhidna',
                          rank: '0',
                          parents: 'Keto alone.',
                          desc:
                            'A deadly she-dragon with the upper body of a beautiful nymph, and the tail of a serpent in place of legs. The immortal Echidna married the hundred-headed giant Typhon and spawned a brood of terrible monsters.',
                        },
                      ],
                    },
                  ],
                },
                {
                  label: 'Sthenno',
                  rank: '0',
                },
              ],
            },
            {
              label: 'Graeae',
              i: 'graeae',
              rank: '0',
              desc:
                'The three "old women" or "gray ones," they were gray-haired from birth and have only one eye and one tooth, which they share among them. They are Enyo ("horror"), Deino ("dread") and Pemphredo ("alarm")',
              children: [
                {
                  label: 'Deino',
                  rank: '0',
                  parents: 'Phorkys, Keto',
                  desc: 'One of the old hag Graeae.',
                },
                {
                  label: 'Enyo',
                  rank: '0',
                  parents: 'Phorkys, Keto',
                  desc: 'The goddess of war, a battlefield companion of Ares.',
                },
                {
                  label: 'Pemphredo',
                  rank: '0',
                  parents: 'Phorkys, Keto',
                  desc: 'One of old hag Graeae.',
                },
              ],
            },
            {
              label: 'Thoosa',
              rank: '0',
              parents: 'Porchys, Keto',
              desc:
                'A sea nymph loved by the god Poseidon. She was the mother of the Cyclops Polyphemus.',
              children: [
                {
                  label: 'Polyphemos',
                  i: 'polyphemos',
                  alt: 'Polyphemus',
                  rank: '0',
                  parents: 'Poseidon, Thoosa',
                  desc:
                    'A man-eating Cyclops who was blinded by the hero Odysseus',
                },
              ],
            },
          ],
        },
        {
          label: 'Kyklopes',
          alt: 'Cyclopes',
          rank: '0',
          parents: 'Ouranos, Gaia',
          desc:
            'The three orb-eyed giant gods of thunder and lightning.  Their names were Arges, Brontes, and Steropes.',
        },
        {
          label: 'The Meliai',
          rank: '0',
          parents: 'Ouranus, Gaia',
          desc:
            'The Meliai were nymphs of the mountain Ash-Tree, from whose wood the first spears were crafted. They were perhaps also Nymphai of bees and honey.',
        },
        {
          label: 'Nereus',
          i: 'nereus',
          rank: '0',
          parents: 'Pontos, Gaia',
          desc:
            'An ancient fish-tailed sea-god known as the Old Man of the Sea. He was the father of the fifty Nereides',
          children: [
            {
              label: 'The Nereides',
              i: 'nereides',
              rank: '0',
              parents: 'Nereus, Doris',
              desc:
                'The fifty daughters who dwell in the Mediterranean Sea, these beautiful women were always friendly and helpful towards sailors fighting perilous storms. They are believed to be able to prophesize. They belong to the retinue of Poseidon',
            },
          ],
        },
        {
          label: 'The Nesoi',
          rank: '0',
          parents: 'Gaia alone',
          desc:
            'Goddesses of islands. Each island was said to have its own personification. They were numbered amongst the ancient elemental gods',
        },
        {
          label: 'The Oreads',
          rank: '0',
          parents: 'Zeus, Gaia',
          desc:
            'The Greek nymphs of mountains and grottoes (from the Greek oros "mountain"). They belong to the retinue of Aphrodite',
        },
        {
          label: 'Ouranos (Sky)',
          rank: '0',
          desc:
            'The Protogenos (primeval god) of the dome of the sky. He was the first king of the cosmos who was castrated and deposed by his son Cronus.',
          children: [
            {
              label: 'Aphrodite',
              i: 'aphrodite',
              rank: '0',
              parents: 'Ouranos alone',
              desc:
                'The goddess of love, beauty and intercourse. Aphrodite was one of the twelve great Olympian gods. She was born of the sea foam generated from the castrated genitals of the sky-god Ouranos.  She is said by Homer to be the daughter of Zeus and Dione.',
              children: [
                {
                  label: 'Deimos',
                  i: 'deimos',
                  alt: 'Deimus',
                  rank: '0',
                  parents: 'Ares, Aphrodite',
                  desc: 'The god of terror and an attendant of Ares.',
                },
                {
                  label: 'The Erotes',
                  rank: '0',
                  parents: 'Ares, Aphrodite',
                  desc:
                    'Gods and goddesses of the various aspects of erotic love.',
                  children: [
                    {
                      label: 'Anteros',
                      i: 'anteros',
                      rank: '0',
                      parents: 'Ares, Aphrodite',
                      desc: 'The god of returned or mutual love. ',
                    },
                    {
                      label: 'Harmonia',
                      i: 'harmonia',
                      rank: '0',
                      parents: 'Ares, Aphrodite',
                      desc:
                        'The goddess of harmony and unity. She was married to the mortal Cadmus in a marriage ceremony attended by all the gods. After ruling Thebes for many years the two were transported to Elysium and a life of bliss.',
                    },
                    {
                      label: 'Hedylogos',
                      i: 'hedylogos',
                      alt: 'Hedylogus',
                      rank: '0',
                      parents: 'Ares, Aphrodite',
                      desc:
                        'The god of sweet-talk, one of the winged Erotes (Love-Gods).',
                    },
                    {
                      label: 'Himeros',
                      i: 'himeros',
                      alt: 'Himerus',
                      rank: '0',
                      parents: 'Ares, Aphrodite',
                      desc:
                        'The god of sexual desire, one of the winged Erotes (Love Gods). He was present at the birth of Aphrodite and became one of her constant companions.',
                    },
                    {
                      label: 'Photos',
                      i: 'photos',
                      rank: '0',
                      parents: 'Ares, Aphrodite',
                    },
                  ],
                },
                {
                  label: 'Hermaphroditos',
                  i: 'hermaphroditos',
                  alt: 'Hermaphroditus',
                  rank: '0',
                  parents: 'Hermes, Aphrodite',
                  desc:
                    'Loved by the nymph Salmacis, she prayed they might never be separated. The gods took her request literally and merged their forms into one - part male, part female. He was numbered amongst the winged Erotes.',
                },
                {
                  label: 'Phobos',
                  i: 'phobos',
                  alt: 'Phobus',
                  rank: '0',
                  parents: 'Ares, Aphrodite',
                  desc:
                    'The daemon personification of fear. He was a son and battlefield companion of the god Ares.',
                },
              ],
            },
            {
              label: 'The Erinyes',
              i: 'erinyes',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'Three chthonian goddesses who avenged crimes against the natural and moral order. They were particularly concerned with cases of homicide, unfilial conduct, crimes against the gods and perjury. Their names were Tisiphone, Megaira, and Alekto',
            },
            {
              label: 'Heka-Gigantes',
              i: 'heka-gigantes',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'A tribe of giants born of Gaia impregnated with the blood of the castrated Ouranos. At the instigation of their mother they made war on the gods but were destroyed in the ensuing battle with the assistance of Herakles.',
              children: [
                {
                  label: 'Agasthenes',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc: 'One of the Gigantes',
                },
                {
                  label: 'Agrius',
                  alt: 'Agrios',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'One of the Gigantes. He was clubbed to death by the Moirae in the Giant-War.',
                },
                {
                  label: 'Aigaion',
                  alt: 'Aegaeon',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'A Gigante slain by Artemis with her arrows in the war against the gods',
                },
                {
                  label: 'Alcyoneus',
                  i: 'alkyoneus',
                  alt: 'Alkyoneus',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'The strongest of the Gigantes. He was immortal but only within the boundaries of his homeland Pallene. In the Giant War Heracles shot him and dragged him away from his home to die',
                },
                {
                  label: 'Aristaios',
                  alt: 'Aristaeus',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'The only Gigante to survive the war against the gods. His mother Gaia (the Earth) hid him away in the shape of a dung beetle',
                },
                {
                  label: 'Astraios',
                  alt: 'Astraeus',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'One of the Gigantes. He was perhaps the same as the Titan of the same name',
                },
                {
                  label: 'Clytius',
                  alt: 'Klytios',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'One of the Gigantes. He was slain by Hecate with her flaming torches in the Giant-War.',
                },
                {
                  label: 'Damysos',
                  alt: 'Damysus',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'A swiftest of the Gigantes who was slain in the war against the gods. Kheiron exumed his body and extracting the swift "astragale" from his foot placed it in the heel of the hero Akhilleus',
                },
                {
                  label: 'Emphytos',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc: 'One of the Gigantes',
                },
                {
                  label: 'Enceladus',
                  alt: 'Enkelados',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'One of the Gigantes who was crushed by Athena beneath the island of Sicily during the giant-war. His restless turnings caused Mount Etna to spit fire.',
                },
                {
                  label: 'Ephialates',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc:
                    "A Giant slain by Apollon and Herakles in the war against the gods. Each pierced one of the Gigante's eyes with their arrows.",
                },
                {
                  label: 'Euboios',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc: 'One of the Gigantes.',
                },
                {
                  label: 'Euryalos',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc: 'One of the Gigantes.',
                },
                {
                  label: 'Eurymedon',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc: 'One of the Gigantes.',
                },
                {
                  label: 'Eurytus',
                  alt: 'Eurytos',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc: 'A Gigante who was slain by Dionysus in the giant-war.',
                },
                {
                  label: 'Gration',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'A Gigante who was slain by the goddess Artemis in the giant-war.',
                },
                {
                  label: 'Hippolytus',
                  alt: 'Hippolytos',
                  rank: '0',
                  parents: 'Ouranos, Gaiai',
                  desc: 'A Gigante slain by Hermes in the giant war.',
                },
                {
                  label: 'Iapetos',
                  alt: 'Iapetus',
                  rank: '0',
                  parents: 'Ouranos, Gaiai',
                  desc:
                    'One of the Gigantes. He was probably the same as the Titan of the same name.',
                },
                {
                  label: 'Khthonios',
                  rank: '0',
                  parents: 'Ouranos, Gaiai',
                  desc: 'One of the Gigantes',
                },
                {
                  label: 'Klytios',
                  alt: 'Clytius',
                  rank: '0',
                  parents: 'Ouranos, Gaiai',
                  desc:
                    'A Gigante immolated by the torches of Hekate in the war against the gods',
                },
                {
                  label: 'Koios',
                  alt: 'Coeus',
                  rank: '0',
                  parents: 'Ouranos, Gaiai',
                  desc:
                    'One of the Gigantes. He was probably the same as the Titan of the same name',
                },
                {
                  label: 'Leon',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'A Gigante who battled Herakles in the war against the gods. The hero made a protective cloak from his leonine skin',
                },
                {
                  label: 'Mimas',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'One of the Gigantes who slain in the giant-war by Hephaestus with barrage of red-hot metal',
                },
                {
                  label: 'Mimon',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'A Gigante despatched by Ares in the war against the gods. He was perhaps the same as Mimas',
                },
                {
                  label: 'Molios',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'The Gigante opponent of the sun-god Helios who was slain after fierce fighting on the Isle of Aiaia. From his blood sprung the magical moly plant',
                },
                {
                  label: 'Mylinos',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'One of the Gigantes who was slain by Zeus on the island of Krete',
                },
                {
                  label: 'Olympos',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'The Gigante foster-father of Zeus, who urged his brethren to rise up against the gods',
                },
                {
                  label: 'Otos',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'One of the Gigantes. He was probably the same as the Aload giant of the same name',
                },
                {
                  label: 'Ouranion',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc: 'One of the Gigantes',
                },
                {
                  label: 'Pallas',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'A Gigante slain by Athena in the war against the gods. She stripped off his goatish skin and made of it a shield for the battle (the aigis). He was perhaps the same as the Titan of the same name.',
                },
                {
                  label: 'Pankrates',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc: 'One of the Gigantes',
                },
                {
                  label: 'Peloreus',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'A many-armed Gigante who fought the gods wielding Mount Pelion',
                },
                {
                  label: 'Phoitios',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc: 'A Gigante slain by Hera in the war against the gods',
                },
                {
                  label: 'Polybotes',
                  i: 'polybotes',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'A Gigante crushed beneath the island of Nisyrus by the god Poseidon in the giant war.',
                },
                {
                  label: 'Porphyrion',
                  i: 'porphyrion',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'A king of the giants who was slain by Zeus and Heracles in the giant war when he attempted to rape Hera',
                },
                {
                  label: 'Rhoikos',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc: 'One of the Gigantes',
                },
                {
                  label: 'Sykeus',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'A Gigante pursued by Zeus to Kilikia where Gaia (the Earth) transformed him into a fig-tree to escape the god',
                },
                {
                  label: 'Theodamas',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc: 'One of the Gigantes',
                },
                {
                  label: 'Theomises',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc: 'One of the Gigantes',
                },
                {
                  label: 'Thoon',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'A Gigante clubbed to death in the war against the gods by the Moirai (Fates) with maces of bronze',
                },
                {
                  label: 'Typhoeus',
                  i: 'typhoeus',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'A Gigante slain by Dionysos in the war against the gods',
                },
              ],
            },
            {
              label: 'Hekatonkheires',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'Gyes, Briareus, and Cottus, the hundred-handed, fifty-headed Giants, gods of violent storms and hurricanes.  Their brothers are the Kyklopes',
            },
            {
              label: 'Kyklopes',
              alt: 'Cyclopes',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'The three orb-eyed giant gods of thunder and lightning.  Their names were Arges, Brontes, and Steropes.',
            },
            {
              label: 'The Meliai',
              rank: '0',
              parents: 'Ouranus, Gaia',
              desc:
                'The Meliai were nymphs of the mountain Ash-Tree, from whose wood the first spears were crafted. They were perhaps also Nymphai of bees and honey.',
            },
            {
              label: 'The Titans',
              i: 'titans',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'The Titanes were six ancient gods of time.  When Ouranos buried their six storm-giant brothers within the earth, Gaia persuaded five of the Titanes (all except Okeanos) to act against him. As the Sky descended to lie upon the Earth, four of the brothers seized him, and strained to hold him firm, while the fifth, Kronos, castrated him with an adamantine sickle,  The sons of four of the elder Titanes - Iapetos, Krios, Koios and Hyperion - were also known as Titan-gods',
              children: [
                {
                  label: 'Cronus',
                  i: 'kronos',
                  alt: 'Kronos',
                  rank: '1',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'The King of the Titans and the elder Titan-god of time. He castrated and deposed his father Uranus but was in turn was defeated by his own son Zeus after a ten year war. Cronus was cast into Tartarus but at the end of the Age of Heroes Zeus freed and made him king of Elysium',
                  children: [
                    {
                      label: 'Chiron',
                      i: 'chiron',
                      alt: 'Kheiron',
                      rank: '0',
                      parents: 'Cronus, Philyra',
                      desc:
                        'An immortal Centaur son of Cronus. He was famed for his wisdom and dwelt in a cave on Mt Pelion where he fostered and trained many of the great heroes.',
                      children: [
                        {
                          label: 'Ocyrhoe',
                          alt: 'Okyrhoe',
                          rank: '0',
                          parents: 'Chiron, Chariclo',
                          desc:
                            'A Naiad nymph of the island of Samos who was pursued by the god Apollon. When she attempted to flee the island by ship he turned the vessel to stone and transformed the pilot into a porpoise.',
                        },
                      ],
                    },
                    {
                      label: 'Demeter',
                      i: 'demeter',
                      rank: '0',
                      parents: 'Cronus, Rheia',
                      desc:
                        'Goddess of agriculture and the fertile earth. She was one of the twelve great Olympian gods. Her Mysteries promised mankind passage to a blessed afterlife.',
                      children: [
                        {
                          label: 'Persephone',
                          i: 'persephone',
                          rank: '0',
                          parents: 'Zeus, Demeter',
                          desc:
                            'The Queen of the underworld. She was a spring-time goddess, the only daughter of Demeter, who was abducted to the underworld by Hades. Her mother brought famineto the world until Zeus agreed to let her return for part of the year.',
                          children: [
                            {
                              label: 'Zagreus',
                              alt: 'Zagreos',
                              rank: '0',
                              parents: 'Zeus, Persephone',
                              desc:
                                'The first-born son of Zeus who the god seated on the throne of heaven armed with thunderbolts when he was but a babe. The Titan gods stole into Olympus, distracted the child, and dismembered him with their bloody knives. Athena recovered his heart, and the god was reborn through Semele as Dionysus.',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      label: 'Hades',
                      i: 'hades',
                      alt: 'Haides',
                      rank: '2',
                      parents: 'Cronus, Rheia',
                      desc:
                        'One of the three mighty sons of Cronus. When Zeus, Hades and Poseidon drew lots for the division of the world, Haides received the subterranean lands of the dead.',
                    },
                    {
                      label: 'Hera',
                      i: 'hera',
                      rank: '2',
                      parents: 'Cronus, Rheia',
                      desc:
                        'The Queen of the gods, and goddess of the heavens, women and marriage. She was one of the twelve great Olympian gods.',
                      children: [
                        {
                          label: 'Hephaestus',
                          i: 'hephaistos',
                          alt: 'Hephaistos',
                          rank: '0',
                          parents: 'Zeus, Hera',
                          desc:
                            'The god of fire, volcanism, smiths and craftsmen. He was one of the twelve great Olympian gods.',
                        },
                        {
                          label: 'Hebe',
                          i: 'hebe',
                          rank: '0',
                          parents: 'Zeus, Hera',
                          desc:
                            'The goddess of youth and the wife of Herakles after his ascension to Olympus.',
                        },
                        {
                          label: 'Ares',
                          i: 'ares',
                          rank: '0',
                          parents: 'Zeus, Hera',
                          desc:
                            'The god of war and one of the twelve great Olympian gods.',
                          children: [
                            {
                              label: 'Deimos',
                              i: 'deimos',
                              alt: 'Deimus',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                              desc:
                                'The god of terror and an attendant of Ares.',
                            },
                            {
                              label: 'The Erotes',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                              desc:
                                'Gods and goddesses of the various aspects of erotic love.',
                              children: [
                                {
                                  label: 'Anteros',
                                  i: 'anteros',
                                  rank: '0',
                                  parents: 'Ares, Aphrodite',
                                  desc: 'The god of returned or mutual love. ',
                                },
                                {
                                  label: 'Harmonia',
                                  i: 'harmonia',
                                  rank: '0',
                                  parents: 'Ares, Aphrodite',
                                  desc:
                                    'The goddess of harmony and unity. She was married to the mortal Cadmus in a marriage ceremony attended by all the gods. After ruling Thebes for many years the two were transported to Elysium and a life of bliss.',
                                },
                                {
                                  label: 'Hedylogos',
                                  i: 'hedylogos',
                                  alt: 'Hedylogus',
                                  rank: '0',
                                  parents: 'Ares, Aphrodite',
                                  desc:
                                    'The god of sweet-talk, one of the winged Erotes (Love-Gods).',
                                },
                                {
                                  label: 'Himeros',
                                  i: 'himeros',
                                  alt: 'Himerus',
                                  rank: '0',
                                  parents: 'Ares, Aphrodite',
                                  desc:
                                    'The god of sexual desire, one of the winged Erotes (Love Gods). He was present at the birth of Aphrodite and became one of her constant companions.',
                                },
                                {
                                  label: 'Photos',
                                  i: 'photos',
                                  rank: '0',
                                  parents: 'Ares, Aphrodite',
                                },
                              ],
                            },
                            {
                              label: 'Hermaphroditos',
                              i: 'hermaphroditos',
                              alt: 'Hermaphroditus',
                              rank: '0',
                              parents: 'Hermes, Aphrodite',
                              desc:
                                'Loved by the nymph Salmacis, she prayed they might never be separated. The gods took her request literally and merged their forms into one - part male, part female. He was numbered amongst the winged Erotes.',
                            },
                            {
                              label: 'Phobos',
                              i: 'phobos',
                              alt: 'Phobus',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                              desc:
                                'The daemon personification of fear. He was a son and battlefield companion of the god Ares.',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      label: 'Hestia',
                      i: 'hestia',
                      rank: '0',
                      parents: 'Cronus, Rheia',
                      desc:
                        'The goddess of hearth and home. She was a virgin goddess, one of the great Olympian gods. She was also the goddess of the sacrificial flame and was so honoured with every sacrifice to the gods.',
                    },
                    {
                      label: 'Poseidon',
                      i: 'poseidon',
                      rank: '2',
                      parents: 'Cronus, Rheia',
                      desc:
                        'The King of the Sea, and the god of horses, rivers and earthquakes. He was one of the great Olympian gods who received the sea when the cosmos was divided amongst the three sons of Cronus, following the overthrow of the Titans.',
                      children: [
                        {
                          label: 'Chrysaor',
                          alt: 'Khrysaor',
                          rank: '0',
                          parents: 'Poseidon, Medusa',
                          desc: 'A giant, "Golden Falchion".',
                          children: [
                            {
                              label: 'Echidna',
                              alt: 'Ekhidna',
                              rank: '0',
                              parents: 'Keto alone.',
                              desc:
                                'A deadly she-dragon with the upper body of a beautiful nymph, and the tail of a serpent in place of legs. The immortal Echidna married the hundred-headed giant Typhon and spawned a brood of terrible monsters.',
                            },
                          ],
                        },
                        {
                          label: 'Pegasus',
                          i: 'pegasos',
                          alt: 'Pegasos',
                          rank: '0',
                          parents: 'Poseidon, Medusa',
                          desc:
                            'A winged horse which sprung from the neck of Medusa after her decapitation. He was tamed by the hero Bellerophon who rode him into battle against the Amazons and the monster Chimera.',
                        },
                        {
                          label: 'Polyphemos',
                          i: 'polyphemos',
                          alt: 'Polyphemus',
                          rank: '0',
                          parents: 'Poseidon, Thoosa',
                          desc:
                            'A man-eating Cyclops who was blinded by the hero Odysseus',
                        },
                      ],
                    },
                    {
                      label: 'Zeus',
                      i: 'zeus',
                      rank: '2',
                      parents: 'Cronus, Rheia',
                      desc:
                        'The King of the Gods, greatest of the twelve Olympians. He was the god of the heavens, weather, fate, and kings. His weapon was the fiery thunderbolt.',
                      children: [
                        {
                          label: 'Aeacus',
                          i: 'aiakos',
                          alt: 'Aiakos',
                          rank: '0',
                          parents: 'Zeus, Aegina',
                          desc:
                            'One of the three Judges of the Underworld. He was a king of Aigina appointed to this position after death.',
                        },
                        {
                          label: 'Aegipan',
                          alt: 'Aigipan',
                          rank: '0',
                          parents: 'Zeus, Aega',
                          desc:
                            'The fish-goat god. When Typhon attacked Olympus Aegipan suggested the gods flee to Egypt and hide there in the form of animals. In this exodus he took the form of a goat with the tail of a fish. Later he helped to free the captured Zeus and was placed amongst the stars as the constellation Capricorn.',
                        },
                        {
                          label: 'Aethlius',
                          rank: '0',
                          parents: 'Zeus, Protogenia',
                        },
                        {
                          label: 'Apollo',
                          i: 'apollon',
                          alt: 'Apollon',
                          rank: '2',
                          parents: 'Zeus, Leto',
                          desc:
                            'The god of prophecy, music and healing and one of the twelve great Olympian gods. His arrows brought plague to men.',
                        },
                        {
                          label: 'Arcesius (w/ Chalcomedusa)',
                          children: [
                            {
                              label: 'Odysseus',
                            },
                          ],
                        },
                        {
                          label: 'Ares',
                          i: 'ares',
                          rank: '0',
                          parents: 'Zeus, Hera',
                          desc:
                            'The god of war and one of the twelve great Olympian gods.',
                          children: [
                            {
                              label: 'Deimos',
                              i: 'deimos',
                              alt: 'Deimus',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                              desc:
                                'The god of terror and an attendant of Ares.',
                            },
                            {
                              label: 'The Erotes',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                              desc:
                                'Gods and goddesses of the various aspects of erotic love.',
                              children: [
                                {
                                  label: 'Anteros',
                                  i: 'anteros',
                                  rank: '0',
                                  parents: 'Ares, Aphrodite',
                                  desc: 'The god of returned or mutual love. ',
                                },
                                {
                                  label: 'Harmonia',
                                  i: 'harmonia',
                                  rank: '0',
                                  parents: 'Ares, Aphrodite',
                                  desc:
                                    'The goddess of harmony and unity. She was married to the mortal Cadmus in a marriage ceremony attended by all the gods. After ruling Thebes for many years the two were transported to Elysium and a life of bliss.',
                                },
                                {
                                  label: 'Hedylogos',
                                  i: 'hedylogos',
                                  alt: 'Hedylogus',
                                  rank: '0',
                                  parents: 'Ares, Aphrodite',
                                  desc:
                                    'The god of sweet-talk, one of the winged Erotes (Love-Gods).',
                                },
                                {
                                  label: 'Himeros',
                                  i: 'himeros',
                                  alt: 'Himerus',
                                  rank: '0',
                                  parents: 'Ares, Aphrodite',
                                  desc:
                                    'The god of sexual desire, one of the winged Erotes (Love Gods). He was present at the birth of Aphrodite and became one of her constant companions.',
                                },
                                {
                                  label: 'Photos',
                                  i: 'photos',
                                  rank: '0',
                                  parents: 'Ares, Aphrodite',
                                },
                              ],
                            },
                            {
                              label: 'Hermaphroditos',
                              i: 'hermaphroditos',
                              alt: 'Hermaphroditus',
                              rank: '0',
                              parents: 'Hermes, Aphrodite',
                              desc:
                                'Loved by the nymph Salmacis, she prayed they might never be separated. The gods took her request literally and merged their forms into one - part male, part female. He was numbered amongst the winged Erotes.',
                            },
                            {
                              label: 'Phobos',
                              i: 'phobos',
                              alt: 'Phobus',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                              desc:
                                'The daemon personification of fear. He was a son and battlefield companion of the god Ares.',
                            },
                          ],
                        },
                        {
                          label: 'Artemis',
                          i: 'artemis',
                          rank: '2',
                          parents: 'Zeus, Leto',
                          desc:
                            'The goddess of hunting, wild animals, childbirth and children. She brought sudden death to women and girls with her arrows. She was one of the twelve great Olympian gods.',
                        },
                        {
                          label: 'Athene',
                          i: 'athene',
                          alt: 'Athena',
                          rank: '2',
                          parents: 'Zeus, Metis',
                          desc:
                            'Goddess of war and crafts who sprung fully grown and armed from the head of Zeus. She was one of the twelve great Olympian gods.',
                        },
                        {
                          label: 'Castor',
                          i: 'castor',
                          alt: 'Kastor',
                          rank: '0',
                          parents: 'Zeus, Leda',
                        },
                        {
                          label: 'Dardanus',
                          rank: '0',
                          parents: 'Zeus, Electra',
                          desc:
                            'Founder of the city of Dardania (the later, ill-fated city of Troy); he gave his name to the Dardanelles, once called the Hellespont',
                        },
                        {
                          label: 'Dionysos',
                          i: 'dionysos',
                          rank: '0',
                          parents: 'Zeus, Semele',
                          desc:
                            'Also known as Bacchus in both Greek and Roman mythology, he is the god of wine and the youngest of the twelve Olympians. Dionysus had an unusual birth that evokes the difficulty in fitting him into the Olympian pantheon. The goddess Hestia relinquished her position to him when he entered Olympus after spending many years wandering the world establishing his cult.',
                          children: [
                            {
                              label: 'Iakkhos',
                              i: 'iakkhos',
                              alt: 'Iacchus',
                              rank: '0',
                              parents: 'Dionysos, Aura',
                              desc:
                                'The torch-bearing god of the processions of the Eleusinian Mysteries and its ritual cry iakkhe. He was a daemon attendant of the goddess Demeter.',
                            },
                            {
                              label: 'Telete',
                              rank: '0',
                              parents: 'Dionysos, Nikaia',
                              desc:
                                'The female personification of the Dionysian mystery rites, and initiation into the orgiastic cult.',
                            },
                            {
                              label: 'Komos',
                              i: 'komos',
                              alt: 'Comus',
                              rank: '0',
                              parents: 'Dionysos, Kirke',
                              desc:
                                'The god of banquets and festivity, he was a son of Hermes and Circe. Komos could change the faces of men to beasts in the festivities.',
                            },
                            {
                              label: 'Priapos',
                              i: 'priapos',
                              alt: 'Priapus',
                              rank: '0',
                              parents:
                                'Dionysos, AphroditeThe rustic god of garden fertility. He was an ugly little satyr with enormous genitals.',
                            },
                          ],
                        },
                        {
                          label: 'The Dryads',
                          rank: '0',
                          parents: 'Zeus, Gaia',
                          desc:
                            'Female spirits of nature (nymphs), who preside over the groves and forests',
                        },
                        {
                          label: 'Elleithyia',
                          rank: '0',
                          parents: 'Zeus, Hera',
                        },
                        {
                          label: 'The Graces',
                          i: 'graces',
                          alt: 'Aglaia',
                          rank: '0',
                          parents: 'Zeus, Eurynome',
                          desc:
                            'Also called the three Charites, the goddesses who bestowed beauty and charm and who were themselves the embodiment of both',
                          children: [
                            {
                              label: 'Thalia',
                              i: 'thalia',
                              alt: 'Thaleia',
                              rank: '0',
                              parents: 'Zeus, Euronyme',
                              desc:
                                'One of the three Graces (or Charities), "good cheer"',
                            },
                            {
                              label: 'Euphrosyne',
                              i: 'euphrosyne',
                              rank: '0',
                              parents: 'Zeus, Euronyme',
                              desc:
                                'The goddess of mirth and merriment, one of the three Charites',
                            },
                            {
                              label: 'Aglaea',
                              i: 'aglaea',
                              alt: 'Aglaia',
                              rank: '0',
                              parents: 'Zeus, Eurynome',
                              desc:
                                'Goddess of beauty and one of the three Charites. She was married to Hephaestus ',
                            },
                          ],
                        },
                        {
                          label: 'The Hamadryads',
                          rank: '0',
                          parents: 'Zeus, Gaia',
                          desc:
                            'Tree nymphs who lived and died with the tree they inhabited',
                        },
                        {
                          label: 'Hebe',
                          i: 'hebe',
                          rank: '0',
                          parents: 'Zeus, Hera',
                          desc:
                            'The goddess of youth and the wife of Herakles after his ascension to Olympus.',
                        },
                        {
                          label: 'Helen of Troy',
                          rank: '0',
                          parents: 'Zeus, Leda',
                        },
                        {
                          label: 'Hephaestus',
                          i: 'hephaistos',
                          alt: 'Hephaistos',
                          rank: '0',
                          parents: 'Zeus, Hera',
                          desc:
                            'The god of fire, volcanism, smiths and craftsmen. He was one of the twelve great Olympian gods.',
                        },
                        {
                          label: 'Herakles',
                          i: 'herakles',
                          alt: 'Heracles',
                          rank: '0',
                          parents: 'Zeus, Alcmene',
                          desc:
                            'The greatest of the Greek heroes, famed for his twelve labours. On his funeral pyre he was consumed by lightning and apotheosized by Zeus into a god on Olympus. He there married Hebe, goddess of youth.',
                        },
                        {
                          label: 'Hermes',
                          i: 'hermes',
                          rank: '2',
                          parents: 'Zeus, Maia',
                          desc:
                            'The god of animal husbandry and fertility, trade, messengers, and travel. He was one of the twelve great Olympian gods and the messenger of Zeus, King of the Gods.',
                          children: [
                            {
                              label: 'Hermaphroditos',
                              i: 'hermaphroditos',
                              alt: 'Hermaphroditus',
                              rank: '0',
                              parents: 'Hermes, Aphrodite',
                              desc:
                                'Loved by the nymph Salmacis, she prayed they might never be separated. The gods took her request literally and merged their forms into one - part male, part female. He was numbered amongst the winged Erotes.',
                            },
                          ],
                        },
                        {
                          label: 'The Horai',
                          i: 'horai',
                          parents: 'Zeus, Themis',
                          desc:
                            'The Horae (the Hours) are the goddesses of the seasons (the Greek had only three seasons; spring, summer and winter). They are called Thallo, Auxo and Carpo, names which denote budding, growth and ripening.  The twelve Horai, who were daughters of Helios, were not always clearly distinguishable from the three Horai of the seasons, who were also described as overseeing the paths of the sun.',
                          children: [
                            {
                              label: 'Dike',
                              i: 'dike',
                              alt: 'Dice',
                              rank: '0',
                              parents: 'Zeus, Themis',
                              desc:
                                'The goddess of justice. She was one of the three Horae (Seasons)',
                            },
                            {
                              label: 'Eirene',
                              rank: '0',
                              parents: 'Zeus, Themis',
                              desc:
                                'One of the three Horae, the goddess of peace and spring',
                            },
                            {
                              label: 'Eunomia',
                              rank: '0',
                              parents: 'Zeus, Themis',
                              desc:
                                'The goddess of good order and spring pastures. She was one of the three Horae (Seasons) and an attendant of the goddess Aphrodite',
                            },
                          ],
                        },
                        {
                          label: 'Iasion',
                          rank: '0',
                          parents: 'Zeus, Electra',
                          desc:
                            'A springtime consort of the goddess Demeter and patron-god of her Samothracian Mysteries.',
                        },
                        {
                          label: 'Lacedaemon',
                          rank: '0',
                          parents: 'Zeus, Taygete',
                          desc:
                            'Born when Zeus took advantage of Taygete when she was unconscious ',
                        },
                        {
                          label: 'Minos',
                          i: 'minos',
                          rank: '0',
                          parents: 'Zeus, Europa',
                          desc:
                            'A lawmaking King of Crete who was appointed a judge of the dead in the underworld.',
                        },
                        {
                          label: 'Moirae (Fates)',
                          i: 'moirae',
                          alt: 'Moirai',
                          rank: '0',
                          parents: 'Zeus, Themis',
                          desc: 'The female deities who supervised fate',
                          children: [
                            {
                              label: 'Atropos',
                              alt: 'Atropus',
                              rank: '0',
                              parents: 'Zeus, Themis',
                              desc:
                                'Atropos was one of the three Moirae, the Fates, who cut the thread or web of life',
                            },
                            {
                              label: 'Klotho',
                              alt: 'Clotho',
                              rank: '0',
                              parents: 'Zeus, Themis',
                              desc:
                                'The youngest of the three Fates, who spins the thread of human life',
                            },
                            {
                              label: 'Lakhesis',
                              alt: 'Lachesis',
                              rank: '0',
                              parents: 'Zeus, Themis',
                              desc:
                                'One of the three Fates (Moirae), the :Disposer"; he measures the length of the thread of human life spun by Klotho and determines its destiny',
                            },
                          ],
                        },
                        {
                          label: 'The Muses',
                          i: 'muses',
                          alt: 'Terpsikhore',
                          rank: '0',
                          parents: 'Zeus, Mnemosyne',
                          desc: 'The Muse of choral dance and song',
                          children: [
                            {
                              label: 'Calliope',
                              i: 'kalliope',
                              alt: 'Kalliope',
                              rank: '0',
                              parents: 'Zeus, Mnemosyne',
                              desc:
                                'The eldest of the Muses. She was muse of epic poetry',
                            },
                            {
                              label: 'Clio',
                              alt: 'Kleio',
                              rank: '0',
                              parents: 'Zeus, Mnemosyne',
                              desc: 'The muse of history',
                            },
                            {
                              label: 'Erato',
                              rank: '0',
                              parents: 'Zeus, Mnemosyne',
                              desc: 'The Muse of lyric love poetry.',
                            },
                            {
                              label: 'Euterpe',
                              rank: '0',
                              parents: 'Zeus, Mnemosyne',
                              desc: 'The Muse of lyric poetry',
                            },
                            {
                              label: 'Melpomene',
                              rank: '0',
                              parents: 'Zeus, Mnemosyne',
                              desc: 'The Muse of tragedy',
                            },
                            {
                              label: 'Polyhymnia',
                              i: 'polyhymnia',
                              alt: 'Polyhymnia',
                              rank: '0',
                              parents: 'Zeus, Mnemosyne',
                              desc: 'The Muse of hymns',
                            },
                            {
                              label: 'Terpsichore',
                              i: 'terpsikhore',
                              alt: 'Terpsikhore',
                              rank: '0',
                              parents: 'Zeus, Mnemosyne',
                              desc: 'The Muse of choral dance and song',
                            },
                            {
                              label: 'Thalia 1',
                              i: 'thalia',
                              alt: 'Thaleia',
                              rank: '0',
                              parents: 'Zeus, Mnemosyne',
                              desc: 'The Muse of comedy and pastoral poetry',
                            },
                            {
                              label: 'Urania',
                              alt: 'Ourania',
                              rank: '0',
                              parents: 'Zeus, Mnemosyne',
                              desc: 'The Muse of astronomy',
                            },
                          ],
                        },
                        {
                          label: 'Myrmidon',
                          rank: '0',
                          parents: 'Zeus, Eurymedusa',
                        },
                        {
                          label: 'The Oreads',
                          rank: '0',
                          parents: 'Zeus, Gaia',
                          desc:
                            'The Greek nymphs of mountains and grottoes (from the Greek oros "mountain"). They belong to the retinue of Aphrodite',
                        },
                        {
                          label: 'Pandia',
                          alt: 'Pandeia',
                          rank: '0',
                          parents: 'Zeus, Selene',
                          desc:
                            'The goddess of brightness; a minor goddess whose name means "all bright"',
                        },
                        {
                          label: 'Persephone',
                          i: 'persephone',
                          rank: '0',
                          parents: 'Zeus, Demeter',
                          desc:
                            'The Queen of the underworld. She was a spring-time goddess, the only daughter of Demeter, who was abducted to the underworld by Hades. Her mother brought famineto the world until Zeus agreed to let her return for part of the year.',
                          children: [
                            {
                              label: 'Zagreus',
                              alt: 'Zagreos',
                              rank: '0',
                              parents: 'Zeus, Persephone',
                              desc:
                                'The first-born son of Zeus who the god seated on the throne of heaven armed with thunderbolts when he was but a babe. The Titan gods stole into Olympus, distracted the child, and dismembered him with their bloody knives. Athena recovered his heart, and the god was reborn through Semele as Dionysus.',
                            },
                          ],
                        },
                        {
                          label: 'Perseus',
                          i: 'perseus',
                          rank: '0',
                          parents: 'Zeus, Danae',
                        },
                        {
                          label: 'Polydeuces',
                          i: 'polydeuces',
                          rank: '0',
                          parents: 'Zeus, Leda',
                        },
                        {
                          label: 'Rhadamanthys',
                          i: 'rhadamanthys',
                          rank: '0',
                          parents: 'Zeus, Europa',
                          desc:
                            'One of the three judges of the dead in the underworld and the Lord of the Islands of the Blessed.',
                        },
                        {
                          label: 'Sarpedon',
                          i: 'sarpedon',
                          rank: '0',
                          parents: 'Zeus, Europa',
                        },
                        {
                          label: 'Tantalus',
                          rank: '0',
                          parents: 'Zeus, Plouto',
                        },
                        {
                          label: 'Thriae',
                          rank: '0',
                          parents: 'Zeus, Themis',
                          desc:
                            'Lesser goddesses of nature who can foresee the future or foretell the unknown by inspiration, magic, signs, or omens.  The word Thriae means "pebbles," because the future was foretold by tossing pebbles',
                        },
                        {
                          label: 'Zagreus',
                          alt: 'Zagreos',
                          rank: '0',
                          parents: 'Zeus, Persephone',
                          desc:
                            'The first-born son of Zeus who the god seated on the throne of heaven armed with thunderbolts when he was but a babe. The Titan gods stole into Olympus, distracted the child, and dismembered him with their bloody knives. Athena recovered his heart, and the god was reborn through Semele as Dionysus.',
                        },
                      ],
                    },
                  ],
                },
                {
                  label: 'Hyperion',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'Titan-god of the light of heaven and the ordering of the days and months',
                  children: [
                    {
                      label: 'Helios',
                      i: 'helios',
                      alt: 'Helius',
                      rank: '0',
                      desc:
                        'The god of the sun, who rode through the sky in a chariot drawn by winged horses and crowned with the aureole of the sun. Husband of Clymene and father of Phaethon.',
                      children: [
                        {
                          label: 'Aegea',
                          rank: '0',
                          parents: 'Helios, Perse',
                          desc:
                            'Sister to Circe and Pasiphae, and daughter of the sun. When the Titans attacked the gods of Olympus, Gaia placed Aega in a cave to hide her shining loveliness',
                        },
                        {
                          label: 'Aetes',
                          rank: '0',
                          parents: 'Helios, Perse',
                          desc:
                            'King of Colchis;  Aetes is the father of the sorceress Medea.',
                        },
                        {
                          label: 'Circe',
                          i: 'kirke',
                          alt: 'Kirke',
                          rank: '0',
                          parents: 'Helios, Perse',
                          desc:
                            'An immortal witch who dwelt on the island of Aeaea. She turned travellers into beasts with her potions.',
                        },
                        {
                          label: 'Eos',
                          i: 'eos',
                          rank: '0',
                          parents: 'Hyperion, Theia',
                          desc:
                            'The Titan goddess of the dawn. She was cursed by Aphrodite with an insatiable appetite for men, loving one after another - Cephalus, Tithonus, Phaethon, Orion.',
                          children: [
                            {
                              label: 'Astraea',
                              alt: 'Astraia',
                              rank: '0',
                              desc:
                                'The younger Titan-goddess of justice. Astraea left the earth at the end of the Golden Age and entered the heavens as the constellation Virgo.',
                            },
                            {
                              label: 'Boreas',
                              i: 'boreas',
                              rank: '0',
                              parents: 'Astraeus, Eos',
                              desc:
                                'The purple-haired, winged god of the North-Wind. He was also the god of winter who carried snow on his chill breath.',
                            },
                            {
                              label: 'Eosphorus',
                              i: 'eosphoros',
                              alt: 'Eosphoros',
                              rank: '0',
                              parents: 'Aestraeus, Eos',
                              desc:
                                'The god of the morning star who heralded the arrival of dawn.',
                            },
                            {
                              label: 'Eurus',
                              alt: 'Euros',
                              rank: '0',
                              parents: 'Astraeus, Eos',
                              desc:
                                'The god of the East Wind (or more specifically the South-East Wind).',
                            },
                            {
                              label: 'Hesperus',
                              alt: 'Hesperos',
                              rank: '0',
                              parents: 'Aestraeus, Eos',
                              desc: 'The god of the evening star (Venus).',
                            },
                            {
                              label: 'Notus',
                              alt: 'Notos',
                              rank: '0',
                              parents: 'Astraeus, Eos',
                              desc: 'The god of the South Wind.',
                            },
                            {
                              label: 'Zephyrus',
                              i: 'zephyros',
                              alt: 'Zephyros',
                              rank: '0',
                              parents: 'Astraeus, Eos',
                              desc:
                                'The god of the gentle West-Wind and the season of spring.',
                            },
                          ],
                        },
                        {
                          label: 'The 7 Heliadae',
                          rank: '0',
                          parents: 'Helios, Rhode',
                          desc:
                            'The Heliadae were expert astrologers and seafarers, related to the Heliades, daughters of Helios. They were Helia, Merope, Phoebe, Aetheria, and Dioxippe.',
                          children: [
                            {
                              label: 'Actis',
                              rank: '0',
                            },
                            {
                              label: 'Candallus',
                              rank: '0',
                            },
                            {
                              label: 'Cercaphus',
                              rank: '0',
                            },
                            {
                              label: 'Electryone',
                              rank: '0',
                            },
                            {
                              label: 'Macareus',
                              rank: '0',
                            },
                            {
                              label: 'Ochimus',
                              rank: '0',
                            },
                            {
                              label: 'Tenages',
                              rank: '0',
                            },
                            {
                              label: 'Triopas',
                              rank: '0',
                            },
                          ],
                        },
                        {
                          label: 'Lampetia',
                          rank: '0',
                          parents: 'Helios, Neaera',
                          desc:
                            'A nymph daughter of Helios who cared for her father"s sheep-flocks on the island of Thrinacie.',
                        },
                        {
                          label: 'Pasiphae',
                          i: 'pasiphae',
                          rank: '0',
                          parents: 'Helios, Perse',
                          desc:
                            'A goddess-witch of the island of Crete, the wife of King Minos. She was filled with an unnatural desire for the Cretan Bull and after mating it conceived the bull-headed Minotaur.',
                        },
                        {
                          label: 'Perses',
                          shortlabel: 'Perses',
                          parents: 'Helios, Perse',
                          rank: '0',
                          desc:
                            'The Titan god of destruction and laying waste.',
                          children: [
                            {
                              label: 'Hecate',
                              i: 'hekate',
                              alt: 'Hekate',
                              parents: 'Perses, Asteria',
                              rank: '0',
                              desc:
                                'The Titan goddess of witchcraft, ghosts and necromancy. She assisted Demeter in her search for Persephone, and became her minister in Hades.',
                            },
                          ],
                        },
                        {
                          label: 'Phaethon',
                          alt: 'Phaeton',
                          rank: '0',
                          parents: 'Helios, Clymene',
                          desc:
                            'A son of the sun-god Helios who attempted to drive his father"s chariot. He lost control and after scorching the earth was struck down by the bolt of Zeus.',
                        },
                        {
                          label: 'Phaethusa',
                          alt: 'Paethousa',
                          rank: '0',
                          parents: 'Helios, Neaera',
                          desc:
                            'A nymph daughter of the sun-god Helios, and the shepherdess of his flocks on the island of Thrinacie.',
                        },
                        {
                          label: 'Selene',
                          i: 'selene',
                          parents: 'Hyperion, Theia',
                          rank: '0',
                          desc:
                            'The goddess of the moon who rode through the sky at night in a chariot drawn by winged horses, or seated side-saddle on an ass. She fell in love with the young shepherd Endymion who was granted mmortality in a state of eternal sleep.',
                        },
                      ],
                    },
                  ],
                },
                {
                  label: 'Iapetus',
                  alt: 'Iapetos',
                  rank: '1',
                  parents: 'Ouranos, Gaia',
                  desc: 'The Titan-god of mortality and wounding',
                  children: [
                    {
                      label: 'Atlas',
                      i: 'atlas',
                      rank: '1',
                      desc:
                        'The Titan-god of daring. He led the Titan-army in the war against the gods and as punishment was condemned to bear the heavens upon his shoulders.',
                      children: [
                        {
                          label: 'Calypso',
                          alt: 'Kalypso',
                          rank: '0',
                          parents: 'Atlas, Asia',
                          desc:
                            'A goddess-nymph of the island Ogygia. She detained the hero Odysseus on her island for many years.',
                        },
                        {
                          label: 'The Hesperides',
                          rank: '0',
                          parents: 'Atlas, Hesperius',
                          desc:
                            'The Hesperides are Aegle, Arethusa, Erytheia and Hesperia, nymphs who live in a beautiful garden.  The Hesperides are Aegle, Arethusa, Erytheia and Hesperia',
                          i: 'hesperides',
                        },
                        {
                          label: 'The Hyades',
                          rank: '0',
                          parents: 'Atlas, Aethra',
                          desc:
                            'The sisters of the Pleiades.  In some traditions they were regarded as the nurses of either Dionysus or the infant Zeus. As a reward, they were placed in the sky as a constellation',
                          children: [
                            {
                              label: 'Ambrosia',
                              rank: '0',
                              parents: 'Atlas, Aethra',
                              desc: 'One of the Hyades',
                            },
                            {
                              label: 'Cleeia',
                              rank: '0',
                              parents: 'Atlas, Aethra',
                              desc: 'One of the Hyades',
                            },
                            {
                              label: 'Coronis',
                              alt: 'Koronis',
                              rank: '0',
                              parents: 'Atlas, Aethra',
                              desc: 'One of the starry Hyades.',
                            },
                            {
                              label: 'Eudora',
                              rank: '0',
                              parents: 'Atlas, Aethra',
                              desc: 'One of the starry Hyades',
                            },
                            {
                              label: 'Pedile',
                              rank: '0',
                              parents: 'Atlas, Aethra',
                              desc: 'One of the Hyades',
                            },
                            {
                              label: 'Phaeo',
                              rank: '0',
                              parents: 'Atlas, Aethra',
                              desc: 'One of the Hyades',
                            },
                            {
                              label: 'Phaesla',
                              rank: '0',
                              parents: 'Atlas, Aethra',
                              desc: 'One of the Hyades',
                            },
                            {
                              label: 'Phyto',
                              rank: '0',
                              parents: 'Atlas, Aethra',
                              desc: 'One of the Hyades',
                            },
                            {
                              label: 'Polyxo',
                              rank: '0',
                              parents: 'Atlas, Aethra',
                              desc: 'One of the Hyades',
                            },
                            {
                              label: 'Theone',
                              rank: '0',
                              parents: 'Atlas, Aethra',
                              desc: 'One of the Hyades',
                            },
                          ],
                        },
                        {
                          label: 'Hyas',
                          rank: '0',
                          parents: 'Atlas, Aethra',
                          desc:
                            'The water-bearing son of the Titan Atlas who was killed by a lion and placed amongst the stars as the constellation Aquarius.',
                        },
                        {
                          label: 'Maera',
                          alt: 'Maira',
                          rank: '0',
                          parents: 'Atlas, Asia',
                          desc:
                            'A star-nymph daughter of the Titan Atlas, and wife of the Arcadian King Tegeates. She was the goddess of the scorching dog-star Sirios.',
                        },
                        {
                          label: 'The Pleiades',
                          rank: '0',
                          parents: 'Atlas, Pleione',
                          desc:
                            'The virgin companions of Artemis. When Orion, a beautiful hunter, pursued them and their mother, they prayed to the gods for rescue. The gods answered they prayer and they were changed into doves, and later into stars. Zeus placed them in the sky where they formed a part of the constellation of Taurus',
                          children: [
                            {
                              label: 'Alcyone',
                              alt: 'Alkyone',
                              rank: '0',
                              desc:
                                'One of the Pleiades. She was loved by Poseidon.',
                            },
                            {
                              label: 'Celaeno',
                              alt: 'Kelaino',
                              rank: '0',
                              desc:
                                'One of the starry Pleiad nymphs. She was loved by the god Poseidon.',
                            },
                            {
                              label: 'Maia',
                              i: 'maia',
                              rank: '0',
                              desc:
                                'A Pleiad star-nymph of Mount Cyllene in Arcadia. She was the mother of the god Hermes by Zeus.',
                            },
                            {
                              label: 'Merope',
                              rank: '0',
                              desc:
                                'One of the Pleiad star-nymphs, the wife of the impious Corinthian King Sisyphos. Blushing in shame for her husband"s crimes, her star shone only faintly.',
                            },
                            {
                              label: 'Sterope',
                              rank: '0',
                              desc:
                                'One of the starry Pleiad nymphs. She was loved by the god Ares.',
                            },
                            {
                              label: 'Taygete',
                              rank: '0',
                              desc:
                                'The starry Pleiad nymph of Mount Taygetus who was loved by Zeus. She was the ancestress of the kings of Sparta.',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      label: 'Epimethus',
                      i: 'epimethus',
                      rank: '0',
                      parents: 'Iapetus, Clymene',
                      desc:
                        'Epimetheus ("afterthought") foolishly ignored his brother Prometheus\' warnings to beware of any gifts from Zeus. He accepted Pandora as his wife, thereby bringing ills and sorrows to the world. Epimetheus was made up by the Greeks as the antipode of his brother Prometheus ("forethought").',
                    },
                    {
                      label: 'Menoetius',
                      alt: 'Menoitios',
                      rank: '0',
                      parents: 'Iapetus, Clymene ',
                      desc:
                        'The Titan god of rash anger. He was blasted into Erebus with a thunderbolt by Zeus.',
                    },
                    {
                      label: 'Prometheus',
                      i: 'prometheus',
                      rank: '0',
                      parents: 'Iapetus, Clymene',
                      desc:
                        'The Titan god of forethought and the creator of mankind. He cheated the gods on several occasions on behalf of man, including the theft of fire. As punishment Zeus chained him to the Caucasus mountains and sent an eagle to prey on his ever-regenerating liver. He was later freed by Heracles.',
                    },
                  ],
                },
                {
                  label: 'Coeus',
                  alt: 'Koios',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc: 'The Titan-god of intelligence and the axis of heaven.',
                  children: [
                    {
                      label: 'Leto',
                      i: 'leto',
                      rank: '0',
                      parents: 'Coeus, Phoibe',
                      desc:
                        'Hera was jealous of Leto because Zeus, the husband of Hera, had fallen in love with her. From their union Leto bore the divine twins, Artemis and Apollo.',
                      children: [
                        {
                          label: 'Apollo',
                          i: 'apollon',
                          alt: 'Apollon',
                          rank: '2',
                          parents: 'Zeus, Leto',
                          desc:
                            'The god of prophecy, music and healing and one of the twelve great Olympian gods. His arrows brought plague to men.',
                        },
                        {
                          label: 'Artemis',
                          i: 'artemis',
                          rank: '2',
                          parents: 'Zeus, Leto',
                          desc:
                            'The goddess of hunting, wild animals, childbirth and children. She brought sudden death to women and girls with her arrows. She was one of the twelve great Olympian gods.',
                        },
                      ],
                    },
                    {
                      label: 'Asteria',
                      i: 'asteria',
                      rank: '0',
                      parents: 'Coeus, Phoibe',
                      desc:
                        'The Titaness goddess of the prophesies of night. She was the mother of the goddess Hecate. When Asteria was pursued by Zeus she changed herself into a quail and leapt from heaven into the sea. There she metamorphosed (permanently) into the island of Delos.',
                      children: [
                        {
                          label: 'Hecate',
                          i: 'hekate',
                          alt: 'Hekate',
                          parents: 'Perses, Asteria',
                          rank: '0',
                          desc:
                            'The Titan goddess of witchcraft, ghosts and necromancy. She assisted Demeter in her search for Persephone, and became her minister in Hades.',
                        },
                      ],
                    },
                  ],
                },
                {
                  label: 'Krios',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'Krios was the Titan god of leadership, domesticated animals and the constellations of heaven',
                  children: [
                    {
                      label: 'Astraeus',
                      alt: 'Astraios',
                      rank: '0',
                      parents: 'Krios, Eurybia',
                      desc:
                        'The Titan-god of the stars, astronomy and astrology. He was the father of the Winds and the Stars by the dawn-goddess Eos.',
                      children: [
                        {
                          label: 'Boreas',
                          i: 'boreas',
                          rank: '0',
                          parents: 'Astraeus, Eos',
                          desc:
                            'The purple-haired, winged god of the North-Wind. He was also the god of winter who carried snow on his chill breath.',
                        },
                        {
                          label: 'Eurus',
                          alt: 'Euros',
                          rank: '0',
                          parents: 'Astraeus, Eos',
                          desc:
                            'The god of the East Wind (or more specifically the South-East Wind).',
                        },
                        {
                          label: 'Notus',
                          alt: 'Notos',
                          rank: '0',
                          parents: 'Astraeus, Eos',
                          desc: 'The god of the South Wind.',
                        },
                        {
                          label: 'Zephyrus',
                          i: 'zephyros',
                          alt: 'Zephyros',
                          rank: '0',
                          parents: 'Astraeus, Eos',
                          desc:
                            'The god of the gentle West-Wind and the season of spring.',
                        },
                        {
                          label: 'Astraea',
                          alt: 'Astraia',
                          rank: '0',
                          desc:
                            'The younger Titan-goddess of justice. Astraea left the earth at the end of the Golden Age and entered the heavens as the constellation Virgo.',
                        },
                        {
                          label: 'Hesperus',
                          alt: 'Hesperos',
                          rank: '0',
                          parents: 'Aestraeus, Eos',
                          desc: 'The god of the evening star (Venus).',
                        },
                        {
                          label: 'Eosphorus',
                          i: 'eosphoros',
                          alt: 'Eosphoros',
                          rank: '0',
                          parents: 'Aestraeus, Eos',
                          desc:
                            'The god of the morning star who heralded the arrival of dawn.',
                        },
                      ],
                    },
                    {
                      label: 'Styx (hate)',
                      alt: 'Pallas',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The goddess of the underworld river Styx, eldest of the Oceanids. She brought her children to side with Zeus in the Titan-War, and as reward he made her waters the inviolate oath of the gods.',
                      children: [
                        {
                          label: 'Bia',
                          rank: '0',
                          parents: 'Pallas, Styx',
                          desc:
                            'The goddess of force. She sided with Zeus in the Titan-War and became one of his chief attendants.',
                        },
                        {
                          label: 'Nike',
                          i: 'nike',
                          parents: 'Pallas, Styx',
                          rank: '0',
                          desc:
                            'The goddess of victory who sided with Zeus in the Titan-War and became his constant companion.',
                        },
                        {
                          label: 'Cratos',
                          rank: '0',
                          parents: 'Pallas, Styx',
                          desc: 'The personification of strength and power.',
                        },
                        {
                          label: 'Zelus',
                          alt: 'Zelos',
                          parents: 'Pallas, Styx',
                          rank: '0',
                          desc:
                            'The personification of rivalry. He and his three siblings were daemon attendants of the god Zeus.',
                        },
                      ],
                    },
                  ],
                },
                {
                  label: 'Okeanus',
                  i: 'okeanos',
                  alt: 'Oceanus',
                  rank: '1',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'Eldest of the Titans, god of the vast ocean (later identified with the Atlantic), and the father by Tethys of all rivers. He remained neutral in the Titan war. He fostered the three daughters of Cronus after they were disgorged by their father',
                  children: [
                    {
                      label: 'Okeanides',
                      i: 'okeanides',
                      alt: 'Oceanides',
                      rank: '0',
                      parents: 'Okeanos, Tethys',
                      desc:
                        'Nymphs of the ocean. There were also nymphs of springs and rivers (Naiads), clouds (Nephelai), cool breezes (Aurai), meadows (Limoniads) and groves (Alseides). The eldest of them were lower ranked Titan goddesses.',
                      children: [
                        {
                          label: 'Admete',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'An Okeanis whose name means "the unbroken" or "unwedded". She may have been the Naias Nymphe of a wild mountain stream, or the Nephele of wild clouds and rain. Admete was perhaps a goddess of unwedded maidens, her sister Zeuxo, representing the yoke of marriage',
                        },
                        {
                          label: 'Akaste',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'An Okeanis whose name means "unstable" or "irregular". She may have been the Naias Nymphe of an erratically flowing spring or stream, or a Nephele of unpredictable rainfall. Akaste might also have been a gooddess of unpredictable behavior',
                        },
                        {
                          label: 'Amphiro',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'An Okeanis named "the surrounding flow". She may have been a Naias of a stream of Nephele of rain',
                        },
                        {
                          label: 'Amphitrite',
                          i: 'amphitrite',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis goddess of the sea. (She was usually numbered amongst the Nereides rather than Okeanides)',
                        },
                        {
                          label: 'Asia (Continent Asia)',
                          alt: 'Asie',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis Nymphe of the region of Asia (or rather Anatolian peninsular). She was the wife or mother of the Titan Prometheus. Her sister was Europe',
                          children: [
                            {
                              label: 'Calypso',
                              alt: 'Kalypso',
                              rank: '0',
                              parents: 'Atlas, Asia',
                              desc:
                                'A goddess-nymph of the island Ogygia. She detained the hero Odysseus on her island for many years.',
                            },
                            {
                              label: 'Maera',
                              alt: 'Maira',
                              rank: '0',
                              parents: 'Atlas, Asia',
                              desc:
                                'A star-nymph daughter of the Titan Atlas, and wife of the Arcadian King Tegeates. She was the goddess of the scorching dog-star Sirios.',
                            },
                          ],
                        },
                        {
                          label: 'Asterope',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc: 'The "starry-eyed"; an Oceanid loved by Zeus',
                        },
                        {
                          label: 'Beroe',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis Nymphe of the city of Beroe (Beruit) in Lebanon',
                        },
                        {
                          label: 'Daeira (Knowledge)',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'An Okeanis Nymphe named "the knowing" or "learned". She was a goddess of the town of Eleusis, perhaps the Naias of the sacred town well',
                        },
                        {
                          label: 'Dione',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis Nymphe "heavenly" or "divine" was a goddess of the oracle of Dodona in Thesprotia.  Some say she was the mother of the goddess Aphrodite by Zeus.  Dione was probably the same as the Okeanis Dodone, an eponymous goddess of the shrine',
                        },
                        {
                          label: 'Dodone',
                          alt: 'Dodona',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis Nymphe of Dodona in Thesprotia. She may have been the Naias of a local spring or well, and was perhaps the same as the Okeanis Dione',
                        },
                        {
                          label: 'Doris',
                          i: 'doris',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Oceanid goddess of the mingling of fresh water with the brine. She was the wife of the sea-god Nereus, her half-brother, and mother of the fifty Nereides.',
                          children: [
                            {
                              label: 'The Nereides',
                              i: 'nereides',
                              rank: '0',
                              parents: 'Nereus, Doris',
                              desc:
                                'The fifty daughters who dwell in the Mediterranean Sea, these beautiful women were always friendly and helpful towards sailors fighting perilous storms. They are believed to be able to prophesize. They belong to the retinue of Poseidon',
                            },
                          ],
                        },
                        {
                          label: 'Eidyia',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "seeing" or "knowing" was the wife of King Aeetes of Kolkhis. She was apparently a goddess connected with the power of witchcraft',
                        },
                        {
                          label: 'Elektra (Amber-colour)',
                          shortlabel: 'Elektra',
                          alt: 'Electra',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Oceanid of amber-light. She was married to the wondrous sea-god Thaumas and bore him Iris, the rainbow, and the whirlwind Harpies.',
                        },
                        {
                          label: 'Ephyra',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The eponymous Oceanid nymph of the town of Ephyra (Corinth)',
                        },
                        {
                          label: 'Eudora',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "good-gifts" was perhaps a Nephele of good downfalls of rain or the Naias of a generously flowing spring',
                        },
                        {
                          label: 'Europe (Continent Europe)',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis Nymphe of the continent of Europe. Her sister was Asia',
                        },
                        {
                          label: 'Eurynome 1',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis Nymphe of "broad-pastures". She was the mother of the Kharites by Zeus. Eurynome was perhaps one of the Epimelides, Nymphai of grazing pasture',
                        },
                        {
                          label: 'Eurynome 2',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis Nymphe of "wide-rulership". She was the wife of the Titan Ophion',
                        },
                        {
                          label: 'Galaxaura',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis Nymphe "milky breeze" was probably the Aura or Nephele of the mist-clearing breeze',
                        },
                        {
                          label: 'Hagno',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "holy" was one of the nurses of the infant god Zeus. She was the Naias of the Arkan spring Hagno, whose waters generated the clouds of a Nephele',
                        },
                        {
                          label: 'Hesione',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "knowing" or "foresight" was a goddess of foreknowledge. She was the wife of the Titan Prometheus (forethought). Hesione was also known as Pronoia',
                        },
                        {
                          label: 'Hippo',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis Nymphe "horse" was the Naias of a stream or Aura of breezes - both winds and waters were often likened to horses',
                        },
                        {
                          label: 'Hyale',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "crystal" or "clear like crystal" was a Nephele of rain. She was on the attendant Nymphs of Artemis',
                        },
                        {
                          label: 'Iakhe',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis of the ritual cry of joy "iakhe". She was a goddess of the Eleusinian Mysteries',
                        },
                        {
                          label: 'Ianeira',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'An Okeanis Nymphe, perhaps the goddess of the Ionian tribe of Greeks. Her sister Doris presided over the Dorians',
                        },
                        {
                          label: 'Ianthe (Violet-colour)',
                          shortlabel: 'Ianthe',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis of "violet flowers" or the colour "violet". She may have been a Nephele of the violet tinged clouds of dawn, or an Anthousa (flower-nymph) of violets',
                        },
                        {
                          label: 'Kallirhoe',
                          i: 'kallirhoe',
                          alt: 'Callirhoe',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "fair-flowing" was either the Naias of a good flowing spring or Nephele (Cloud) of good downpours. She was the mother of the Erythian (Spanish) giant Geryon.',
                        },
                        {
                          label: 'Kalypso',
                          alt: 'Calypso',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'An Okeanis whose name means "hidden", "covered"or "veiled". She may have been the Naias of a covered or hidden spring or the Aura of invisible breezes',
                        },
                        {
                          label: 'Kamarina',
                          alt: 'Camarina',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis Nymphe of the city of Kamarina in Sicily. She was probably the Naias of the town fountain or well',
                        },
                        {
                          label: 'Kapheira',
                          alt: 'Capheira',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "storm-breath" was probably the Aura of strong winds. She was a nurse of the god Poseidon',
                        },
                        {
                          label: 'Kerkeis',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc: 'One of the Okeanides',
                        },
                        {
                          label: 'Keto',
                          alt: 'Ceto',
                          rank: '0',
                          parents: 'Pontos, Gaia',
                          desc:
                            'An ancient Sea-Goddess. She personified the dangers of the sea. Most of the monsters of mythology were descended from her.',
                          children: [
                            {
                              label: 'Echidna',
                              alt: 'Ekhidna',
                              rank: '0',
                              parents: 'Keto alone.',
                              desc:
                                'A deadly she-dragon with the upper body of a beautiful nymph, and the tail of a serpent in place of legs. The immortal Echidna married the hundred-headed giant Typhon and spawned a brood of terrible monsters.',
                            },
                            {
                              label: 'The Gorgons',
                              rank: '0',
                              parents: 'Phorkys, Keto',
                              desc:
                                'A monstrous feminine creature whose appearance would turn anyone who laid eyes upon it to stone. Later there were three of them: Euryale ("far-roaming"), Sthenno ("forceful"), and Medusa ("ruler"), the only one of them who was mortal. ',
                              children: [
                                {
                                  label: 'Euryale',
                                  rank: '0',
                                  desc: 'One of the two immortal Gorgons.',
                                },
                                {
                                  label: 'Medusa',
                                  i: 'medousa',
                                  alt: 'Medousa',
                                  rank: '0',
                                  desc:
                                    'A serpent-haired Gorgon who was slain by the hero Perseus. When she was beheaded her two children by Poseidon were born from her bloody neck.',
                                  children: [
                                    {
                                      label: 'Pegasus',
                                      i: 'pegasos',
                                      alt: 'Pegasos',
                                      rank: '0',
                                      parents: 'Poseidon, Medusa',
                                      desc:
                                        'A winged horse which sprung from the neck of Medusa after her decapitation. He was tamed by the hero Bellerophon who rode him into battle against the Amazons and the monster Chimera.',
                                    },
                                    {
                                      label: 'Chrysaor',
                                      alt: 'Khrysaor',
                                      rank: '0',
                                      parents: 'Poseidon, Medusa',
                                      desc: 'A giant, "Golden Falchion".',
                                      children: [
                                        {
                                          label: 'Echidna',
                                          alt: 'Ekhidna',
                                          rank: '0',
                                          parents: 'Keto alone.',
                                          desc:
                                            'A deadly she-dragon with the upper body of a beautiful nymph, and the tail of a serpent in place of legs. The immortal Echidna married the hundred-headed giant Typhon and spawned a brood of terrible monsters.',
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  label: 'Sthenno',
                                  rank: '0',
                                },
                              ],
                            },
                            {
                              label: 'Graeae',
                              i: 'graeae',
                              rank: '0',
                              desc:
                                'The three "old women" or "gray ones," they were gray-haired from birth and have only one eye and one tooth, which they share among them. They are Enyo ("horror"), Deino ("dread") and Pemphredo ("alarm")',
                              children: [
                                {
                                  label: 'Deino',
                                  rank: '0',
                                  parents: 'Phorkys, Keto',
                                  desc: 'One of the old hag Graeae.',
                                },
                                {
                                  label: 'Enyo',
                                  rank: '0',
                                  parents: 'Phorkys, Keto',
                                  desc:
                                    'The goddess of war, a battlefield companion of Ares.',
                                },
                                {
                                  label: 'Pemphredo',
                                  rank: '0',
                                  parents: 'Phorkys, Keto',
                                  desc: 'One of old hag Graeae.',
                                },
                              ],
                            },
                            {
                              label: 'Thoosa',
                              rank: '0',
                              parents: 'Porchys, Keto',
                              desc:
                                'A sea nymph loved by the god Poseidon. She was the mother of the Cyclops Polyphemus.',
                              children: [
                                {
                                  label: 'Polyphemos',
                                  i: 'polyphemos',
                                  alt: 'Polyphemus',
                                  rank: '0',
                                  parents: 'Poseidon, Thoosa',
                                  desc:
                                    'A man-eating Cyclops who was blinded by the hero Odysseus',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          label: 'Khariklo',
                          i: 'khariklo',
                          alt: 'Chariklo',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'A Okeanis Nymphe of Mount Pelion in Thessalia. She was the wife of the wise kentauros (centaur) Kheiron',
                        },
                        {
                          label: 'Khryseis (Gold-colour)',
                          shortlabel: 'Khryseis',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "golden" or "golden-yellow" was probably either a Nephele of the golden-tinged clouds of sunset, or the Naias of a gold-producing mountain-spring',
                        },
                        {
                          label: 'Klymene 1',
                          i: 'klymene',
                          alt: 'Clymene',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis goddess of fame and infamy was the wife of the Titan Iapetos',
                          children: [
                            {
                              label: 'Atlas',
                              i: 'atlas',
                              rank: '1',
                              desc:
                                'The Titan-god of daring. He led the Titan-army in the war against the gods and as punishment was condemned to bear the heavens upon his shoulders.',
                              children: [
                                {
                                  label: 'Calypso',
                                  alt: 'Kalypso',
                                  rank: '0',
                                  parents: 'Atlas, Asia',
                                  desc:
                                    'A goddess-nymph of the island Ogygia. She detained the hero Odysseus on her island for many years.',
                                },
                                {
                                  label: 'The Hesperides',
                                  rank: '0',
                                  parents: 'Atlas, Hesperius',
                                  desc:
                                    'The Hesperides are Aegle, Arethusa, Erytheia and Hesperia, nymphs who live in a beautiful garden.  The Hesperides are Aegle, Arethusa, Erytheia and Hesperia',
                                  i: 'hesperides',
                                },
                                {
                                  label: 'The Hyades',
                                  rank: '0',
                                  parents: 'Atlas, Aethra',
                                  desc:
                                    'The sisters of the Pleiades.  In some traditions they were regarded as the nurses of either Dionysus or the infant Zeus. As a reward, they were placed in the sky as a constellation',
                                  children: [
                                    {
                                      label: 'Ambrosia',
                                      rank: '0',
                                      parents: 'Atlas, Aethra',
                                      desc: 'One of the Hyades',
                                    },
                                    {
                                      label: 'Cleeia',
                                      rank: '0',
                                      parents: 'Atlas, Aethra',
                                      desc: 'One of the Hyades',
                                    },
                                    {
                                      label: 'Coronis',
                                      alt: 'Koronis',
                                      rank: '0',
                                      parents: 'Atlas, Aethra',
                                      desc: 'One of the starry Hyades.',
                                    },
                                    {
                                      label: 'Eudora',
                                      rank: '0',
                                      parents: 'Atlas, Aethra',
                                      desc: 'One of the starry Hyades',
                                    },
                                    {
                                      label: 'Pedile',
                                      rank: '0',
                                      parents: 'Atlas, Aethra',
                                      desc: 'One of the Hyades',
                                    },
                                    {
                                      label: 'Phaeo',
                                      rank: '0',
                                      parents: 'Atlas, Aethra',
                                      desc: 'One of the Hyades',
                                    },
                                    {
                                      label: 'Phaesla',
                                      rank: '0',
                                      parents: 'Atlas, Aethra',
                                      desc: 'One of the Hyades',
                                    },
                                    {
                                      label: 'Phyto',
                                      rank: '0',
                                      parents: 'Atlas, Aethra',
                                      desc: 'One of the Hyades',
                                    },
                                    {
                                      label: 'Polyxo',
                                      rank: '0',
                                      parents: 'Atlas, Aethra',
                                      desc: 'One of the Hyades',
                                    },
                                    {
                                      label: 'Theone',
                                      rank: '0',
                                      parents: 'Atlas, Aethra',
                                      desc: 'One of the Hyades',
                                    },
                                  ],
                                },
                                {
                                  label: 'Hyas',
                                  rank: '0',
                                  parents: 'Atlas, Aethra',
                                  desc:
                                    'The water-bearing son of the Titan Atlas who was killed by a lion and placed amongst the stars as the constellation Aquarius.',
                                },
                                {
                                  label: 'Maera',
                                  alt: 'Maira',
                                  rank: '0',
                                  parents: 'Atlas, Asia',
                                  desc:
                                    'A star-nymph daughter of the Titan Atlas, and wife of the Arcadian King Tegeates. She was the goddess of the scorching dog-star Sirios.',
                                },
                                {
                                  label: 'The Pleiades',
                                  rank: '0',
                                  parents: 'Atlas, Pleione',
                                  desc:
                                    'The virgin companions of Artemis. When Orion, a beautiful hunter, pursued them and their mother, they prayed to the gods for rescue. The gods answered they prayer and they were changed into doves, and later into stars. Zeus placed them in the sky where they formed a part of the constellation of Taurus',
                                  children: [
                                    {
                                      label: 'Alcyone',
                                      alt: 'Alkyone',
                                      rank: '0',
                                      desc:
                                        'One of the Pleiades. She was loved by Poseidon.',
                                    },
                                    {
                                      label: 'Celaeno',
                                      alt: 'Kelaino',
                                      rank: '0',
                                      desc:
                                        'One of the starry Pleiad nymphs. She was loved by the god Poseidon.',
                                    },
                                    {
                                      label: 'Maia',
                                      i: 'maia',
                                      rank: '0',
                                      desc:
                                        'A Pleiad star-nymph of Mount Cyllene in Arcadia. She was the mother of the god Hermes by Zeus.',
                                    },
                                    {
                                      label: 'Merope',
                                      rank: '0',
                                      desc:
                                        'One of the Pleiad star-nymphs, the wife of the impious Corinthian King Sisyphos. Blushing in shame for her husband"s crimes, her star shone only faintly.',
                                    },
                                    {
                                      label: 'Sterope',
                                      rank: '0',
                                      desc:
                                        'One of the starry Pleiad nymphs. She was loved by the god Ares.',
                                    },
                                    {
                                      label: 'Taygete',
                                      rank: '0',
                                      desc:
                                        'The starry Pleiad nymph of Mount Taygetus who was loved by Zeus. She was the ancestress of the kings of Sparta.',
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              label: 'Epimethus',
                              i: 'epimethus',
                              rank: '0',
                              parents: 'Iapetus, Clymene',
                              desc:
                                'Epimetheus ("afterthought") foolishly ignored his brother Prometheus\' warnings to beware of any gifts from Zeus. He accepted Pandora as his wife, thereby bringing ills and sorrows to the world. Epimetheus was made up by the Greeks as the antipode of his brother Prometheus ("forethought").',
                            },
                            {
                              label: 'Menoetius',
                              alt: 'Menoitios',
                              rank: '0',
                              parents: 'Iapetus, Clymene ',
                              desc:
                                'The Titan god of rash anger. He was blasted into Erebus with a thunderbolt by Zeus.',
                            },
                            {
                              label: 'Prometheus',
                              i: 'prometheus',
                              rank: '0',
                              parents: 'Iapetus, Clymene',
                              desc:
                                'The Titan god of forethought and the creator of mankind. He cheated the gods on several occasions on behalf of man, including the theft of fire. As punishment Zeus chained him to the Caucasus mountains and sent an eagle to prey on his ever-regenerating liver. He was later freed by Heracles.',
                            },
                          ],
                        },
                        {
                          label: 'Klymene',
                          i: 'klymene',
                          alt: 'Clymene',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis of fame was the mother of the Phaethon by Helios the sun. She was probably one of the Nephelai. She may be the same as Klytia',
                          children: [
                            {
                              label: 'Phaeton',
                              rank: '0',
                              parents: 'Helios, Clymene',
                              desc:
                                'The son of the sun-god Helios. He induced his father to allow him to drive the chariot of the sun across the heavens for one day. The horses ran wildly out of their course and came close to the earth, threatening to burn it. Zeus noticed the danger and with a thunderbolt he destroyed Phaeton. ',
                            },
                          ],
                        },
                        {
                          label: 'Klytia',
                          alt: 'Clytia',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'One of the Oceanides who fell in love with the sun-god Helius. When he abandoned her she wasted away and was transformed into the sun-gazing heliotrope flower.  She may have been the same as Klymene 2',
                        },
                        {
                          label: 'Krokale',
                          alt: 'Crocale',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "sea-shore" was a Naias Nymphe companion of the goddess Artemis',
                        },
                        {
                          label: 'Leuke',
                          alt: 'Leuce',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'An Okeanis named "the white" who was loved by Haides god of the underworld. She was transformed into the white poplar tree of the nlessed Elysian Fields',
                        },
                        {
                          label: 'Leukippe',
                          alt: 'Leucippides',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "White-Horse" was probably the Nephele or Aura of fast moving clouds, or the Naias of a frothy white spring or mountain stream. Winds and waters were often compared to horses',
                        },
                        {
                          label: 'Libya (Continent Africa)',
                          alt: 'Libye',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Oceanid nymph who gave her name to the continent of Libya (Africa).  She was a sister of Europe and Asia',
                        },
                        {
                          label: 'Melia',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Oceanid nymph wife of the Argive river-god Inachus.  She was probably the Naias of a sweet-water spring, perhaps the same as Melia 2, who was loved by the god Apollon and was the Naias of the Theban spring Ismene',
                        },
                        {
                          label: 'Meliboea 1',
                          alt: 'Meliboia',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "sweet-cattle" was the wife of the early Arkadian King Pelasgos. She was probably either the Naias nymphe of an Arkadian spring or the Epimelis of cattle-grazing pastures',
                        },
                        {
                          label: 'Meliboea 2',
                          alt: 'Meliboia',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'An Okeanis loved by the Syrian River-God Orontes',
                        },
                        {
                          label: 'Melite',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "honey-sweet" was probably the Nymphe of sweet-water spring',
                        },
                        {
                          label: 'Melobosis',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "food of fruit" or "sheep-feeder" was probably one of the Epimelides, Nymphai of grassy pastures or fruit trees',
                        },
                        {
                          label: 'Menestho',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "swift-force" or "strong and fast" was probably the Naias of a full flowing stream, or the Aura of strongly blowing breezes',
                        },
                        {
                          label: 'Merope',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "with face turned" was the mother of Phaethon by the god Helios. She was probably the same as Klymene 2',
                        },
                        {
                          label: 'Metis (Counsel)',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis goddess of wisdom and good-counsel. She was loved by Zeus, who swallowed her to avoid the prophecy that her son would dethrone him. She was probably one of the Nephelai',
                          children: [
                            {
                              label: 'Athene',
                              i: 'athene',
                              alt: 'Athena',
                              rank: '2',
                              parents: 'Zeus, Metis',
                              desc:
                                'Goddess of war and crafts who sprung fully grown and armed from the head of Zeus. She was one of the twelve great Olympian gods.',
                            },
                          ],
                        },
                        {
                          label: 'Neda',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis goddess of the Arkadian River Neda. She was an Arkadian nurse of the infant god Zeus',
                        },
                        {
                          label: 'Nemesis',
                          i: 'nemesis',
                          rank: '0',
                          parents: 'Nyx alone; or Okeanus and Tethys',
                          desc:
                            'The Okeanis goddess of indignation and retribution for hybristic behaviour and undeserved good fortune. After being seduced by Zeus in the form of a swan, she lay the egg from which Helen was hatched. She a daughter of Nyx, but was also called a daughter of Nyx or Zeus.',
                        },
                        {
                          label: 'Nephele 1',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'A Nymphe "cloud" who was the wife of the mortal King Athamas. She rescued her two children from sacrifice by sending a flying golden-fleeced Ram to their aide (a creature reminiscent of a golden cloud)',
                        },
                        {
                          label: 'Nephele 2',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'A Nymphe formed by Zeus in the shape of Hera out of the clouds. She was raped by the criminal Ixion, and bore him the Kentauroi (Centaurs)',
                          children: [
                            {
                              label: 'Nessos',
                              i: 'nessos',
                              alt: 'Nessus',
                              rank: '0',
                              desc:
                                'A centaur ferryman who tried to rape the wife of Heracles, Deianeira, as he was carrying her across his river. Heracles heard her screams and shot him dead with poisoned arrows. The dying centaur tricked the girl into taking a sample of his poisoned blood to use as an aphrodisiac should her husband ever prove unfaithful.',
                            },
                            {
                              label: 'Eurytion',
                              i: 'eurytion',
                              rank: '0',
                              desc:
                                'A Thessalian centaur who attempted to abduct the bride of the Lapith King Peirithous on her wedding day. Most of the centaurs were slain in the battle which ensued.',
                            },
                            {
                              label: 'Hylonome',
                              rank: '0',
                              desc:
                                'A female centaur. She killed herself when her husband the centaur Cyllarus was slain in the battle with the Lapiths.',
                            },
                            {
                              label: 'Petraios',
                              i: 'petraios',
                              rank: '0',
                            },
                            {
                              label: 'Asbolos',
                              i: 'asbolos',
                              rank: '0',
                            },
                            {
                              label: 'Arktos',
                              rank: '0',
                            },
                            {
                              label: 'Oureios',
                              rank: '0',
                            },
                            {
                              label: 'Mimas',
                              rank: '0',
                              desc:
                                'One of the Gigantes who slain in the giant-war by Hephaestus with barage of red-hot metal.',
                            },
                            {
                              label: 'Peukeus',
                              rank: '0',
                            },
                            {
                              label: 'Perimedes',
                              rank: '0',
                            },
                            {
                              label: 'Dryalos',
                              rank: '0',
                            },
                            {
                              label: 'Rhoikos',
                              rank: '0',
                              parents: 'Ouranos, Gaia',
                              desc: 'One of the Gigantes',
                            },
                            {
                              label: 'Hylaios',
                              i: 'hylaios',
                              rank: '0',
                            },
                          ],
                        },
                        {
                          label: 'Nephele 3',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis Nymphe "cloud" was one of the virgin Nephelai attendants of the goddess Artemis',
                        },
                        {
                          label: 'Nymphai Artemis',
                          i: 'artemis',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The fifty youngest Okeanides were handmaidens of the goddess Artemis',
                        },
                        {
                          label: 'The 5 Nysiades',
                          i: 'nysiades',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'Five Okeanides of Mt Nysa in Phoinikia who nursed the god Dionysos and became the first of his Bakkhantes',
                        },
                        {
                          label: 'Okyrhoe',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "swift-flowing" was either a Naias of fast flowing spring, or Nephele of falling rain',
                        },
                        {
                          label: 'Ourania',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The "heavenly-one" was probably an Okeanis Nephele (of the clouds)',
                        },
                        {
                          label: 'Paregoron',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis goddess of consolation and soothing words. She was an attendant of the goddess Aphrodite',
                        },
                        {
                          label: 'Pasithoe',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'An Okeanis whose name means "all-swift". She was probably either the Naias of a fast-flowing spring or an Aura of the swift breeze',
                        },
                        {
                          label: 'Periboia',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "surrounded by cattle" was the wife of the Titan Lelantos. She was probably the Naias of a pasture-feeding stream',
                        },
                        {
                          label: 'Peitho (Persuasion)',
                          i: 'peitho',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Oceanid goddess of persuasion and seductive words. She was the nurse and close companionof the goddess Aphrodite.',
                        },
                        {
                          label: 'Perseis',
                          alt: 'Perse',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'An Okeanis-eponym of Persia and mother by Helios of the eastern despots Aeetes and Perses, and the witches Pasiphae and Kirke. Her name also means "destroyer" who probably was a goddess of the destructive power of witches',
                          children: [
                            {
                              label: 'Aegea',
                              rank: '0',
                              parents: 'Helios, Perse',
                              desc:
                                'Sister to Circe and Pasiphae, and daughter of the sun. When the Titans attacked the gods of Olympus, Gaia placed Aega in a cave to hide her shining loveliness',
                            },
                            {
                              label: 'Aetes',
                              rank: '0',
                              parents: 'Helios, Perse',
                              desc:
                                'King of Colchis;  Aetes is the father of the sorceress Medea.',
                            },
                            {
                              label: 'Circe',
                              i: 'kirke',
                              alt: 'Kirke',
                              rank: '0',
                              parents: 'Helios, Perse',
                              desc:
                                'An immortal witch who dwelt on the island of Aeaea. She turned travellers into beasts with her potions.',
                            },
                            {
                              label: 'Pasiphae',
                              i: 'pasiphae',
                              rank: '0',
                              parents: 'Helios, Perse',
                              desc:
                                'A goddess-witch of the island of Crete, the wife of King Minos. She was filled with an unnatural desire for the Cretan Bull and after mating it conceived the bull-headed Minotaur.',
                            },
                            {
                              label: 'Perses',
                              shortlabel: 'Perses',
                              parents: 'Helios, Perse',
                              rank: '0',
                              desc:
                                'The Titan god of destruction and laying waste.',
                              children: [
                                {
                                  label: 'Hecate',
                                  i: 'hekate',
                                  alt: 'Hekate',
                                  parents: 'Perses, Asteria',
                                  rank: '0',
                                  desc:
                                    'The Titan goddess of witchcraft, ghosts and necromancy. She assisted Demeter in her search for Persephone, and became her minister in Hades.',
                                },
                              ],
                            },
                            {
                              label: 'Phaethusa',
                              alt: 'Paethousa',
                              rank: '0',
                              parents: 'Helios, Perse',
                              desc:
                                'A nymph daughter of the sun-god Helios, and the shepherdess of his flocks on the island of Thrinacie.',
                            },
                          ],
                        },
                        {
                          label: 'Petraie (Stoney-grey-colour)',
                          shortlabel: 'Petraie',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "of the rocks" or "stone-grey" was probably the Naias of a rocky spring, or Nephele of dark grey clouds',
                        },
                        {
                          label: 'Phaino',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "appearing" or "shining" was perhaps the Nephele of the appearance of cloud, or the Naias of a bright spring',
                        },
                        {
                          label: 'Phiale',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "water-pitcher" was one of the companions of the goddess Artemis. She was either a spring Naias or rain-pouring Nephele',
                        },
                        {
                          label: 'Philyre',
                          alt: 'Philyra',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'An Oceanid nymph, daughter of Oceanus and Tethys, loved by the Titan Cronus. When Rhea discovered their rendezvous, he transformed himself into a stallion. From their union, the centaur Chiron was born. When Philyra saw her son, she asked Zeus to transform her into another form, and became a linden tree. Goddess of beauty, perfume, healing, and writing, and the inventor of paper.',
                          children: [
                            {
                              label: 'Chiron',
                              i: 'chiron',
                              alt: 'Kheiron',
                              rank: '0',
                              parents: 'Cronus, Philyra',
                              desc:
                                'An immortal Centaur son of Cronus. He was famed for his wisdom and dwelt in a cave on Mt Pelion where he fostered and trained many of the great heroes.',
                              children: [
                                {
                                  label: 'Ocyrhoe',
                                  alt: 'Okyrhoe',
                                  rank: '0',
                                  parents: 'Chiron, Chariclo',
                                  desc:
                                    'A Naiad nymph of the island of Samos who was pursued by the god Apollon. When she attempted to flee the island by ship he turned the vessel to stone and transformed the pilot into a porpoise.',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          label: 'Pleione (Many)',
                          shortlabel: 'Pleione',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Oceanid nymph wife of the Titan Atlas. She and her seven daughters, the Pleiades, were pursued by the lusty giant Orion for seven years before the gods placed them amongst the stars.',
                          children: [
                            {
                              label: 'The Pleiades',
                              rank: '0',
                              parents: 'Atlas, Pleione',
                              desc:
                                'The virgin companions of Artemis. When Orion, a beautiful hunter, pursued them and their mother, they prayed to the gods for rescue. The gods answered they prayer and they were changed into doves, and later into stars. Zeus placed them in the sky where they formed a part of the constellation of Taurus',
                              children: [
                                {
                                  label: 'Alcyone',
                                  alt: 'Alkyone',
                                  rank: '0',
                                  desc:
                                    'One of the Pleiades. She was loved by Poseidon.',
                                },
                                {
                                  label: 'Celaeno',
                                  alt: 'Kelaino',
                                  rank: '0',
                                  desc:
                                    'One of the starry Pleiad nymphs. She was loved by the god Poseidon.',
                                },
                                {
                                  label: 'Maia',
                                  i: 'maia',
                                  rank: '0',
                                  desc:
                                    'A Pleiad star-nymph of Mount Cyllene in Arcadia. She was the mother of the god Hermes by Zeus.',
                                },
                                {
                                  label: 'Merope',
                                  rank: '0',
                                  desc:
                                    'One of the Pleiad star-nymphs, the wife of the impious Corinthian King Sisyphos. Blushing in shame for her husband"s crimes, her star shone only faintly.',
                                },
                                {
                                  label: 'Sterope',
                                  rank: '0',
                                  desc:
                                    'One of the starry Pleiad nymphs. She was loved by the god Ares.',
                                },
                                {
                                  label: 'Taygete',
                                  rank: '0',
                                  desc:
                                    'The starry Pleiad nymph of Mount Taygetus who was loved by Zeus. She was the ancestress of the kings of Sparta.',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          label: 'Plexaure',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis of the "weaving breeze" was likely one of the Aurai',
                        },
                        {
                          label: 'Plouto (Wealth)',
                          alt: 'Pluto',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis goddess of wealth was probably a Nephele of fertile rains, prospering the agricultural crop',
                        },
                        {
                          label: 'Polydora',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "many gifts" might have been the Nephele of generous downfalls',
                        },
                        {
                          label: 'Pronoia',
                          alt: 'Pronoea',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Nymphe named "foresight" was the wife of the Titan Prometheus. She was a goddess of the shrine of Delphoi, and probably the same as the Okeanis Hesione',
                        },
                        {
                          label: 'Prymno',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "root" or "undermost" was probably the Naias Nymphe of groundwater, or the waters of a deep well',
                        },
                        {
                          label: 'Psekas',
                          alt: 'Psecas',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "rain-shower" was a Nephele companion of the goddess Artemis',
                        },
                        {
                          label: 'Rhanis',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'An Okeanis named "rain-drop". She was one of the Nephelai attendants of the goddess Artemis',
                        },
                        {
                          label: 'Rhodeia (Rose-colour)',
                          shortlabel: 'Rhodeia',
                          alt: 'Rhode',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis named "of the roses" or "rose-coloured" was either an Anthousa flower-nymphe, Naias of a rose-draped spring, or Nephele of the rose-tinged clouds of dawn',
                          children: [
                            {
                              label: 'The 7 Heliadae',
                              rank: '0',
                              parents: 'Helios, Clymene, Rhode',
                              desc:
                                'The Heliadae were the seven sons of Helios, the sun god and the nymph Rhodus, daughter of Poseidon. The names of the seven sons were Ochimus, Cercaphus, Macareus ( or Macar), Actis, Tenages, Triopas, and Candalus. ',
                            },
                          ],
                        },
                        {
                          label: 'Rhodope',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "rosey-eyed" was probably either an Anthousa flower-nymphe of Nephele of the rose-coloured clouds of dawn. A Naiad nymph daughter of the Thracian river-god Strymon. When she and her husband Haemus impersonated Zeus and Hera, the angry gods transformed them into mountains.',
                        },
                        {
                          label: 'Styx (hate)',
                          alt: 'Pallas',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The goddess of the underworld river Styx, eldest of the Oceanids. She brought her children to side with Zeus in the Titan-War, and as reward he made her waters the inviolate oath of the gods.',
                          children: [
                            {
                              label: 'Bia',
                              rank: '0',
                              parents: 'Pallas, Styx',
                              desc:
                                'The goddess of force. She sided with Zeus in the Titan-War and became one of his chief attendants.',
                            },
                            {
                              label: 'Nike',
                              i: 'nike',
                              parents: 'Pallas, Styx',
                              rank: '0',
                              desc:
                                'The goddess of victory who sided with Zeus in the Titan-War and became his constant companion.',
                            },
                            {
                              label: 'Cratos',
                              rank: '0',
                              parents: 'Pallas, Styx',
                              desc:
                                'The personification of strength and power.',
                            },
                            {
                              label: 'Zelus',
                              alt: 'Zelos',
                              parents: 'Pallas, Styx',
                              rank: '0',
                              desc:
                                'The personification of rivalry. He and his three siblings were daemon attendants of the god Zeus.',
                            },
                          ],
                        },
                        {
                          label: 'Telesto (Success)',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis goddess of success and accomplishment. She was probably one of the Nephelai, an ethereal goddess',
                        },
                        {
                          label: 'Theiosa',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'An Okeanis nurse of the infant Zeus in Arkadia',
                        },
                        {
                          label: 'Thoe',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "swift" might have been a Naias, Nephele or Aura Nymphe',
                        },
                        {
                          label: 'Tykhe (Fortune)',
                          i: 'tykhe',
                          alt: 'Tyche',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis goddess of fortune or chance was probably one of the heavenly Nephelai',
                        },
                        {
                          label: 'Xanthe (Yellow-colour)',
                          rank: '0',
                          parents: 'Okeanus, Thetys',
                          desc:
                            'The Okeanis "yellow" or "yellow-brown" was probably either a Naias of a muddy flowing stream, or the Nephele of the yellowed clouds of dawn and dusk',
                        },
                        {
                          label: 'Zeuxos',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'An Okeanis named "the yoked" was probably a goddess of marriage, brides being yoked in marriage. She may have been a Naias or Nephele Nymphe, in the sense of a yoked or tamed horse',
                        },
                      ],
                    },
                    {
                      label: 'Potamoi',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The River god sons of Oceanus. Each river had its own god. They were manlike from the chest upwards, but below were bodied with the serpentine tail of a fish.',
                      children: [
                        {
                          label: 'Aigaios (River of Skheria)',
                          alt: 'Aegaeus',
                          rank: '0',
                          desc:
                            'A river of Scheria (island of the Phaeacians) and its god.',
                        },
                        {
                          label: 'Aisepos (River of Troad)',
                          rank: '0',
                        },
                        {
                          label: 'Akheloios (River of Aitolia)',
                          i: 'akheloios',
                          alt: 'Achelous',
                          rank: '0',
                          desc:
                            'A river of Aetolia and its god. He wrestled Heracles for the hand of Deianeira but lost the contest and with it his horn.',
                        },
                        {
                          label: 'Alpheios (River of Arkadia and Elis)',
                          alt: 'Alpheius',
                          rank: '0',
                          desc:
                            'A river of Elis and its god. He fell in love with the nymph Arethusa and pursued her all the way to the island Ortygia. Artemis then transformed her into a spring to escape him but Alpheius guided his stream under the sea to Sicily so he could forever mingle his waters with hers.',
                        },
                        {
                          label: 'Amnisos (River of Krete)',
                          alt: 'Amnisus',
                          rank: '0',
                          desc: 'A river of Crete and its god.',
                        },
                        {
                          label: 'Anigros (River of Elis)',
                          alt: 'Anigrus',
                          rank: '0',
                          desc: 'A river of Elis and its god.',
                          children: [
                            {
                              label: 'The Anigrides',
                              rank: '0',
                            },
                          ],
                        },
                        {
                          label: 'Askanios (River of Mysia)',
                          alt: 'Ascanius',
                          rank: '0',
                          desc: 'A River of Mysia and its god.',
                        },
                        {
                          label:
                            'Asopos (River of Argos and Boiotia) (w/ Metope)',
                          shortlabel: 'Asopos',
                          alt: 'Asopus',
                          rank: '0',
                          desc:
                            'A river of Boeotia and Argos and its god. He had twenty beautiful daughters, most of whom were carried off by the gods. Asopus pursued Zeus when he abducted Aegina but was driven back by the god"s thunderbolts.',
                          children: [
                            {
                              label: 'Aigina',
                              i: 'aigina',
                              alt: 'Aegina',
                              rank: '0',
                              desc:
                                'A naiad daughter of the river Asopus. She was loved by Zeus who carried her off to the island of Aegina. When her father pursued them Zeus struck him with a thunderbolt.',
                            },
                            {
                              label: 'Salamis',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the river Asopus who was abducted to the island of the same name by the god Poseidon.',
                            },
                            {
                              label: 'Nemea',
                              rank: '0',
                              desc:
                                'The Naiad nymph of the town of Nemea. She was a daughter of either Zeus and Selene or the river Asopus.',
                            },
                            {
                              label: 'Harpina',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the river Asopus who was abducted to Elis by Ares.',
                            },
                            {
                              label: 'Thebe',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the river Asopus abducted to the town of Thebes by Zeus..',
                            },
                            {
                              label: 'Antiope',
                              rank: '0',
                            },
                            {
                              label: 'Plataia',
                              alt: 'Plataea',
                              rank: '0',
                              desc:
                                'The Naiad nymph of the Boeotian town of Plataea loved by Zeus. The god pretended to be taking her for his bride when Hera abandoned their marriage.',
                            },
                            {
                              label: 'Thespia',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the river Asopus. She was carried off to Boeotia by the god Apollo.',
                            },
                            {
                              label: 'Tanagra',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the river Asopus. The gods Ares and Hermes competed a boxing match to win her love.',
                            },
                            {
                              label: 'Oeroe',
                              rank: '0',
                            },
                            {
                              label: 'Euboia',
                              alt: 'Euboea',
                              rank: '0',
                              desc:
                                'A Naiad daughter of the river Asopus carried off by Poseidon to the island of Euboea.',
                            },
                            {
                              label: 'Korkyra',
                              alt: 'Corcyra',
                              rank: '0',
                              desc:
                                'A Naiad daughter of the river Asopus. She was loved by Poseidon who carried her off to the island of Corcyra.',
                            },
                            {
                              label: 'Sinope',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the river Asopus who was abducted tot he town of Sinope on the Black Sea by Apollo. She made him swear to respect her virginity.',
                            },
                            {
                              label: 'Peirene',
                              rank: '0',
                              desc:
                                'The weeping Naiad nymph of the fountain of the town of Corinth. She was loved by Poseidon.',
                            },
                            {
                              label: 'Kleone',
                              alt: 'Cleone',
                              rank: '0',
                              desc:
                                'The Naiad nymph of the town of Cleonae in Argos.',
                            },
                            {
                              label: 'Ismene',
                              i: 'ismene',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the River Asopus, and the wife of King Argus.',
                            },
                            {
                              label: 'Asopis',
                              rank: '0',
                              desc: 'A Naiad daughter of the river Asopus.',
                            },
                            {
                              label: 'Ornia',
                              rank: '0',
                            },
                            {
                              label: 'Khalkis',
                              alt: 'Chalcis',
                              rank: '0',
                              desc:
                                'A Naiad daughter of Asopus. The town of Chalcis in Euboea was named after her.',
                            },
                          ],
                        },
                        {
                          label: 'Asterion (River of Argos)',
                          rank: '0',
                          desc: 'A river of Mycenae and its god.',
                          children: [
                            {
                              label: 'Akraia',
                              alt: 'Acraea',
                              rank: '0',
                              desc:
                                'A naiad daughter of the river Asterion. With her sisters Euboea and Prosymna she nursed Hera as a child.',
                            },
                            {
                              label: 'Prosymna',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the river Asterion. She and her sisters Euboea and Acraea were nurses of the goddess Hera.',
                            },
                            {
                              label: 'Euboia',
                              alt: 'Euboea',
                              rank: '0',
                              desc:
                                'A Naiad daughter of the river Asopus carried off by Poseidon to the island of Euboea.',
                            },
                          ],
                        },
                        {
                          label: 'Axios (River of Paionia)',
                          alt: 'Axius',
                          rank: '0',
                          desc: 'A river of Paeonia and its god.',
                        },
                        {
                          label: 'Caanthus',
                          alt: 'Kaanthos',
                          rank: '0',
                          parents: 'Oceanus, Tethys',
                          desc:
                            'A River-god son of the Titan Oceanus who was slain by Apollo in their rivalry for the love of the Nymph Melia.',
                        },
                        {
                          label: 'Enipeus (River of Thessalia)',
                          rank: '0',
                        },
                        {
                          label: 'Erasinos (River of Argos)',
                          alt: 'Erasinus',
                          rank: '0',
                          desc: 'A river of Argos and its god.',
                          children: [
                            {
                              label: 'Ankhinoe',
                              alt: 'Anchinoe',
                              rank: '0',
                              desc: 'An Egyptian Naiad.',
                            },
                            {
                              label: 'Byze',
                              rank: '0',
                              desc:
                                'A Naiad daughter of the river Erasinus. With her sisters she was an attendant of Britomartis.',
                            },
                            {
                              label: 'Melite',
                              rank: '0',
                              desc:
                                'A Naiad nymph of the island of the Phaeacians. She was seduced by Heracles.',
                            },
                            {
                              label: 'Moira',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the river Erasinus who, with her sisters, was an attendant of the goddess Britomartis.',
                            },
                          ],
                        },
                        {
                          label: 'Eridanos (River of N. Europe)',
                          alt: 'Eridanus',
                          rank: '0',
                          desc:
                            'A river of northern Europe or Italy and its god.',
                        },
                        {
                          label: 'Erymanthos (River of Arkadia)',
                          rank: '0',
                        },
                        {
                          label: 'Euenos (River of Aitolia)',
                          alt: 'Evenus',
                          rank: '0',
                          desc: 'A river of Aetolia and its god.',
                        },
                        {
                          label: 'Eurotas (River of Lakonia)',
                          rank: '0',
                          desc:
                            'A river in Laconia and its god. He was the first King of Sparta.',
                        },
                        {
                          label: 'Grenikos (River of Troad)',
                          alt: 'Grenicus',
                          rank: '0',
                          desc: 'A river of Troy and its god.',
                          children: [
                            {
                              label: 'Alexirhoe',
                              alt: 'Alexiroe',
                              rank: '0',
                              desc:
                                'A naiad daughter of the river Grenicus of Troy.',
                            },
                            {
                              label: 'Pegasis',
                              rank: '0',
                              desc: 'A Trojan Naiad nymph.',
                            },
                          ],
                        },
                        {
                          label: 'Gyge (Lake of Lydia)',
                          alt: 'Gygaie',
                          rank: '0',
                          desc: 'A lake of Lydia and its god.',
                        },
                        {
                          label: 'Haliakmon (River of Makedonia)',
                          rank: '0',
                        },
                        {
                          label: 'Hebros (River of Thrake)',
                          alt: 'Hebrus',
                          rank: '0',
                          desc: 'A river of Thrace and its god.',
                        },
                        {
                          label: 'Heptaporos (River of Troad)',
                          rank: '0',
                        },
                        {
                          label: 'Hermos (River of Lydia)',
                          alt: 'Hermus',
                          rank: '0',
                          desc: 'A river of Lydia and its god.',
                        },
                        {
                          label: 'Hydaspes (River of India)',
                          rank: '0',
                          desc:
                            'An Indian River-God who fought and was defeated by Dionysus in the Indian Wars.',
                        },
                        {
                          label: 'Imbrasos (River of Samos)',
                          alt: 'Imbrasus',
                          rank: '0',
                          desc: 'A river of the island of Samos and its god.',
                        },
                        {
                          label: 'Ilissos (River of Attika)',
                          alt: 'Ilissus',
                          rank: '0',
                          desc: 'A river of Athens and its god.',
                          children: [
                            {
                              label: 'Pharmakeia',
                              alt: 'Pharmacea',
                              rank: '0',
                              desc:
                                'The Naiad nymph of a poisonous spring near the town of Athens.',
                            },
                          ],
                        },
                        {
                          label: 'Inakhos (River of Argos)',
                          alt: 'Inachus',
                          rank: '0',
                          desc:
                            'A river of Argos and its god. When Poseidon and Hera were contesting for dominion of Argos, he ruled in favour of Hera. Poseidon in anger caused his stream to run dry.',
                          children: [
                            {
                              label: 'Mykene',
                              alt: 'Mycene',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the river Inachus after whom the city of Mycenae was named.',
                            },
                            {
                              label: 'Kallithyia',
                              alt: 'Callithyia',
                              rank: '0',
                              desc:
                                'A Naiad daughter of the river Inachus who founded the ancient cult of Hera in Argos.',
                            },
                            {
                              label: 'Philodike',
                              alt: 'Philodice',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the river Inachus, the wife of a Messenian king.',
                            },
                            {
                              label: 'Io',
                              i: 'io',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the river Inachus. She was loved by Zeus who transformed her into a cow to hide her from the jealous gaze of Hera. The goddess was not fooled and sent a maddening gladfly to torment her. It drove her to wander all the way to Egypt, where she gave birth to Epaphus, ancestor of the Pharaohs.',
                            },
                            {
                              label: 'Amymone',
                              rank: '0',
                              desc:
                                'The Naiad of an Argive spring who was loved by the god Poseidon.',
                            },
                            {
                              label: 'Messeis',
                              rank: '0',
                              desc:
                                'The Naiad nymph of an Argive spring, a daughter of the River Inachus.',
                            },
                            {
                              label: 'Hypereia',
                              alt: 'Hyperia',
                              rank: '0',
                              desc:
                                'The Naiad nymph daughter of the River-god Inachus.',
                            },
                          ],
                        },
                        {
                          label: 'Inopos (River of Delos)',
                          rank: '0',
                        },
                        {
                          label: 'Ismenos (River of Boiotia)',
                          alt: 'Ismenus',
                          rank: '0',
                          desc: 'A River of Boeotia and its god.',
                          children: [
                            {
                              label: 'Dirke',
                              alt: 'Dirce',
                              rank: '0',
                              desc:
                                'The Naiad nymph of the sacred fountain of Dionysus on Mount Cithaeron.',
                            },
                            {
                              label: 'Strophia',
                              rank: '0',
                              desc:
                                'The Naiad nymph of a spring on Mount Cithaeron.',
                            },
                            {
                              label: 'Ismenis',
                              rank: '0',
                              desc:
                                'A Naiad daughter of the River Ismenos loved by the god Faunus.',
                            },
                          ],
                        },
                        {
                          label: 'Istros (River of Skythia)',
                          alt: 'Istrus',
                          rank: '0',
                          desc: 'A god of the river Danube in Scythia.',
                        },
                        {
                          label: 'Kaikos (River of Teuthrania)',
                          alt: 'Caecus',
                          rank: '0',
                          desc: 'A river of Teuthrania and its god.',
                          children: [
                            {
                              label: 'Okyrrhoe',
                              rank: '0',
                            },
                          ],
                        },
                        {
                          label: 'Kaystros (River of Lydia)',
                          alt: 'Caystera',
                          rank: '0',
                          desc: 'river of Lydia and its god.',
                        },
                        {
                          label: 'Kebren (River of Troad)',
                          alt: 'Cebren',
                          rank: '0',
                          desc: 'A river of Troy and its god.',
                          children: [
                            {
                              label: 'Oinone',
                              alt: 'Oenone',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the river Cebren of Troy. She was the first wife of Prince Paris who refused to heal him when he later returned to her seeking a cure for his mortal arrow-wound. She refused, and when he died she hung herself in remorse.',
                            },
                            {
                              label: 'Hesperia',
                              rank: '0',
                              desc: 'A naiad daughter of the river Cebren.',
                            },
                          ],
                        },
                        {
                          label: 'Kephissos (River of Phokis)',
                          rank: '0',
                          children: [
                            {
                              label: 'Lilaia',
                              alt: 'Lilaea',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the river Cephisus.',
                            },
                            {
                              label: 'Daulis',
                              rank: '0',
                              desc:
                                'A Naiad nymph after whom the Boeotian town of Daulis was named.',
                            },
                            {
                              label: 'Melaina',
                              rank: '0',
                            },
                            {
                              label: 'Thyia',
                              rank: '0',
                              desc:
                                'A Naiad nymph of Mount Parnassus loved by the god Apollo. She was the first to celebrate the orgies of Dionysus at Delphi.',
                            },
                            {
                              label: 'The Kephisides',
                              rank: '0',
                            },
                          ],
                        },
                        {
                          label: 'Kephissos (River of Attika)',
                          rank: '0',
                          children: [
                            {
                              label: 'Diogenia',
                              alt: 'Diogeneia',
                              rank: '0',
                              desc:
                                'A naiad daughter of the river Cephisus. She was the wife of an Athenian nobleman.',
                            },
                          ],
                        },
                        {
                          label: 'Khremetes (River of Libya)',
                          alt: 'Chremetes',
                          rank: '0',
                          desc: 'A river of Libya and its god.',
                          children: [
                            {
                              label: 'Ankhiroe',
                              alt: 'Anchiroe',
                              rank: '0',
                              desc: 'An Arcadian Naiad nymph.',
                            },
                          ],
                        },
                        {
                          label: 'Kladeos (River of Elis)',
                          rank: '0',
                        },
                        {
                          label: 'Kokytos (River of Hades)',
                          alt: 'Cocytus',
                          rank: '0',
                          desc: 'The underworld river of wailing and its god.',
                          children: [
                            {
                              label: 'The Kokythiai',
                              rank: '0',
                            },
                            {
                              label: 'Mintha',
                              alt: 'Minthe',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the underworld river-god Cocytus. She was transformed into a mint plant by Persephone when her affair with the god Hades was discovered.',
                            },
                          ],
                        },
                        {
                          label: 'Kydos (River of Kilikia)',
                          rank: '0',
                        },
                        {
                          label: 'Kytheros (River of Elis)',
                          alt: 'Cytherus',
                          rank: '0',
                          desc: 'A river of Elis and its god.',
                          children: [
                            {
                              label: 'The 4 Ionides',
                              rank: '0',
                            },
                          ],
                        },
                        {
                          label: 'Ladon (River of Arkadia)',
                          rank: '0',
                          desc:
                            'A hundred-headed dragon which guarded the golden apples of the Hesperides. It was slain by Heracles.',
                          children: [
                            {
                              label: 'Metope',
                              rank: '0',
                              desc:
                                'The Naiad nymph wife of the Argive river-god Asopus.',
                            },
                            {
                              label: 'Thelpousa',
                              alt: 'Thelpusa',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the Arcadian river Ladon.',
                            },
                            {
                              label: 'Themis',
                              i: 'themis',
                              rank: '0',
                              parents: 'Ouranos, Gaia',
                              desc:
                                'The Titan goddess of divine law, natural order and the oracles of the earth. She was the mother of the goddess Fates and Seasons by Zeus.',
                              children: [
                                {
                                  label: 'Thriae',
                                  rank: '0',
                                  parents: 'Zeus, Themis',
                                  desc:
                                    'Lesser goddesses of nature who can foresee the future or foretell the unknown by inspiration, magic, signs, or omens.  The word Thriae means "pebbles," because the future was foretold by tossing pebbles',
                                },
                                {
                                  label: 'The Horai',
                                  i: 'horai',
                                  parents: 'Zeus, Themis',
                                  desc:
                                    'The Horae (the Hours) are the goddesses of the seasons (the Greek had only three seasons; spring, summer and winter). They are called Thallo, Auxo and Carpo, names which denote budding, growth and ripening.  The twelve Horai, who were daughters of Helios, were not always clearly distinguishable from the three Horai of the seasons, who were also described as overseeing the paths of the sun.',
                                  children: [
                                    {
                                      label: 'Dike',
                                      i: 'dike',
                                      alt: 'Dice',
                                      rank: '0',
                                      parents: 'Zeus, Themis',
                                      desc:
                                        'The goddess of justice. She was one of the three Horae (Seasons)',
                                    },
                                    {
                                      label: 'Eirene',
                                      rank: '0',
                                      parents: 'Zeus, Themis',
                                      desc:
                                        'One of the three Horae, the goddess of peace and spring',
                                    },
                                    {
                                      label: 'Eunomia',
                                      rank: '0',
                                      parents: 'Zeus, Themis',
                                      desc:
                                        'The goddess of good order and spring pastures. She was one of the three Horae (Seasons) and an attendant of the goddess Aphrodite',
                                    },
                                  ],
                                },
                                {
                                  label: 'Moirae (Fates)',
                                  i: 'moirae',
                                  alt: 'Moirai',
                                  rank: '0',
                                  parents: 'Zeus, Themis',
                                  desc:
                                    'The female deities who supervised fate',
                                  children: [
                                    {
                                      label: 'Atropos',
                                      alt: 'Atropus',
                                      rank: '0',
                                      parents: 'Zeus, Themis',
                                      desc:
                                        'Atropos was one of the three Moirae, the Fates, who cut the thread or web of life',
                                    },
                                    {
                                      label: 'Klotho',
                                      alt: 'Clotho',
                                      rank: '0',
                                      parents: 'Zeus, Themis',
                                      desc:
                                        'The youngest of the three Fates, who spins the thread of human life',
                                    },
                                    {
                                      label: 'Lakhesis',
                                      alt: 'Lachesis',
                                      rank: '0',
                                      parents: 'Zeus, Themis',
                                      desc:
                                        'One of the three Fates (Moirae), the :Disposer"; he measures the length of the thread of human life spun by Klotho and determines its destiny',
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              label: 'Syrinx',
                              rank: '0',
                              desc:
                                'A Naiad nymph chased by the god Pan. She fled his embrace and was transformed by her sisters into river reeds. The god crafted his famous pan-pipes from her plant.',
                            },
                          ],
                        },
                        {
                          label: 'Lamos (River of Phoinikia)',
                          rank: '0',
                          desc:
                            'A river of Cilicia or Mount Helicon in Boeotia and its god. He and his sons and daughters were nurses of the god Dionysus.',
                        },
                        {
                          label: 'Lethe (River of Hades)',
                          rank: '0',
                          desc: 'The female personification of forgetfulness.',
                        },
                        {
                          label: 'Maiandros (River of Karia)',
                          alt: 'Maeander',
                          rank: '0',
                          desc: 'A river of Caria and its god.',
                        },
                        {
                          label: 'Meles (River of Lydia)',
                          rank: '0',
                        },
                        {
                          label: 'Neilos (River of Aigyptos) (w/ Kallirrhoe)',
                          alt: 'Nile',
                          rank: '0',
                          desc: 'The river of Egypt and its god.',
                          children: [
                            {
                              label: 'Memphis',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the River Nile. She was the wife of the very first Egyptian king Epaphus, who named his capital after her.',
                            },
                            {
                              label: 'Ankhinoe',
                              alt: 'Anchinoe',
                              rank: '0',
                              desc: 'An Egyptian Naiad.',
                            },
                            {
                              label: 'Kaliadne',
                              alt: 'Caliadne',
                              rank: '0',
                              desc: 'An Egyptian Naiad.',
                            },
                            {
                              label: 'Polyxo',
                              rank: '0',
                              desc: 'An Egyptian naiad.',
                            },
                            {
                              label: 'Anippe',
                              rank: '0',
                              desc:
                                'A Naiad daughter of the River Nile loved by Poseidon.',
                            },
                            {
                              label: 'Khione',
                              alt: 'Chione',
                              rank: '0',
                              desc:
                                'The goddess or nymph of snow. She was a daughter of the winter-god Boreas loved by the god Poseidon.',
                            },
                          ],
                        },
                        {
                          label: 'Nestos (River of Thrake)',
                          rank: '0',
                        },
                        {
                          label: 'Paktolos (River of Lydia)',
                          rank: '0',
                        },
                        {
                          label: 'Parthenios (River of Paphlagonia)',
                          rank: '0',
                        },
                        {
                          label: 'Peneios (River of Thessalia) (w/ Kreusa)',
                          alt: 'Peneus',
                          rank: '0',
                          desc: 'A river of Thessaly and its god.',
                          children: [
                            {
                              label: 'The Thessalides',
                              rank: '0',
                            },
                            {
                              label: 'Daphne',
                              i: 'daphne',
                              rank: '0',
                              desc:
                                'A naiad daughter of the river Peneius. She was loved by the god Apollo who pursued her through the woods. As he was about to capture her she prayed to Gaea and was transformed into a laurel tree.',
                            },
                            {
                              label: 'Stilbe',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the Thessalian river Peneius loved by the god Apollo.',
                            },
                            {
                              label: 'Menippe',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the river Peneius.',
                            },
                            {
                              label: 'Hypseus',
                              rank: '0',
                              children: [
                                {
                                  label: 'Kyrene',
                                  alt: 'Cyrene',
                                  rank: '0',
                                  desc:
                                    'A Naiad nymph huntress of Thessaly who was loved by the god Apollo. She bore him the rustic god Aristaeus.',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          label: 'Phasis (River of Kholkis)',
                          rank: '0',
                          desc: 'A river of Colchis and its god.',
                        },
                        {
                          label: 'Pitane',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the Spartan river Eurotas. She was loved by Poseidon.',
                        },
                        {
                          label: 'Pleistos (River of Phokis)',
                          alt: 'Pleistus',
                          rank: '0',
                          desc: 'A river of Phocis and its god.',
                          children: [
                            {
                              label: 'The Korykiai',
                              rank: '0',
                            },
                            {
                              label: 'Korykia',
                              alt: 'Corycia',
                              rank: '0',
                              desc:
                                'One of the Corycian nymphs of Delphi loved by the god Apollo.',
                            },
                          ],
                        },
                        {
                          label: 'Pyriphlegethon (River of Hades)',
                          rank: '0',
                          desc: 'The underworld river of fire and its god.',
                        },
                        {
                          label: 'Rhesos (River of Troad)',
                          rank: '0',
                        },
                        {
                          label: 'Rhodios (River of Troad)',
                          rank: '0',
                        },
                        {
                          label: 'Saggarios (River of Phrygia) (w/ Kybele )',
                          alt: 'Sangarius',
                          rank: '0',
                          desc: 'A river of Phrygia and its god.',
                        },
                        {
                          label: 'Simoeis (River of Troad)',
                          rank: '0',
                          desc: 'A river of Troy and its god.',
                          children: [
                            {
                              label: 'The Troiades',
                              rank: '0',
                            },
                            {
                              label: 'Astyokhe',
                              alt: 'Astyoche',
                              rank: '0',
                              desc:
                                'A Naiad daughter of the Trojan river Simoeis. She married a Trojan king.',
                            },
                            {
                              label: 'Hieromneme',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the river Simoeis, and wife of the Dardanian prince Assaracus.',
                            },
                          ],
                        },
                        {
                          label: 'Skamandros (River of Troad)',
                          alt: 'Scamander',
                          rank: '0',
                          desc:
                            'A river of Troy and its god. When he attempted to drown the hero Achilles in the Trojan War, Hephaestus scorched his streams with fire.',
                          children: [
                            {
                              label: 'The Troiades',
                              rank: '0',
                            },
                            {
                              label: 'Kallirhoe',
                              i: 'kallirhoe',
                              alt: 'Callirhoe',
                              rank: '0',
                              desc:
                                'An Oceanid wife of the giant Chrysaor. She begged her son Geryon not to battle Heracles.',
                            },
                            {
                              label: 'Strymo',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the Trojan river Scamander.',
                            },
                            {
                              label: 'Glaukia',
                              alt: 'Glaucia',
                              rank: '0',
                              desc:
                                'A Naiad daughter of the river Scamander. She was loved by a companion of Heracles.',
                            },
                          ],
                        },
                        {
                          label: 'Sparte',
                          alt: 'Sparta',
                          rank: '0',
                          desc:
                            'The Naiad nymph wife of Lacedaemon, the first King of Sparta.',
                        },
                        {
                          label: 'Sperkheios (River of Malis)',
                          alt: 'Spercheus',
                          rank: '0',
                          desc: 'A river of Malis and its god.',
                          children: [
                            {
                              label: 'The Sperkheides',
                              rank: '0',
                            },
                            {
                              label: 'Diopatre',
                              alt: 'Diopatra',
                              rank: '0',
                              desc:
                                'A Malian Naiad nymph loved by Poseidon. The god turned her sisters into poplars while he seduced her.',
                            },
                          ],
                        },
                        {
                          label: 'Strymon (River of Thrake) (w/ Neaera )',
                          rank: '0',
                          desc: 'A river of Thrace and its god.',
                          children: [
                            {
                              label: 'Euadne',
                              alt: 'Evadne',
                              rank: '0',
                              desc:
                                'A naiad daughter of the river Strymon married to Argus king of Argos.',
                            },
                            {
                              label: 'Rhodope',
                              rank: '0',
                              parents: 'Okeanus, Tethys',
                              desc:
                                'The Okeanis "rosey-eyed" was probably either an Anthousa flower-nymphe of Nephele of the rose-coloured clouds of dawn. A Naiad nymph daughter of the Thracian river-god Strymon. When she and her husband Haemus impersonated Zeus and Hera, the angry gods transformed them into mountains.',
                            },
                            {
                              label: 'Tereine',
                              rank: '0',
                              desc:
                                'A Thracian Naiad nymph loved by the god Ares.',
                            },
                          ],
                        },
                        {
                          label: 'Symaithos (River of Sikelia)',
                          alt: 'Symaethus',
                          rank: '0',
                          desc: 'A Sicilian river and its god.',
                        },
                        {
                          label: 'Termessos (River of Boiotia)',
                          rank: '0',
                          children: [
                            {
                              label: 'Aganippe',
                              rank: '0',
                              desc:
                                'A naiad daughter of the river Termessus. She was the nymph of a sacred spring of the Muses whose waters had the power of inspiration.',
                            },
                          ],
                        },
                        {
                          label: 'Tiasa',
                          rank: '0',
                          desc: 'The Naiad nymph of a Spartan stream.',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              label: 'The Titanides',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'The Titanides were the six earth-goddesses, the female counterparts of the Titanes.  The Titanides represented different aspects of their mother Gaia the Earth.',
              children: [
                {
                  label: 'Mnemosyne',
                  i: 'mnemosyne',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'The Titan goddess of memory, words and language. She bore Zeus the nine goddess Muses after spending a night lengthened ninefold in the arms of the god.',
                  children: [
                    {
                      label: 'The Muses',
                      i: 'muses',
                      alt: 'Terpsikhore',
                      rank: '0',
                      parents: 'Zeus, Mnemosyne',
                      desc: 'The Muse of choral dance and song',
                      children: [
                        {
                          label: 'Calliope',
                          i: 'kalliope',
                          alt: 'Kalliope',
                          rank: '0',
                          parents: 'Zeus, Mnemosyne',
                          desc:
                            'The eldest of the Muses. She was muse of epic poetry',
                        },
                        {
                          label: 'Clio',
                          alt: 'Kleio',
                          rank: '0',
                          parents: 'Zeus, Mnemosyne',
                          desc: 'The muse of history',
                        },
                        {
                          label: 'Erato',
                          rank: '0',
                          parents: 'Zeus, Mnemosyne',
                          desc: 'The Muse of lyric love poetry.',
                        },
                        {
                          label: 'Euterpe',
                          rank: '0',
                          parents: 'Zeus, Mnemosyne',
                          desc: 'The Muse of lyric poetry',
                        },
                        {
                          label: 'Melpomene',
                          rank: '0',
                          parents: 'Zeus, Mnemosyne',
                          desc: 'The Muse of tragedy',
                        },
                        {
                          label: 'Polyhymnia',
                          i: 'polyhymnia',
                          alt: 'Polyhymnia',
                          rank: '0',
                          parents: 'Zeus, Mnemosyne',
                          desc: 'The Muse of hymns',
                        },
                        {
                          label: 'Terpsichore',
                          i: 'terpsikhore',
                          alt: 'Terpsikhore',
                          rank: '0',
                          parents: 'Zeus, Mnemosyne',
                          desc: 'The Muse of choral dance and song',
                        },
                        {
                          label: 'Thalia 1',
                          i: 'thalia',
                          alt: 'Thaleia',
                          rank: '0',
                          parents: 'Zeus, Mnemosyne',
                          desc: 'The Muse of comedy and pastoral poetry',
                        },
                        {
                          label: 'Urania',
                          alt: 'Ourania',
                          rank: '0',
                          parents: 'Zeus, Mnemosyne',
                          desc: 'The Muse of astronomy',
                        },
                      ],
                    },
                  ],
                },
                {
                  label: 'Phoibe',
                  alt: 'Phoibe',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'The Titan goddess of bright intellect and the oracle at Delphi. She gifted the shrine to her grandson Apollon on his birthday.  She married her brother Coeus and with him she became the mother of Leto and Asteria',
                  children: [
                    {
                      label: 'Asteria',
                      i: 'asteria',
                      rank: '0',
                      parents: 'Coeus, Phoibe',
                      desc:
                        'The Titaness goddess of the prophesies of night. She was the mother of the goddess Hecate. When Asteria was pursued by Zeus she changed herself into a quail and leapt from heaven into the sea. There she metamorphosed (permanently) into the island of Delos.',
                      children: [
                        {
                          label: 'Hecate',
                          i: 'hekate',
                          alt: 'Hekate',
                          parents: 'Perses, Asteria',
                          rank: '0',
                          desc:
                            'The Titan goddess of witchcraft, ghosts and necromancy. She assisted Demeter in her search for Persephone, and became her minister in Hades.',
                        },
                      ],
                    },
                    {
                      label: 'Leto',
                      i: 'leto',
                      rank: '0',
                      parents: 'Coeus, Phoibe',
                      desc:
                        'Hera was jealous of Leto because Zeus, the husband of Hera, had fallen in love with her. From their union Leto bore the divine twins, Artemis and Apollo.',
                      children: [
                        {
                          label: 'Apollo',
                          i: 'apollon',
                          alt: 'Apollon',
                          rank: '2',
                          parents: 'Zeus, Leto',
                          desc:
                            'The god of prophecy, music and healing and one of the twelve great Olympian gods. His arrows brought plague to men.',
                        },
                        {
                          label: 'Artemis',
                          i: 'artemis',
                          rank: '2',
                          parents: 'Zeus, Leto',
                          desc:
                            'The goddess of hunting, wild animals, childbirth and children. She brought sudden death to women and girls with her arrows. She was one of the twelve great Olympian gods.',
                        },
                      ],
                    },
                  ],
                },
                {
                  label: 'Rheia',
                  i: 'rheia',
                  alt: 'Rheia',
                  rank: '1',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'Mother of the gods, and the Titan goddess of female fertility and mountain wilderness. Her brother and husband, Cronus, swallowed each of her children, but she managed to hide the youngest, Zeus, in a cave on the island Crete. Zeus eventually made his father disgorge his siblings -- Demeter, Hades, Hera, Hestia, Poseidon.',
                  children: [
                    {
                      label: 'Demeter',
                      i: 'demeter',
                      rank: '0',
                      parents: 'Cronus, Rheia',
                      desc:
                        'Goddess of agriculture and the fertile earth. She was one of the twelve great Olympian gods. Her Mysteries promised mankind passage to a blessed afterlife.',
                      children: [
                        {
                          label: 'Persephone',
                          i: 'persephone',
                          rank: '0',
                          parents: 'Zeus, Demeter',
                          desc:
                            'The Queen of the underworld. She was a spring-time goddess, the only daughter of Demeter, who was abducted to the underworld by Hades. Her mother brought famineto the world until Zeus agreed to let her return for part of the year.',
                          children: [
                            {
                              label: 'Zagreus',
                              alt: 'Zagreos',
                              rank: '0',
                              parents: 'Zeus, Persephone',
                              desc:
                                'The first-born son of Zeus who the god seated on the throne of heaven armed with thunderbolts when he was but a babe. The Titan gods stole into Olympus, distracted the child, and dismembered him with their bloody knives. Athena recovered his heart, and the god was reborn through Semele as Dionysus.',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      label: 'Hades',
                      i: 'hades',
                      alt: 'Haides',
                      rank: '2',
                      parents: 'Cronus, Rheia',
                      desc:
                        'One of the three mighty sons of Cronus. When Zeus, Hades and Poseidon drew lots for the division of the world, Haides received the subterranean lands of the dead.',
                    },
                    {
                      label: 'Hera',
                      i: 'hera',
                      rank: '2',
                      parents: 'Cronus, Rheia',
                      desc:
                        'The Queen of the gods, and goddess of the heavens, women and marriage. She was one of the twelve great Olympian gods.',
                      children: [
                        {
                          label: 'Hephaestus',
                          i: 'hephaistos',
                          alt: 'Hephaistos',
                          rank: '0',
                          parents: 'Zeus, Hera',
                          desc:
                            'The god of fire, volcanism, smiths and craftsmen. He was one of the twelve great Olympian gods.',
                        },
                        {
                          label: 'Hebe',
                          i: 'hebe',
                          rank: '0',
                          parents: 'Zeus, Hera',
                          desc:
                            'The goddess of youth and the wife of Herakles after his ascension to Olympus.',
                        },
                        {
                          label: 'Ares',
                          i: 'ares',
                          rank: '0',
                          parents: 'Zeus, Hera',
                          desc:
                            'The god of war and one of the twelve great Olympian gods.',
                          children: [
                            {
                              label: 'Deimos',
                              i: 'deimos',
                              alt: 'Deimus',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                              desc:
                                'The god of terror and an attendant of Ares.',
                            },
                            {
                              label: 'The Erotes',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                              desc:
                                'Gods and goddesses of the various aspects of erotic love.',
                              children: [
                                {
                                  label: 'Anteros',
                                  i: 'anteros',
                                  rank: '0',
                                  parents: 'Ares, Aphrodite',
                                  desc: 'The god of returned or mutual love. ',
                                },
                                {
                                  label: 'Harmonia',
                                  i: 'harmonia',
                                  rank: '0',
                                  parents: 'Ares, Aphrodite',
                                  desc:
                                    'The goddess of harmony and unity. She was married to the mortal Cadmus in a marriage ceremony attended by all the gods. After ruling Thebes for many years the two were transported to Elysium and a life of bliss.',
                                },
                                {
                                  label: 'Hedylogos',
                                  i: 'hedylogos',
                                  alt: 'Hedylogus',
                                  rank: '0',
                                  parents: 'Ares, Aphrodite',
                                  desc:
                                    'The god of sweet-talk, one of the winged Erotes (Love-Gods).',
                                },
                                {
                                  label: 'Himeros',
                                  i: 'himeros',
                                  alt: 'Himerus',
                                  rank: '0',
                                  parents: 'Ares, Aphrodite',
                                  desc:
                                    'The god of sexual desire, one of the winged Erotes (Love Gods). He was present at the birth of Aphrodite and became one of her constant companions.',
                                },
                                {
                                  label: 'Photos',
                                  i: 'photos',
                                  rank: '0',
                                  parents: 'Ares, Aphrodite',
                                },
                              ],
                            },
                            {
                              label: 'Hermaphroditos',
                              i: 'hermaphroditos',
                              alt: 'Hermaphroditus',
                              rank: '0',
                              parents: 'Hermes, Aphrodite',
                              desc:
                                'Loved by the nymph Salmacis, she prayed they might never be separated. The gods took her request literally and merged their forms into one - part male, part female. He was numbered amongst the winged Erotes.',
                            },
                            {
                              label: 'Phobos',
                              i: 'phobos',
                              alt: 'Phobus',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                              desc:
                                'The daemon personification of fear. He was a son and battlefield companion of the god Ares.',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      label: 'Hestia',
                      i: 'hestia',
                      rank: '0',
                      parents: 'Cronus, Rheia',
                      desc:
                        'The goddess of hearth and home. She was a virgin goddess, one of the great Olympian gods. She was also the goddess of the sacrificial flame and was so honoured with every sacrifice to the gods.',
                    },
                    {
                      label: 'Poseidon',
                      i: 'poseidon',
                      rank: '2',
                      parents: 'Cronus, Rheia',
                      desc:
                        'The King of the Sea, and the god of horses, rivers and earthquakes. He was one of the great Olympian gods who received the sea when the cosmos was divided amongst the three sons of Cronus, following the overthrow of the Titans.',
                      children: [
                        {
                          label: 'Chrysaor',
                          alt: 'Khrysaor',
                          rank: '0',
                          parents: 'Poseidon, Medusa',
                          desc: 'A giant, "Golden Falchion".',
                          children: [
                            {
                              label: 'Echidna',
                              alt: 'Ekhidna',
                              rank: '0',
                              parents: 'Keto alone.',
                              desc:
                                'A deadly she-dragon with the upper body of a beautiful nymph, and the tail of a serpent in place of legs. The immortal Echidna married the hundred-headed giant Typhon and spawned a brood of terrible monsters.',
                            },
                          ],
                        },
                        {
                          label: 'Pegasus',
                          i: 'pegasos',
                          alt: 'Pegasos',
                          rank: '0',
                          parents: 'Poseidon, Medusa',
                          desc:
                            'A winged horse which sprung from the neck of Medusa after her decapitation. He was tamed by the hero Bellerophon who rode him into battle against the Amazons and the monster Chimera.',
                        },
                        {
                          label: 'Polyphemos',
                          i: 'polyphemos',
                          alt: 'Polyphemus',
                          rank: '0',
                          parents: 'Poseidon, Thoosa',
                          desc:
                            'A man-eating Cyclops who was blinded by the hero Odysseus',
                        },
                        {
                          label: 'The 7 Heliadae',
                        },
                      ],
                    },
                    {
                      label: 'Zeus',
                      i: 'zeus',
                      rank: '2',
                      parents: 'Cronus, Rheia',
                      desc:
                        'The King of the Gods, greatest of the twelve Olympians. He was the god of the heavens, weather, fate, and kings. His weapon was the fiery thunderbolt.',
                      children: [
                        {
                          label: 'Aeacus',
                          i: 'aiakos',
                          alt: 'Aiakos',
                          rank: '0',
                          parents: 'Zeus, Aegina',
                          desc:
                            'One of the three Judges of the Underworld. He was a king of Aigina appointed to this position after death.',
                        },
                        {
                          label: 'Aegipan',
                          alt: 'Aigipan',
                          rank: '0',
                          parents: 'Zeus, Aega',
                          desc:
                            'The fish-goat god. When Typhon attacked Olympus Aegipan suggested the gods flee to Egypt and hide there in the form of animals. In this exodus he took the form of a goat with the tail of a fish. Later he helped to free the captured Zeus and was placed amongst the stars as the constellation Capricorn.',
                        },
                        {
                          label: 'Aethlius',
                          rank: '0',
                          parents: 'Zeus, Protogenia',
                        },
                        {
                          label: 'Apollo',
                          i: 'apollon',
                          alt: 'Apollon',
                          rank: '2',
                          parents: 'Zeus, Leto',
                          desc:
                            'The god of prophecy, music and healing and one of the twelve great Olympian gods. His arrows brought plague to men.',
                        },
                        {
                          label: 'Arcesius (w/ Chalcomedusa)',
                          children: [
                            {
                              label: 'Odysseus',
                            },
                          ],
                        },
                        {
                          label: 'Ares',
                          i: 'ares',
                          rank: '0',
                          parents: 'Zeus, Hera',
                          desc:
                            'The god of war and one of the twelve great Olympian gods.',
                          children: [
                            {
                              label: 'Deimos',
                              i: 'deimos',
                              alt: 'Deimus',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                              desc:
                                'The god of terror and an attendant of Ares.',
                            },
                            {
                              label: 'The Erotes',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                              desc:
                                'Gods and goddesses of the various aspects of erotic love.',
                              children: [
                                {
                                  label: 'Anteros',
                                  i: 'anteros',
                                  rank: '0',
                                  parents: 'Ares, Aphrodite',
                                  desc: 'The god of returned or mutual love. ',
                                },
                                {
                                  label: 'Harmonia',
                                  i: 'harmonia',
                                  rank: '0',
                                  parents: 'Ares, Aphrodite',
                                  desc:
                                    'The goddess of harmony and unity. She was married to the mortal Cadmus in a marriage ceremony attended by all the gods. After ruling Thebes for many years the two were transported to Elysium and a life of bliss.',
                                },
                                {
                                  label: 'Hedylogos',
                                  i: 'hedylogos',
                                  alt: 'Hedylogus',
                                  rank: '0',
                                  parents: 'Ares, Aphrodite',
                                  desc:
                                    'The god of sweet-talk, one of the winged Erotes (Love-Gods).',
                                },
                                {
                                  label: 'Himeros',
                                  i: 'himeros',
                                  alt: 'Himerus',
                                  rank: '0',
                                  parents: 'Ares, Aphrodite',
                                  desc:
                                    'The god of sexual desire, one of the winged Erotes (Love Gods). He was present at the birth of Aphrodite and became one of her constant companions.',
                                },
                                {
                                  label: 'Photos',
                                  i: 'photos',
                                  rank: '0',
                                  parents: 'Ares, Aphrodite',
                                },
                              ],
                            },
                            {
                              label: 'Hermaphroditos',
                              i: 'hermaphroditos',
                              alt: 'Hermaphroditus',
                              rank: '0',
                              parents: 'Hermes, Aphrodite',
                              desc:
                                'Loved by the nymph Salmacis, she prayed they might never be separated. The gods took her request literally and merged their forms into one - part male, part female. He was numbered amongst the winged Erotes.',
                            },
                            {
                              label: 'Phobos',
                              i: 'phobos',
                              alt: 'Phobus',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                              desc:
                                'The daemon personification of fear. He was a son and battlefield companion of the god Ares.',
                            },
                          ],
                        },
                        {
                          label: 'Artemis',
                          i: 'artemis',
                          rank: '2',
                          parents: 'Zeus, Leto',
                          desc:
                            'The goddess of hunting, wild animals, childbirth and children. She brought sudden death to women and girls with her arrows. She was one of the twelve great Olympian gods.',
                        },
                        {
                          label: 'Athene',
                          i: 'athene',
                          alt: 'Athena',
                          rank: '2',
                          parents: 'Zeus, Metis',
                          desc:
                            'Goddess of war and crafts who sprung fully grown and armed from the head of Zeus. She was one of the twelve great Olympian gods.',
                        },
                        {
                          label: 'Castor',
                          i: 'castor',
                          alt: 'Kastor',
                          rank: '0',
                          parents: 'Zeus, Leda',
                        },
                        {
                          label: 'Dardanus',
                          rank: '0',
                          parents: 'Zeus, Electra',
                          desc:
                            'Founder of the city of Dardania (the later, ill-fated city of Troy); he gave his name to the Dardanelles, once called the Hellespont',
                        },
                        {
                          label: 'Dionysos',
                          i: 'dionysos',
                          rank: '0',
                          parents: 'Zeus, Semele',
                          desc:
                            'Also known as Bacchus in both Greek and Roman mythology, he is the god of wine and the youngest of the twelve Olympians. Dionysus had an unusual birth that evokes the difficulty in fitting him into the Olympian pantheon. The goddess Hestia relinquished her position to him when he entered Olympus after spending many years wandering the world establishing his cult.',
                          children: [
                            {
                              label: 'Iakkhos',
                              i: 'iakkhos',
                              alt: 'Iacchus',
                              rank: '0',
                              parents: 'Dionysos, Aura',
                              desc:
                                'The torch-bearing god of the processions of the Eleusinian Mysteries and its ritual cry iakkhe. He was a daemon attendant of the goddess Demeter.',
                            },
                            {
                              label: 'Telete',
                              rank: '0',
                              parents: 'Dionysos, Nikaia',
                              desc:
                                'The female personification of the Dionysian mystery rites, and initiation into the orgiastic cult.',
                            },
                            {
                              label: 'Komos',
                              i: 'komos',
                              alt: 'Comus',
                              rank: '0',
                              parents: 'Dionysos, Kirke',
                              desc:
                                'The god of banquets and festivity, he was a son of Hermes and Circe. Komos could change the faces of men to beasts in the festivities.',
                            },
                            {
                              label: 'Priapos',
                              i: 'priapos',
                              alt: 'Priapus',
                              rank: '0',
                              parents:
                                'Dionysos, AphroditeThe rustic god of garden fertility. He was an ugly little satyr with enormous genitals.',
                            },
                          ],
                        },
                        {
                          label: 'The Dryads',
                          rank: '0',
                          parents: 'Zeus, Gaia',
                          desc:
                            'Female spirits of nature (nymphs), who preside over the groves and forests',
                        },
                        {
                          label: 'Elleithyia',
                          rank: '0',
                          parents: 'Zeus, Hera',
                        },
                        {
                          label: 'The Graces',
                          i: 'graces',
                          alt: 'Aglaia',
                          rank: '0',
                          parents: 'Zeus, Eurynome',
                          desc:
                            'Also called the three Charites, the goddesses who bestowed beauty and charm and who were themselves the embodiment of both',
                          children: [
                            {
                              label: 'Thalia',
                              i: 'thalia',
                              alt: 'Thaleia',
                              rank: '0',
                              parents: 'Zeus, Euronyme',
                              desc:
                                'One of the three Graces (or Charities), "good cheer"',
                            },
                            {
                              label: 'Euphrosyne',
                              i: 'euphrosyne',
                              rank: '0',
                              parents: 'Zeus, Euronyme',
                              desc:
                                'The goddess of mirth and merriment, one of the three Charites',
                            },
                            {
                              label: 'Aglaea',
                              i: 'aglaea',
                              alt: 'Aglaia',
                              rank: '0',
                              parents: 'Zeus, Eurynome',
                              desc:
                                'Goddess of beauty and one of the three Charites. She was married to Hephaestus ',
                            },
                          ],
                        },
                        {
                          label: 'The Hamadryads',
                          rank: '0',
                          parents: 'Zeus, Gaia',
                          desc:
                            'Tree nymphs who lived and died with the tree they inhabited',
                        },
                        {
                          label: 'Hebe',
                          i: 'hebe',
                          rank: '0',
                          parents: 'Zeus, Hera',
                          desc:
                            'The goddess of youth and the wife of Herakles after his ascension to Olympus.',
                        },
                        {
                          label: 'Helen of Troy',
                          rank: '0',
                          parents: 'Zeus, Leda',
                        },
                        {
                          label: 'Hephaestus',
                          i: 'hephaistos',
                          alt: 'Hephaistos',
                          rank: '0',
                          parents: 'Zeus, Hera',
                          desc:
                            'The god of fire, volcanism, smiths and craftsmen. He was one of the twelve great Olympian gods.',
                        },
                        {
                          label: 'Herakles',
                          i: 'herakles',
                          alt: 'Heracles',
                          rank: '0',
                          parents: 'Zeus, Alcmene',
                          desc:
                            'The greatest of the Greek heroes, famed for his twelve labours. On his funeral pyre he was consumed by lightning and apotheosized by Zeus into a god on Olympus. He there married Hebe, goddess of youth.',
                        },
                        {
                          label: 'Hermes',
                          i: 'hermes',
                          rank: '2',
                          parents: 'Zeus, Maia',
                          desc:
                            'The god of animal husbandry and fertility, trade, messengers, and travel. He was one of the twelve great Olympian gods and the messenger of Zeus, King of the Gods.',
                          children: [
                            {
                              label: 'Hermaphroditos',
                              i: 'hermaphroditos',
                              alt: 'Hermaphroditus',
                              rank: '0',
                              parents: 'Hermes, Aphrodite',
                              desc:
                                'Loved by the nymph Salmacis, she prayed they might never be separated. The gods took her request literally and merged their forms into one - part male, part female. He was numbered amongst the winged Erotes.',
                            },
                          ],
                        },
                        {
                          label: 'The Horai',
                          i: 'horai',
                          parents: 'Zeus, Themis',
                          desc:
                            'The Horae (the Hours) are the goddesses of the seasons (the Greek had only three seasons; spring, summer and winter). They are called Thallo, Auxo and Carpo, names which denote budding, growth and ripening.  The twelve Horai, who were daughters of Helios, were not always clearly distinguishable from the three Horai of the seasons, who were also described as overseeing the paths of the sun.',
                          children: [
                            {
                              label: 'Dike',
                              i: 'dike',
                              alt: 'Dice',
                              rank: '0',
                              parents: 'Zeus, Themis',
                              desc:
                                'The goddess of justice. She was one of the three Horae (Seasons)',
                            },
                            {
                              label: 'Eirene',
                              rank: '0',
                              parents: 'Zeus, Themis',
                              desc:
                                'One of the three Horae, the goddess of peace and spring',
                            },
                            {
                              label: 'Eunomia',
                              rank: '0',
                              parents: 'Zeus, Themis',
                              desc:
                                'The goddess of good order and spring pastures. She was one of the three Horae (Seasons) and an attendant of the goddess Aphrodite',
                            },
                          ],
                        },
                        {
                          label: 'Iasion',
                          rank: '0',
                          parents: 'Zeus, Electra',
                          desc:
                            'A springtime consort of the goddess Demeter and patron-god of her Samothracian Mysteries.',
                        },
                        {
                          label: 'Lacedaemon',
                          rank: '0',
                          parents: 'Zeus, Taygete',
                          desc:
                            'Born when Zeus took advantage of Taygete when she was unconscious ',
                        },
                        {
                          label: 'Minos',
                          i: 'minos',
                          rank: '0',
                          parents: 'Zeus, Europa',
                          desc:
                            'A lawmaking King of Crete who was appointed a judge of the dead in the underworld.',
                        },
                        {
                          label: 'Moirae (Fates)',
                          i: 'moirae',
                          alt: 'Moirai',
                          rank: '0',
                          parents: 'Zeus, Themis',
                          desc: 'The female deities who supervised fate',
                          children: [
                            {
                              label: 'Atropos',
                              alt: 'Atropus',
                              rank: '0',
                              parents: 'Zeus, Themis',
                              desc:
                                'Atropos was one of the three Moirae, the Fates, who cut the thread or web of life',
                            },
                            {
                              label: 'Klotho',
                              alt: 'Clotho',
                              rank: '0',
                              parents: 'Zeus, Themis',
                              desc:
                                'The youngest of the three Fates, who spins the thread of human life',
                            },
                            {
                              label: 'Lakhesis',
                              alt: 'Lachesis',
                              rank: '0',
                              parents: 'Zeus, Themis',
                              desc:
                                'One of the three Fates (Moirae), the :Disposer"; he measures the length of the thread of human life spun by Klotho and determines its destiny',
                            },
                          ],
                        },
                        {
                          label: 'The Muses',
                          i: 'muses',
                          alt: 'Terpsikhore',
                          rank: '0',
                          parents: 'Zeus, Mnemosyne',
                          desc: 'The Muse of choral dance and song',
                          children: [
                            {
                              label: 'Calliope',
                              i: 'kalliope',
                              alt: 'Kalliope',
                              rank: '0',
                              parents: 'Zeus, Mnemosyne',
                              desc:
                                'The eldest of the Muses. She was muse of epic poetry',
                            },
                            {
                              label: 'Clio',
                              alt: 'Kleio',
                              rank: '0',
                              parents: 'Zeus, Mnemosyne',
                              desc: 'The muse of history',
                            },
                            {
                              label: 'Erato',
                              rank: '0',
                              parents: 'Zeus, Mnemosyne',
                              desc: 'The Muse of lyric love poetry.',
                            },
                            {
                              label: 'Euterpe',
                              rank: '0',
                              parents: 'Zeus, Mnemosyne',
                              desc: 'The Muse of lyric poetry',
                            },
                            {
                              label: 'Melpomene',
                              rank: '0',
                              parents: 'Zeus, Mnemosyne',
                              desc: 'The Muse of tragedy',
                            },
                            {
                              label: 'Polyhymnia',
                              i: 'polyhymnia',
                              alt: 'Polyhymnia',
                              rank: '0',
                              parents: 'Zeus, Mnemosyne',
                              desc: 'The Muse of hymns',
                            },
                            {
                              label: 'Terpsichore',
                              i: 'terpsikhore',
                              alt: 'Terpsikhore',
                              rank: '0',
                              parents: 'Zeus, Mnemosyne',
                              desc: 'The Muse of choral dance and song',
                            },
                            {
                              label: 'Thalia 1',
                              i: 'thalia',
                              alt: 'Thaleia',
                              rank: '0',
                              parents: 'Zeus, Mnemosyne',
                              desc: 'The Muse of comedy and pastoral poetry',
                            },
                            {
                              label: 'Urania',
                              alt: 'Ourania',
                              rank: '0',
                              parents: 'Zeus, Mnemosyne',
                              desc: 'The Muse of astronomy',
                            },
                          ],
                        },
                        {
                          label: 'Myrmidon',
                          rank: '0',
                          parents: 'Zeus, Eurymedusa',
                        },
                        {
                          label: 'The Oreads',
                          rank: '0',
                          parents: 'Zeus, Gaia',
                          desc:
                            'The Greek nymphs of mountains and grottoes (from the Greek oros "mountain"). They belong to the retinue of Aphrodite',
                        },
                        {
                          label: 'Pandia',
                          alt: 'Pandeia',
                          rank: '0',
                          parents: 'Zeus, Selene',
                          desc:
                            'The goddess of brightness; a minor goddess whose name means "all bright"',
                        },
                        {
                          label: 'Persephone',
                          i: 'persephone',
                          rank: '0',
                          parents: 'Zeus, Demeter',
                          desc:
                            'The Queen of the underworld. She was a spring-time goddess, the only daughter of Demeter, who was abducted to the underworld by Hades. Her mother brought famineto the world until Zeus agreed to let her return for part of the year.',
                          children: [
                            {
                              label: 'Zagreus',
                              alt: 'Zagreos',
                              rank: '0',
                              parents: 'Zeus, Persephone',
                              desc:
                                'The first-born son of Zeus who the god seated on the throne of heaven armed with thunderbolts when he was but a babe. The Titan gods stole into Olympus, distracted the child, and dismembered him with their bloody knives. Athena recovered his heart, and the god was reborn through Semele as Dionysus.',
                            },
                          ],
                        },
                        {
                          label: 'Perseus',
                          i: 'perseus',
                          rank: '0',
                          parents: 'Zeus, Danae',
                        },
                        {
                          label: 'Polydeuces',
                          i: 'polydeuces',
                          rank: '0',
                          parents: 'Zeus, Leda',
                        },
                        {
                          label: 'Rhadamanthys',
                          i: 'rhadamanthys',
                          rank: '0',
                          parents: 'Zeus, Europa',
                          desc:
                            'One of the three judges of the dead in the underworld and the Lord of the Islands of the Blessed.',
                        },
                        {
                          label: 'Sarpedon',
                          i: 'sarpedon',
                          rank: '0',
                          parents: 'Zeus, Europa',
                        },
                        {
                          label: 'Tantalus',
                          rank: '0',
                          parents: 'Zeus, Plouto',
                        },
                        {
                          label: 'Thriae',
                          rank: '0',
                          parents: 'Zeus, Themis',
                          desc:
                            'Lesser goddesses of nature who can foresee the future or foretell the unknown by inspiration, magic, signs, or omens.  The word Thriae means "pebbles," because the future was foretold by tossing pebbles',
                        },
                        {
                          label: 'Zagreus',
                          alt: 'Zagreos',
                          rank: '0',
                          parents: 'Zeus, Persephone',
                          desc:
                            'The first-born son of Zeus who the god seated on the throne of heaven armed with thunderbolts when he was but a babe. The Titan gods stole into Olympus, distracted the child, and dismembered him with their bloody knives. Athena recovered his heart, and the god was reborn through Semele as Dionysus.',
                        },
                      ],
                    },
                  ],
                },
                {
                  label: 'Tethys',
                  i: 'tethys',
                  rank: '1',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'The Titan goddess of the subterranean sources of fresh-water and the nursing of the young. She was the wife of the Titan Okeanus and bore him three-thousand fresh-water Nymphs and innumerable Rivers. ',
                  children: [
                    {
                      label: 'Okeanides',
                      i: 'okeanides',
                      alt: 'Oceanides',
                      rank: '0',
                      parents: 'Okeanos, Tethys',
                      desc:
                        'Nymphs of the ocean. There were also nymphs of springs and rivers (Naiads), clouds (Nephelai), cool breezes (Aurai), meadows (Limoniads) and groves (Alseides). The eldest of them were lower ranked Titan goddesses.',
                      children: [
                        {
                          label: 'Admete',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'An Okeanis whose name means "the unbroken" or "unwedded". She may have been the Naias Nymphe of a wild mountain stream, or the Nephele of wild clouds and rain. Admete was perhaps a goddess of unwedded maidens, her sister Zeuxo, representing the yoke of marriage',
                        },
                        {
                          label: 'Akaste',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'An Okeanis whose name means "unstable" or "irregular". She may have been the Naias Nymphe of an erratically flowing spring or stream, or a Nephele of unpredictable rainfall. Akaste might also have been a gooddess of unpredictable behavior',
                        },
                        {
                          label: 'Amphiro',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'An Okeanis named "the surrounding flow". She may have been a Naias of a stream of Nephele of rain',
                        },
                        {
                          label: 'Amphitrite',
                          i: 'amphitrite',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis goddess of the sea. (She was usually numbered amongst the Nereides rather than Okeanides)',
                        },
                        {
                          label: 'Asia (Continent Asia)',
                          alt: 'Asie',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis Nymphe of the region of Asia (or rather Anatolian peninsular). She was the wife or mother of the Titan Prometheus. Her sister was Europe',
                          children: [
                            {
                              label: 'Calypso',
                              alt: 'Kalypso',
                              rank: '0',
                              parents: 'Atlas, Asia',
                              desc:
                                'A goddess-nymph of the island Ogygia. She detained the hero Odysseus on her island for many years.',
                            },
                            {
                              label: 'Maera',
                              alt: 'Maira',
                              rank: '0',
                              parents: 'Atlas, Asia',
                              desc:
                                'A star-nymph daughter of the Titan Atlas, and wife of the Arcadian King Tegeates. She was the goddess of the scorching dog-star Sirios.',
                            },
                          ],
                        },
                        {
                          label: 'Asterope',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc: 'The "starry-eyed"; an Oceanid loved by Zeus',
                        },
                        {
                          label: 'Beroe',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis Nymphe of the city of Beroe (Beruit) in Lebanon',
                        },
                        {
                          label: 'Daeira (Knowledge)',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'An Okeanis Nymphe named "the knowing" or "learned". She was a goddess of the town of Eleusis, perhaps the Naias of the sacred town well',
                        },
                        {
                          label: 'Dione',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis Nymphe "heavenly" or "divine" was a goddess of the oracle of Dodona in Thesprotia.  Some say she was the mother of the goddess Aphrodite by Zeus.  Dione was probably the same as the Okeanis Dodone, an eponymous goddess of the shrine',
                        },
                        {
                          label: 'Dodone',
                          alt: 'Dodona',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis Nymphe of Dodona in Thesprotia. She may have been the Naias of a local spring or well, and was perhaps the same as the Okeanis Dione',
                        },
                        {
                          label: 'Doris',
                          i: 'doris',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Oceanid goddess of the mingling of fresh water with the brine. She was the wife of the sea-god Nereus, her half-brother, and mother of the fifty Nereides.',
                          children: [
                            {
                              label: 'The Nereides',
                              i: 'nereides',
                              rank: '0',
                              parents: 'Nereus, Doris',
                              desc:
                                'The fifty daughters who dwell in the Mediterranean Sea, these beautiful women were always friendly and helpful towards sailors fighting perilous storms. They are believed to be able to prophesize. They belong to the retinue of Poseidon',
                            },
                          ],
                        },
                        {
                          label: 'Eidyia',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "seeing" or "knowing" was the wife of King Aeetes of Kolkhis. She was apparently a goddess connected with the power of witchcraft',
                        },
                        {
                          label: 'Elektra (Amber-colour)',
                          shortlabel: 'Elektra',
                          alt: 'Electra',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Oceanid of amber-light. She was married to the wondrous sea-god Thaumas and bore him Iris, the rainbow, and the whirlwind Harpies.',
                        },
                        {
                          label: 'Ephyra',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The eponymous Oceanid nymph of the town of Ephyra (Corinth)',
                        },
                        {
                          label: 'Eudora',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "good-gifts" was perhaps a Nephele of good downfalls of rain or the Naias of a generously flowing spring',
                        },
                        {
                          label: 'Europe (Continent Europe)',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis Nymphe of the continent of Europe. Her sister was Asia',
                        },
                        {
                          label: 'Eurynome 1',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis Nymphe of "broad-pastures". She was the mother of the Kharites by Zeus. Eurynome was perhaps one of the Epimelides, Nymphai of grazing pasture',
                        },
                        {
                          label: 'Eurynome 2',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis Nymphe of "wide-rulership". She was the wife of the Titan Ophion',
                        },
                        {
                          label: 'Galaxaura',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis Nymphe "milky breeze" was probably the Aura or Nephele of the mist-clearing breeze',
                        },
                        {
                          label: 'Hagno',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "holy" was one of the nurses of the infant god Zeus. She was the Naias of the Arkan spring Hagno, whose waters generated the clouds of a Nephele',
                        },
                        {
                          label: 'Hesione',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "knowing" or "foresight" was a goddess of foreknowledge. She was the wife of the Titan Prometheus (forethought). Hesione was also known as Pronoia',
                        },
                        {
                          label: 'Hippo',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis Nymphe "horse" was the Naias of a stream or Aura of breezes - both winds and waters were often likened to horses',
                        },
                        {
                          label: 'Hyale',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "crystal" or "clear like crystal" was a Nephele of rain. She was on the attendant Nymphs of Artemis',
                        },
                        {
                          label: 'Iakhe',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis of the ritual cry of joy "iakhe". She was a goddess of the Eleusinian Mysteries',
                        },
                        {
                          label: 'Ianeira',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'An Okeanis Nymphe, perhaps the goddess of the Ionian tribe of Greeks. Her sister Doris presided over the Dorians',
                        },
                        {
                          label: 'Ianthe (Violet-colour)',
                          shortlabel: 'Ianthe',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis of "violet flowers" or the colour "violet". She may have been a Nephele of the violet tinged clouds of dawn, or an Anthousa (flower-nymph) of violets',
                        },
                        {
                          label: 'Kallirhoe',
                          i: 'kallirhoe',
                          alt: 'Callirhoe',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "fair-flowing" was either the Naias of a good flowing spring or Nephele (Cloud) of good downpours. She was the mother of the Erythian (Spanish) giant Geryon.',
                        },
                        {
                          label: 'Kalypso',
                          alt: 'Calypso',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'An Okeanis whose name means "hidden", "covered"or "veiled". She may have been the Naias of a covered or hidden spring or the Aura of invisible breezes',
                        },
                        {
                          label: 'Kamarina',
                          alt: 'Camarina',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis Nymphe of the city of Kamarina in Sicily. She was probably the Naias of the town fountain or well',
                        },
                        {
                          label: 'Kapheira',
                          alt: 'Capheira',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "storm-breath" was probably the Aura of strong winds. She was a nurse of the god Poseidon',
                        },
                        {
                          label: 'Kerkeis',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc: 'One of the Okeanides',
                        },
                        {
                          label: 'Keto',
                          alt: 'Ceto',
                          rank: '0',
                          parents: 'Pontos, Gaia',
                          desc:
                            'An ancient Sea-Goddess. She personified the dangers of the sea. Most of the monsters of mythology were descended from her.',
                          children: [
                            {
                              label: 'Echidna',
                              alt: 'Ekhidna',
                              rank: '0',
                              parents: 'Keto alone.',
                              desc:
                                'A deadly she-dragon with the upper body of a beautiful nymph, and the tail of a serpent in place of legs. The immortal Echidna married the hundred-headed giant Typhon and spawned a brood of terrible monsters.',
                            },
                            {
                              label: 'The Gorgons',
                              rank: '0',
                              parents: 'Phorkys, Keto',
                              desc:
                                'A monstrous feminine creature whose appearance would turn anyone who laid eyes upon it to stone. Later there were three of them: Euryale ("far-roaming"), Sthenno ("forceful"), and Medusa ("ruler"), the only one of them who was mortal. ',
                              children: [
                                {
                                  label: 'Euryale',
                                  rank: '0',
                                  desc: 'One of the two immortal Gorgons.',
                                },
                                {
                                  label: 'Medusa',
                                  i: 'medousa',
                                  alt: 'Medousa',
                                  rank: '0',
                                  desc:
                                    'A serpent-haired Gorgon who was slain by the hero Perseus. When she was beheaded her two children by Poseidon were born from her bloody neck.',
                                  children: [
                                    {
                                      label: 'Pegasus',
                                      i: 'pegasos',
                                      alt: 'Pegasos',
                                      rank: '0',
                                      parents: 'Poseidon, Medusa',
                                      desc:
                                        'A winged horse which sprung from the neck of Medusa after her decapitation. He was tamed by the hero Bellerophon who rode him into battle against the Amazons and the monster Chimera.',
                                    },
                                    {
                                      label: 'Chrysaor',
                                      alt: 'Khrysaor',
                                      rank: '0',
                                      parents: 'Poseidon, Medusa',
                                      desc: 'A giant, "Golden Falchion".',
                                      children: [
                                        {
                                          label: 'Echidna',
                                          alt: 'Ekhidna',
                                          rank: '0',
                                          parents: 'Keto alone.',
                                          desc:
                                            'A deadly she-dragon with the upper body of a beautiful nymph, and the tail of a serpent in place of legs. The immortal Echidna married the hundred-headed giant Typhon and spawned a brood of terrible monsters.',
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  label: 'Sthenno',
                                  rank: '0',
                                },
                              ],
                            },
                            {
                              label: 'Graeae',
                              i: 'graeae',
                              rank: '0',
                              desc:
                                'The three "old women" or "gray ones," they were gray-haired from birth and have only one eye and one tooth, which they share among them. They are Enyo ("horror"), Deino ("dread") and Pemphredo ("alarm")',
                              children: [
                                {
                                  label: 'Deino',
                                  rank: '0',
                                  parents: 'Phorkys, Keto',
                                  desc: 'One of the old hag Graeae.',
                                },
                                {
                                  label: 'Enyo',
                                  rank: '0',
                                  parents: 'Phorkys, Keto',
                                  desc:
                                    'The goddess of war, a battlefield companion of Ares.',
                                },
                                {
                                  label: 'Pemphredo',
                                  rank: '0',
                                  parents: 'Phorkys, Keto',
                                  desc: 'One of old hag Graeae.',
                                },
                              ],
                            },
                            {
                              label: 'Thoosa',
                              rank: '0',
                              parents: 'Porchys, Keto',
                              desc:
                                'A sea nymph loved by the god Poseidon. She was the mother of the Cyclops Polyphemus.',
                              children: [
                                {
                                  label: 'Polyphemos',
                                  i: 'polyphemos',
                                  alt: 'Polyphemus',
                                  rank: '0',
                                  parents: 'Poseidon, Thoosa',
                                  desc:
                                    'A man-eating Cyclops who was blinded by the hero Odysseus',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          label: 'Khariklo',
                          i: 'khariklo',
                          alt: 'Chariklo',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'A Okeanis Nymphe of Mount Pelion in Thessalia. She was the wife of the wise kentauros (centaur) Kheiron',
                        },
                        {
                          label: 'Khryseis (Gold-colour)',
                          shortlabel: 'Khryseis',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "golden" or "golden-yellow" was probably either a Nephele of the golden-tinged clouds of sunset, or the Naias of a gold-producing mountain-spring',
                        },
                        {
                          label: 'Klymene 1',
                          i: 'klymene',
                          alt: 'Clymene',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis goddess of fame and infamy was the wife of the Titan Iapetos',
                          children: [
                            {
                              label: 'Atlas',
                              i: 'atlas',
                              rank: '1',
                              desc:
                                'The Titan-god of daring. He led the Titan-army in the war against the gods and as punishment was condemned to bear the heavens upon his shoulders.',
                              children: [
                                {
                                  label: 'Calypso',
                                  alt: 'Kalypso',
                                  rank: '0',
                                  parents: 'Atlas, Asia',
                                  desc:
                                    'A goddess-nymph of the island Ogygia. She detained the hero Odysseus on her island for many years.',
                                },
                                {
                                  label: 'The Hesperides',
                                  rank: '0',
                                  parents: 'Atlas, Hesperius',
                                  desc:
                                    'The Hesperides are Aegle, Arethusa, Erytheia and Hesperia, nymphs who live in a beautiful garden.  The Hesperides are Aegle, Arethusa, Erytheia and Hesperia',
                                  i: 'hesperides',
                                },
                                {
                                  label: 'The Hyades',
                                  rank: '0',
                                  parents: 'Atlas, Aethra',
                                  desc:
                                    'The sisters of the Pleiades.  In some traditions they were regarded as the nurses of either Dionysus or the infant Zeus. As a reward, they were placed in the sky as a constellation',
                                  children: [
                                    {
                                      label: 'Ambrosia',
                                      rank: '0',
                                      parents: 'Atlas, Aethra',
                                      desc: 'One of the Hyades',
                                    },
                                    {
                                      label: 'Cleeia',
                                      rank: '0',
                                      parents: 'Atlas, Aethra',
                                      desc: 'One of the Hyades',
                                    },
                                    {
                                      label: 'Coronis',
                                      alt: 'Koronis',
                                      rank: '0',
                                      parents: 'Atlas, Aethra',
                                      desc: 'One of the starry Hyades.',
                                    },
                                    {
                                      label: 'Eudora',
                                      rank: '0',
                                      parents: 'Atlas, Aethra',
                                      desc: 'One of the starry Hyades',
                                    },
                                    {
                                      label: 'Pedile',
                                      rank: '0',
                                      parents: 'Atlas, Aethra',
                                      desc: 'One of the Hyades',
                                    },
                                    {
                                      label: 'Phaeo',
                                      rank: '0',
                                      parents: 'Atlas, Aethra',
                                      desc: 'One of the Hyades',
                                    },
                                    {
                                      label: 'Phaesla',
                                      rank: '0',
                                      parents: 'Atlas, Aethra',
                                      desc: 'One of the Hyades',
                                    },
                                    {
                                      label: 'Phyto',
                                      rank: '0',
                                      parents: 'Atlas, Aethra',
                                      desc: 'One of the Hyades',
                                    },
                                    {
                                      label: 'Polyxo',
                                      rank: '0',
                                      parents: 'Atlas, Aethra',
                                      desc: 'One of the Hyades',
                                    },
                                    {
                                      label: 'Theone',
                                      rank: '0',
                                      parents: 'Atlas, Aethra',
                                      desc: 'One of the Hyades',
                                    },
                                  ],
                                },
                                {
                                  label: 'Hyas',
                                  rank: '0',
                                  parents: 'Atlas, Aethra',
                                  desc:
                                    'The water-bearing son of the Titan Atlas who was killed by a lion and placed amongst the stars as the constellation Aquarius.',
                                },
                                {
                                  label: 'Maera',
                                  alt: 'Maira',
                                  rank: '0',
                                  parents: 'Atlas, Asia',
                                  desc:
                                    'A star-nymph daughter of the Titan Atlas, and wife of the Arcadian King Tegeates. She was the goddess of the scorching dog-star Sirios.',
                                },
                                {
                                  label: 'The Pleiades',
                                  rank: '0',
                                  parents: 'Atlas, Pleione',
                                  desc:
                                    'The virgin companions of Artemis. When Orion, a beautiful hunter, pursued them and their mother, they prayed to the gods for rescue. The gods answered they prayer and they were changed into doves, and later into stars. Zeus placed them in the sky where they formed a part of the constellation of Taurus',
                                  children: [
                                    {
                                      label: 'Alcyone',
                                      alt: 'Alkyone',
                                      rank: '0',
                                      desc:
                                        'One of the Pleiades. She was loved by Poseidon.',
                                    },
                                    {
                                      label: 'Celaeno',
                                      alt: 'Kelaino',
                                      rank: '0',
                                      desc:
                                        'One of the starry Pleiad nymphs. She was loved by the god Poseidon.',
                                    },
                                    {
                                      label: 'Maia',
                                      i: 'maia',
                                      rank: '0',
                                      desc:
                                        'A Pleiad star-nymph of Mount Cyllene in Arcadia. She was the mother of the god Hermes by Zeus.',
                                    },
                                    {
                                      label: 'Merope',
                                      rank: '0',
                                      desc:
                                        'One of the Pleiad star-nymphs, the wife of the impious Corinthian King Sisyphos. Blushing in shame for her husband"s crimes, her star shone only faintly.',
                                    },
                                    {
                                      label: 'Sterope',
                                      rank: '0',
                                      desc:
                                        'One of the starry Pleiad nymphs. She was loved by the god Ares.',
                                    },
                                    {
                                      label: 'Taygete',
                                      rank: '0',
                                      desc:
                                        'The starry Pleiad nymph of Mount Taygetus who was loved by Zeus. She was the ancestress of the kings of Sparta.',
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              label: 'Epimethus',
                              i: 'epimethus',
                              rank: '0',
                              parents: 'Iapetus, Clymene',
                              desc:
                                'Epimetheus ("afterthought") foolishly ignored his brother Prometheus\' warnings to beware of any gifts from Zeus. He accepted Pandora as his wife, thereby bringing ills and sorrows to the world. Epimetheus was made up by the Greeks as the antipode of his brother Prometheus ("forethought").',
                            },
                            {
                              label: 'Menoetius',
                              alt: 'Menoitios',
                              rank: '0',
                              parents: 'Iapetus, Clymene ',
                              desc:
                                'The Titan god of rash anger. He was blasted into Erebus with a thunderbolt by Zeus.',
                            },
                            {
                              label: 'Prometheus',
                              i: 'prometheus',
                              rank: '0',
                              parents: 'Iapetus, Clymene',
                              desc:
                                'The Titan god of forethought and the creator of mankind. He cheated the gods on several occasions on behalf of man, including the theft of fire. As punishment Zeus chained him to the Caucasus mountains and sent an eagle to prey on his ever-regenerating liver. He was later freed by Heracles.',
                            },
                          ],
                        },
                        {
                          label: 'Klymene',
                          i: 'klymene',
                          alt: 'Clymene',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis of fame was the mother of the Phaethon by Helios the sun. She was probably one of the Nephelai. She may be the same as Klytia',
                          children: [
                            {
                              label: 'Phaeton',
                              rank: '0',
                              parents: 'Helios, Clymene',
                              desc:
                                'The son of the sun-god Helios. He induced his father to allow him to drive the chariot of the sun across the heavens for one day. The horses ran wildly out of their course and came close to the earth, threatening to burn it. Zeus noticed the danger and with a thunderbolt he destroyed Phaeton. ',
                            },
                          ],
                        },
                        {
                          label: 'Klytia',
                          alt: 'Clytia',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'One of the Oceanides who fell in love with the sun-god Helius. When he abandoned her she wasted away and was transformed into the sun-gazing heliotrope flower.  She may have been the same as Klymene 2',
                        },
                        {
                          label: 'Krokale',
                          alt: 'Crocale',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "sea-shore" was a Naias Nymphe companion of the goddess Artemis',
                        },
                        {
                          label: 'Leuke',
                          alt: 'Leuce',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'An Okeanis named "the white" who was loved by Haides god of the underworld. She was transformed into the white poplar tree of the nlessed Elysian Fields',
                        },
                        {
                          label: 'Leukippe',
                          alt: 'Leucippides',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "White-Horse" was probably the Nephele or Aura of fast moving clouds, or the Naias of a frothy white spring or mountain stream. Winds and waters were often compared to horses',
                        },
                        {
                          label: 'Libya (Continent Africa)',
                          alt: 'Libye',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Oceanid nymph who gave her name to the continent of Libya (Africa).  She was a sister of Europe and Asia',
                        },
                        {
                          label: 'Melia',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Oceanid nymph wife of the Argive river-god Inachus.  She was probably the Naias of a sweet-water spring, perhaps the same as Melia 2, who was loved by the god Apollon and was the Naias of the Theban spring Ismene',
                        },
                        {
                          label: 'Meliboea 1',
                          alt: 'Meliboia',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "sweet-cattle" was the wife of the early Arkadian King Pelasgos. She was probably either the Naias nymphe of an Arkadian spring or the Epimelis of cattle-grazing pastures',
                        },
                        {
                          label: 'Meliboea 2',
                          alt: 'Meliboia',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'An Okeanis loved by the Syrian River-God Orontes',
                        },
                        {
                          label: 'Melite',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "honey-sweet" was probably the Nymphe of sweet-water spring',
                        },
                        {
                          label: 'Melobosis',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "food of fruit" or "sheep-feeder" was probably one of the Epimelides, Nymphai of grassy pastures or fruit trees',
                        },
                        {
                          label: 'Menestho',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "swift-force" or "strong and fast" was probably the Naias of a full flowing stream, or the Aura of strongly blowing breezes',
                        },
                        {
                          label: 'Merope',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "with face turned" was the mother of Phaethon by the god Helios. She was probably the same as Klymene 2',
                        },
                        {
                          label: 'Metis (Counsel)',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis goddess of wisdom and good-counsel. She was loved by Zeus, who swallowed her to avoid the prophecy that her son would dethrone him. She was probably one of the Nephelai',
                          children: [
                            {
                              label: 'Athene',
                              i: 'athene',
                              alt: 'Athena',
                              rank: '2',
                              parents: 'Zeus, Metis',
                              desc:
                                'Goddess of war and crafts who sprung fully grown and armed from the head of Zeus. She was one of the twelve great Olympian gods.',
                            },
                          ],
                        },
                        {
                          label: 'Neda',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis goddess of the Arkadian River Neda. She was an Arkadian nurse of the infant god Zeus',
                        },
                        {
                          label: 'Nemesis',
                          i: 'nemesis',
                          rank: '0',
                          parents: 'Nyx alone; or Okeanus and Tethys',
                          desc:
                            'The Okeanis goddess of indignation and retribution for hybristic behaviour and undeserved good fortune. After being seduced by Zeus in the form of a swan, she lay the egg from which Helen was hatched. She a daughter of Nyx, but was also called a daughter of Nyx or Zeus.',
                        },
                        {
                          label: 'Nephele 1',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'A Nymphe "cloud" who was the wife of the mortal King Athamas. She rescued her two children from sacrifice by sending a flying golden-fleeced Ram to their aide (a creature reminiscent of a golden cloud)',
                        },
                        {
                          label: 'Nephele 2',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'A Nymphe formed by Zeus in the shape of Hera out of the clouds. She was raped by the criminal Ixion, and bore him the Kentauroi (Centaurs)',
                          children: [
                            {
                              label: 'Nessos',
                              i: 'nessos',
                              alt: 'Nessus',
                              rank: '0',
                              desc:
                                'A centaur ferryman who tried to rape the wife of Heracles, Deianeira, as he was carrying her across his river. Heracles heard her screams and shot him dead with poisoned arrows. The dying centaur tricked the girl into taking a sample of his poisoned blood to use as an aphrodisiac should her husband ever prove unfaithful.',
                            },
                            {
                              label: 'Eurytion',
                              i: 'eurytion',
                              rank: '0',
                              desc:
                                'A Thessalian centaur who attempted to abduct the bride of the Lapith King Peirithous on her wedding day. Most of the centaurs were slain in the battle which ensued.',
                            },
                            {
                              label: 'Hylonome',
                              rank: '0',
                              desc:
                                'A female centaur. She killed herself when her husband the centaur Cyllarus was slain in the battle with the Lapiths.',
                            },
                            {
                              label: 'Petraios',
                              i: 'petraios',
                              rank: '0',
                            },
                            {
                              label: 'Asbolos',
                              i: 'asbolos',
                              rank: '0',
                            },
                            {
                              label: 'Arktos',
                              rank: '0',
                            },
                            {
                              label: 'Oureios',
                              rank: '0',
                            },
                            {
                              label: 'Mimas',
                              rank: '0',
                              desc:
                                'One of the Gigantes who slain in the giant-war by Hephaestus with barage of red-hot metal.',
                            },
                            {
                              label: 'Peukeus',
                              rank: '0',
                            },
                            {
                              label: 'Perimedes',
                              rank: '0',
                            },
                            {
                              label: 'Dryalos',
                              rank: '0',
                            },
                            {
                              label: 'Rhoikos',
                              rank: '0',
                              parents: 'Ouranos, Gaia',
                              desc: 'One of the Gigantes',
                            },
                            {
                              label: 'Hylaios',
                              i: 'hylaios',
                              rank: '0',
                            },
                          ],
                        },
                        {
                          label: 'Nephele 3',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis Nymphe "cloud" was one of the virgin Nephelai attendants of the goddess Artemis',
                        },
                        {
                          label: 'Nymphai Artemis',
                          i: 'artemis',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The fifty youngest Okeanides were handmaidens of the goddess Artemis',
                        },
                        {
                          label: 'The 5 Nysiades',
                          i: 'nysiades',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'Five Okeanides of Mt Nysa in Phoinikia who nursed the god Dionysos and became the first of his Bakkhantes',
                        },
                        {
                          label: 'Okyrhoe',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "swift-flowing" was either a Naias of fast flowing spring, or Nephele of falling rain',
                        },
                        {
                          label: 'Ourania',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The "heavenly-one" was probably an Okeanis Nephele (of the clouds)',
                        },
                        {
                          label: 'Paregoron',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis goddess of consolation and soothing words. She was an attendant of the goddess Aphrodite',
                        },
                        {
                          label: 'Pasithoe',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'An Okeanis whose name means "all-swift". She was probably either the Naias of a fast-flowing spring or an Aura of the swift breeze',
                        },
                        {
                          label: 'Periboia',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "surrounded by cattle" was the wife of the Titan Lelantos. She was probably the Naias of a pasture-feeding stream',
                        },
                        {
                          label: 'Peitho (Persuasion)',
                          i: 'peitho',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Oceanid goddess of persuasion and seductive words. She was the nurse and close companionof the goddess Aphrodite.',
                        },
                        {
                          label: 'Perseis',
                          alt: 'Perse',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'An Okeanis-eponym of Persia and mother by Helios of the eastern despots Aeetes and Perses, and the witches Pasiphae and Kirke. Her name also means "destroyer" who probably was a goddess of the destructive power of witches',
                          children: [
                            {
                              label: 'Aegea',
                              rank: '0',
                              parents: 'Helios, Perse',
                              desc:
                                'Sister to Circe and Pasiphae, and daughter of the sun. When the Titans attacked the gods of Olympus, Gaia placed Aega in a cave to hide her shining loveliness',
                            },
                            {
                              label: 'Aetes',
                              rank: '0',
                              parents: 'Helios, Perse',
                              desc:
                                'King of Colchis;  Aetes is the father of the sorceress Medea.',
                            },
                            {
                              label: 'Circe',
                              i: 'kirke',
                              alt: 'Kirke',
                              rank: '0',
                              parents: 'Helios, Perse',
                              desc:
                                'An immortal witch who dwelt on the island of Aeaea. She turned travellers into beasts with her potions.',
                            },
                            {
                              label: 'Pasiphae',
                              i: 'pasiphae',
                              rank: '0',
                              parents: 'Helios, Perse',
                              desc:
                                'A goddess-witch of the island of Crete, the wife of King Minos. She was filled with an unnatural desire for the Cretan Bull and after mating it conceived the bull-headed Minotaur.',
                            },
                            {
                              label: 'Perses',
                              shortlabel: 'Perses',
                              parents: 'Helios, Perse',
                              rank: '0',
                              desc:
                                'The Titan god of destruction and laying waste.',
                              children: [
                                {
                                  label: 'Hecate',
                                  i: 'hekate',
                                  alt: 'Hekate',
                                  parents: 'Perses, Asteria',
                                  rank: '0',
                                  desc:
                                    'The Titan goddess of witchcraft, ghosts and necromancy. She assisted Demeter in her search for Persephone, and became her minister in Hades.',
                                },
                              ],
                            },
                            {
                              label: 'Phaethusa',
                              alt: 'Paethousa',
                              rank: '0',
                              parents: 'Helios, Perse',
                              desc:
                                'A nymph daughter of the sun-god Helios, and the shepherdess of his flocks on the island of Thrinacie.',
                            },
                          ],
                        },
                        {
                          label: 'Petraie (Stoney-grey-colour)',
                          shortlabel: 'Petraie',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "of the rocks" or "stone-grey" was probably the Naias of a rocky spring, or Nephele of dark grey clouds',
                        },
                        {
                          label: 'Phaino',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "appearing" or "shining" was perhaps the Nephele of the appearance of cloud, or the Naias of a bright spring',
                        },
                        {
                          label: 'Phiale',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "water-pitcher" was one of the companions of the goddess Artemis. She was either a spring Naias or rain-pouring Nephele',
                        },
                        {
                          label: 'Philyre',
                          alt: 'Philyra',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'An Oceanid nymph, daughter of Oceanus and Tethys, loved by the Titan Cronus. When Rhea discovered their rendezvous, he transformed himself into a stallion. From their union, the centaur Chiron was born. When Philyra saw her son, she asked Zeus to transform her into another form, and became a linden tree. Goddess of beauty, perfume, healing, and writing, and the inventor of paper.',
                          children: [
                            {
                              label: 'Chiron',
                              i: 'chiron',
                              alt: 'Kheiron',
                              rank: '0',
                              parents: 'Cronus, Philyra',
                              desc:
                                'An immortal Centaur son of Cronus. He was famed for his wisdom and dwelt in a cave on Mt Pelion where he fostered and trained many of the great heroes.',
                              children: [
                                {
                                  label: 'Ocyrhoe',
                                  alt: 'Okyrhoe',
                                  rank: '0',
                                  parents: 'Chiron, Chariclo',
                                  desc:
                                    'A Naiad nymph of the island of Samos who was pursued by the god Apollon. When she attempted to flee the island by ship he turned the vessel to stone and transformed the pilot into a porpoise.',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          label: 'Pleione (Many)',
                          shortlabel: 'Pleione',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Oceanid nymph wife of the Titan Atlas. She and her seven daughters, the Pleiades, were pursued by the lusty giant Orion for seven years before the gods placed them amongst the stars.',
                          children: [
                            {
                              label: 'The Pleiades',
                              rank: '0',
                              parents: 'Atlas, Pleione',
                              desc:
                                'The virgin companions of Artemis. When Orion, a beautiful hunter, pursued them and their mother, they prayed to the gods for rescue. The gods answered they prayer and they were changed into doves, and later into stars. Zeus placed them in the sky where they formed a part of the constellation of Taurus',
                              children: [
                                {
                                  label: 'Alcyone',
                                  alt: 'Alkyone',
                                  rank: '0',
                                  desc:
                                    'One of the Pleiades. She was loved by Poseidon.',
                                },
                                {
                                  label: 'Celaeno',
                                  alt: 'Kelaino',
                                  rank: '0',
                                  desc:
                                    'One of the starry Pleiad nymphs. She was loved by the god Poseidon.',
                                },
                                {
                                  label: 'Maia',
                                  i: 'maia',
                                  rank: '0',
                                  desc:
                                    'A Pleiad star-nymph of Mount Cyllene in Arcadia. She was the mother of the god Hermes by Zeus.',
                                },
                                {
                                  label: 'Merope',
                                  rank: '0',
                                  desc:
                                    'One of the Pleiad star-nymphs, the wife of the impious Corinthian King Sisyphos. Blushing in shame for her husband"s crimes, her star shone only faintly.',
                                },
                                {
                                  label: 'Sterope',
                                  rank: '0',
                                  desc:
                                    'One of the starry Pleiad nymphs. She was loved by the god Ares.',
                                },
                                {
                                  label: 'Taygete',
                                  rank: '0',
                                  desc:
                                    'The starry Pleiad nymph of Mount Taygetus who was loved by Zeus. She was the ancestress of the kings of Sparta.',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          label: 'Plexaure',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis of the "weaving breeze" was likely one of the Aurai',
                        },
                        {
                          label: 'Plouto (Wealth)',
                          alt: 'Pluto',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis goddess of wealth was probably a Nephele of fertile rains, prospering the agricultural crop',
                        },
                        {
                          label: 'Polydora',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "many gifts" might have been the Nephele of generous downfalls',
                        },
                        {
                          label: 'Pronoia',
                          alt: 'Pronoea',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Nymphe named "foresight" was the wife of the Titan Prometheus. She was a goddess of the shrine of Delphoi, and probably the same as the Okeanis Hesione',
                        },
                        {
                          label: 'Prymno',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "root" or "undermost" was probably the Naias Nymphe of groundwater, or the waters of a deep well',
                        },
                        {
                          label: 'Psekas',
                          alt: 'Psecas',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "rain-shower" was a Nephele companion of the goddess Artemis',
                        },
                        {
                          label: 'Rhanis',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'An Okeanis named "rain-drop". She was one of the Nephelai attendants of the goddess Artemis',
                        },
                        {
                          label: 'Rhodeia (Rose-colour)',
                          shortlabel: 'Rhodeia',
                          alt: 'Rhode',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis named "of the roses" or "rose-coloured" was either an Anthousa flower-nymphe, Naias of a rose-draped spring, or Nephele of the rose-tinged clouds of dawn',
                          children: [
                            {
                              label: 'The 7 Heliadae',
                              rank: '0',
                              parents: 'Helios, Clymene, Rhode',
                              desc:
                                'The Heliadae were the seven sons of Helios, the sun god and the nymph Rhodus, daughter of Poseidon. The names of the seven sons were Ochimus, Cercaphus, Macareus ( or Macar), Actis, Tenages, Triopas, and Candalus. ',
                            },
                          ],
                        },
                        {
                          label: 'Rhodope',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "rosey-eyed" was probably either an Anthousa flower-nymphe of Nephele of the rose-coloured clouds of dawn. A Naiad nymph daughter of the Thracian river-god Strymon. When she and her husband Haemus impersonated Zeus and Hera, the angry gods transformed them into mountains.',
                        },
                        {
                          label: 'Styx (hate)',
                          alt: 'Pallas',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The goddess of the underworld river Styx, eldest of the Oceanids. She brought her children to side with Zeus in the Titan-War, and as reward he made her waters the inviolate oath of the gods.',
                          children: [
                            {
                              label: 'Bia',
                              rank: '0',
                              parents: 'Pallas, Styx',
                              desc:
                                'The goddess of force. She sided with Zeus in the Titan-War and became one of his chief attendants.',
                            },
                            {
                              label: 'Nike',
                              i: 'nike',
                              parents: 'Pallas, Styx',
                              rank: '0',
                              desc:
                                'The goddess of victory who sided with Zeus in the Titan-War and became his constant companion.',
                            },
                            {
                              label: 'Cratos',
                              rank: '0',
                              parents: 'Pallas, Styx',
                              desc:
                                'The personification of strength and power.',
                            },
                            {
                              label: 'Zelus',
                              alt: 'Zelos',
                              parents: 'Pallas, Styx',
                              rank: '0',
                              desc:
                                'The personification of rivalry. He and his three siblings were daemon attendants of the god Zeus.',
                            },
                          ],
                        },
                        {
                          label: 'Telesto (Success)',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis goddess of success and accomplishment. She was probably one of the Nephelai, an ethereal goddess',
                        },
                        {
                          label: 'Theiosa',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'An Okeanis nurse of the infant Zeus in Arkadia',
                        },
                        {
                          label: 'Thoe',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "swift" might have been a Naias, Nephele or Aura Nymphe',
                        },
                        {
                          label: 'Tykhe (Fortune)',
                          i: 'tykhe',
                          alt: 'Tyche',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis goddess of fortune or chance was probably one of the heavenly Nephelai',
                        },
                        {
                          label: 'Xanthe (Yellow-colour)',
                          rank: '0',
                          parents: 'Okeanus, Thetys',
                          desc:
                            'The Okeanis "yellow" or "yellow-brown" was probably either a Naias of a muddy flowing stream, or the Nephele of the yellowed clouds of dawn and dusk',
                        },
                        {
                          label: 'Zeuxos',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'An Okeanis named "the yoked" was probably a goddess of marriage, brides being yoked in marriage. She may have been a Naias or Nephele Nymphe, in the sense of a yoked or tamed horse',
                        },
                      ],
                    },
                    {
                      label: 'Potamoi',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The River god sons of Oceanus. Each river had its own god. They were manlike from the chest upwards, but below were bodied with the serpentine tail of a fish.',
                      children: [
                        {
                          label: 'Aigaios (River of Skheria)',
                          alt: 'Aegaeus',
                          rank: '0',
                          desc:
                            'A river of Scheria (island of the Phaeacians) and its god.',
                        },
                        {
                          label: 'Aisepos (River of Troad)',
                          rank: '0',
                        },
                        {
                          label: 'Akheloios (River of Aitolia)',
                          i: 'akheloios',
                          alt: 'Achelous',
                          rank: '0',
                          desc:
                            'A river of Aetolia and its god. He wrestled Heracles for the hand of Deianeira but lost the contest and with it his horn.',
                        },
                        {
                          label: 'Alpheios (River of Arkadia and Elis)',
                          alt: 'Alpheius',
                          rank: '0',
                          desc:
                            'A river of Elis and its god. He fell in love with the nymph Arethusa and pursued her all the way to the island Ortygia. Artemis then transformed her into a spring to escape him but Alpheius guided his stream under the sea to Sicily so he could forever mingle his waters with hers.',
                        },
                        {
                          label: 'Amnisos (River of Krete)',
                          alt: 'Amnisus',
                          rank: '0',
                          desc: 'A river of Crete and its god.',
                        },
                        {
                          label: 'Anigros (River of Elis)',
                          alt: 'Anigrus',
                          rank: '0',
                          desc: 'A river of Elis and its god.',
                          children: [
                            {
                              label: 'The Anigrides',
                              rank: '0',
                            },
                          ],
                        },
                        {
                          label: 'Askanios (River of Mysia)',
                          alt: 'Ascanius',
                          rank: '0',
                          desc: 'A River of Mysia and its god.',
                        },
                        {
                          label:
                            'Asopos (River of Argos and Boiotia) (w/ Metope)',
                          shortlabel: 'Asopos',
                          alt: 'Asopus',
                          rank: '0',
                          desc:
                            'A river of Boeotia and Argos and its god. He had twenty beautiful daughters, most of whom were carried off by the gods. Asopus pursued Zeus when he abducted Aegina but was driven back by the god"s thunderbolts.',
                          children: [
                            {
                              label: 'Aigina',
                              i: 'aigina',
                              alt: 'Aegina',
                              rank: '0',
                              desc:
                                'A naiad daughter of the river Asopus. She was loved by Zeus who carried her off to the island of Aegina. When her father pursued them Zeus struck him with a thunderbolt.',
                            },
                            {
                              label: 'Salamis',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the river Asopus who was abducted to the island of the same name by the god Poseidon.',
                            },
                            {
                              label: 'Nemea',
                              rank: '0',
                              desc:
                                'The Naiad nymph of the town of Nemea. She was a daughter of either Zeus and Selene or the river Asopus.',
                            },
                            {
                              label: 'Harpina',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the river Asopus who was abducted to Elis by Ares.',
                            },
                            {
                              label: 'Thebe',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the river Asopus abducted to the town of Thebes by Zeus..',
                            },
                            {
                              label: 'Antiope',
                              rank: '0',
                            },
                            {
                              label: 'Plataia',
                              alt: 'Plataea',
                              rank: '0',
                              desc:
                                'The Naiad nymph of the Boeotian town of Plataea loved by Zeus. The god pretended to be taking her for his bride when Hera abandoned their marriage.',
                            },
                            {
                              label: 'Thespia',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the river Asopus. She was carried off to Boeotia by the god Apollo.',
                            },
                            {
                              label: 'Tanagra',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the river Asopus. The gods Ares and Hermes competed a boxing match to win her love.',
                            },
                            {
                              label: 'Oeroe',
                              rank: '0',
                            },
                            {
                              label: 'Euboia',
                              alt: 'Euboea',
                              rank: '0',
                              desc:
                                'A Naiad daughter of the river Asopus carried off by Poseidon to the island of Euboea.',
                            },
                            {
                              label: 'Korkyra',
                              alt: 'Corcyra',
                              rank: '0',
                              desc:
                                'A Naiad daughter of the river Asopus. She was loved by Poseidon who carried her off to the island of Corcyra.',
                            },
                            {
                              label: 'Sinope',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the river Asopus who was abducted tot he town of Sinope on the Black Sea by Apollo. She made him swear to respect her virginity.',
                            },
                            {
                              label: 'Peirene',
                              rank: '0',
                              desc:
                                'The weeping Naiad nymph of the fountain of the town of Corinth. She was loved by Poseidon.',
                            },
                            {
                              label: 'Kleone',
                              alt: 'Cleone',
                              rank: '0',
                              desc:
                                'The Naiad nymph of the town of Cleonae in Argos.',
                            },
                            {
                              label: 'Ismene',
                              i: 'ismene',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the River Asopus, and the wife of King Argus.',
                            },
                            {
                              label: 'Asopis',
                              rank: '0',
                              desc: 'A Naiad daughter of the river Asopus.',
                            },
                            {
                              label: 'Ornia',
                              rank: '0',
                            },
                            {
                              label: 'Khalkis',
                              alt: 'Chalcis',
                              rank: '0',
                              desc:
                                'A Naiad daughter of Asopus. The town of Chalcis in Euboea was named after her.',
                            },
                          ],
                        },
                        {
                          label: 'Asterion (River of Argos)',
                          rank: '0',
                          desc: 'A river of Mycenae and its god.',
                          children: [
                            {
                              label: 'Akraia',
                              alt: 'Acraea',
                              rank: '0',
                              desc:
                                'A naiad daughter of the river Asterion. With her sisters Euboea and Prosymna she nursed Hera as a child.',
                            },
                            {
                              label: 'Prosymna',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the river Asterion. She and her sisters Euboea and Acraea were nurses of the goddess Hera.',
                            },
                            {
                              label: 'Euboia',
                              alt: 'Euboea',
                              rank: '0',
                              desc:
                                'A Naiad daughter of the river Asopus carried off by Poseidon to the island of Euboea.',
                            },
                          ],
                        },
                        {
                          label: 'Axios (River of Paionia)',
                          alt: 'Axius',
                          rank: '0',
                          desc: 'A river of Paeonia and its god.',
                        },
                        {
                          label: 'Caanthus',
                          alt: 'Kaanthos',
                          rank: '0',
                          parents: 'Oceanus, Tethys',
                          desc:
                            'A River-god son of the Titan Oceanus who was slain by Apollo in their rivalry for the love of the Nymph Melia.',
                        },
                        {
                          label: 'Enipeus (River of Thessalia)',
                          rank: '0',
                        },
                        {
                          label: 'Erasinos (River of Argos)',
                          alt: 'Erasinus',
                          rank: '0',
                          desc: 'A river of Argos and its god.',
                          children: [
                            {
                              label: 'Ankhinoe',
                              alt: 'Anchinoe',
                              rank: '0',
                              desc: 'An Egyptian Naiad.',
                            },
                            {
                              label: 'Byze',
                              rank: '0',
                              desc:
                                'A Naiad daughter of the river Erasinus. With her sisters she was an attendant of Britomartis.',
                            },
                            {
                              label: 'Melite',
                              rank: '0',
                              desc:
                                'A Naiad nymph of the island of the Phaeacians. She was seduced by Heracles.',
                            },
                            {
                              label: 'Moira',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the river Erasinus who, with her sisters, was an attendant of the goddess Britomartis.',
                            },
                          ],
                        },
                        {
                          label: 'Eridanos (River of N. Europe)',
                          alt: 'Eridanus',
                          rank: '0',
                          desc:
                            'A river of northern Europe or Italy and its god.',
                        },
                        {
                          label: 'Erymanthos (River of Arkadia)',
                          rank: '0',
                        },
                        {
                          label: 'Euenos (River of Aitolia)',
                          alt: 'Evenus',
                          rank: '0',
                          desc: 'A river of Aetolia and its god.',
                        },
                        {
                          label: 'Eurotas (River of Lakonia)',
                          rank: '0',
                          desc:
                            'A river in Laconia and its god. He was the first King of Sparta.',
                        },
                        {
                          label: 'Grenikos (River of Troad)',
                          alt: 'Grenicus',
                          rank: '0',
                          desc: 'A river of Troy and its god.',
                          children: [
                            {
                              label: 'Alexirhoe',
                              alt: 'Alexiroe',
                              rank: '0',
                              desc:
                                'A naiad daughter of the river Grenicus of Troy.',
                            },
                            {
                              label: 'Pegasis',
                              rank: '0',
                              desc: 'A Trojan Naiad nymph.',
                            },
                          ],
                        },
                        {
                          label: 'Gyge (Lake of Lydia)',
                          alt: 'Gygaie',
                          rank: '0',
                          desc: 'A lake of Lydia and its god.',
                        },
                        {
                          label: 'Haliakmon (River of Makedonia)',
                          rank: '0',
                        },
                        {
                          label: 'Hebros (River of Thrake)',
                          alt: 'Hebrus',
                          rank: '0',
                          desc: 'A river of Thrace and its god.',
                        },
                        {
                          label: 'Heptaporos (River of Troad)',
                          rank: '0',
                        },
                        {
                          label: 'Hermos (River of Lydia)',
                          alt: 'Hermus',
                          rank: '0',
                          desc: 'A river of Lydia and its god.',
                        },
                        {
                          label: 'Hydaspes (River of India)',
                          rank: '0',
                          desc:
                            'An Indian River-God who fought and was defeated by Dionysus in the Indian Wars.',
                        },
                        {
                          label: 'Imbrasos (River of Samos)',
                          alt: 'Imbrasus',
                          rank: '0',
                          desc: 'A river of the island of Samos and its god.',
                        },
                        {
                          label: 'Ilissos (River of Attika)',
                          alt: 'Ilissus',
                          rank: '0',
                          desc: 'A river of Athens and its god.',
                          children: [
                            {
                              label: 'Pharmakeia',
                              alt: 'Pharmacea',
                              rank: '0',
                              desc:
                                'The Naiad nymph of a poisonous spring near the town of Athens.',
                            },
                          ],
                        },
                        {
                          label: 'Inakhos (River of Argos)',
                          alt: 'Inachus',
                          rank: '0',
                          desc:
                            'A river of Argos and its god. When Poseidon and Hera were contesting for dominion of Argos, he ruled in favour of Hera. Poseidon in anger caused his stream to run dry.',
                          children: [
                            {
                              label: 'Mykene',
                              alt: 'Mycene',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the river Inachus after whom the city of Mycenae was named.',
                            },
                            {
                              label: 'Kallithyia',
                              alt: 'Callithyia',
                              rank: '0',
                              desc:
                                'A Naiad daughter of the river Inachus who founded the ancient cult of Hera in Argos.',
                            },
                            {
                              label: 'Philodike',
                              alt: 'Philodice',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the river Inachus, the wife of a Messenian king.',
                            },
                            {
                              label: 'Io',
                              i: 'io',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the river Inachus. She was loved by Zeus who transformed her into a cow to hide her from the jealous gaze of Hera. The goddess was not fooled and sent a maddening gladfly to torment her. It drove her to wander all the way to Egypt, where she gave birth to Epaphus, ancestor of the Pharaohs.',
                            },
                            {
                              label: 'Amymone',
                              rank: '0',
                              desc:
                                'The Naiad of an Argive spring who was loved by the god Poseidon.',
                            },
                            {
                              label: 'Messeis',
                              rank: '0',
                              desc:
                                'The Naiad nymph of an Argive spring, a daughter of the River Inachus.',
                            },
                            {
                              label: 'Hypereia',
                              alt: 'Hyperia',
                              rank: '0',
                              desc:
                                'The Naiad nymph daughter of the River-god Inachus.',
                            },
                          ],
                        },
                        {
                          label: 'Inopos (River of Delos)',
                          rank: '0',
                        },
                        {
                          label: 'Ismenos (River of Boiotia)',
                          alt: 'Ismenus',
                          rank: '0',
                          desc: 'A River of Boeotia and its god.',
                          children: [
                            {
                              label: 'Dirke',
                              alt: 'Dirce',
                              rank: '0',
                              desc:
                                'The Naiad nymph of the sacred fountain of Dionysus on Mount Cithaeron.',
                            },
                            {
                              label: 'Strophia',
                              rank: '0',
                              desc:
                                'The Naiad nymph of a spring on Mount Cithaeron.',
                            },
                            {
                              label: 'Ismenis',
                              rank: '0',
                              desc:
                                'A Naiad daughter of the River Ismenos loved by the god Faunus.',
                            },
                          ],
                        },
                        {
                          label: 'Istros (River of Skythia)',
                          alt: 'Istrus',
                          rank: '0',
                          desc: 'A god of the river Danube in Scythia.',
                        },
                        {
                          label: 'Kaikos (River of Teuthrania)',
                          alt: 'Caecus',
                          rank: '0',
                          desc: 'A river of Teuthrania and its god.',
                          children: [
                            {
                              label: 'Okyrrhoe',
                              rank: '0',
                            },
                          ],
                        },
                        {
                          label: 'Kaystros (River of Lydia)',
                          alt: 'Caystera',
                          rank: '0',
                          desc: 'river of Lydia and its god.',
                        },
                        {
                          label: 'Kebren (River of Troad)',
                          alt: 'Cebren',
                          rank: '0',
                          desc: 'A river of Troy and its god.',
                          children: [
                            {
                              label: 'Oinone',
                              alt: 'Oenone',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the river Cebren of Troy. She was the first wife of Prince Paris who refused to heal him when he later returned to her seeking a cure for his mortal arrow-wound. She refused, and when he died she hung herself in remorse.',
                            },
                            {
                              label: 'Hesperia',
                              rank: '0',
                              desc: 'A naiad daughter of the river Cebren.',
                            },
                          ],
                        },
                        {
                          label: 'Kephissos (River of Phokis)',
                          rank: '0',
                          children: [
                            {
                              label: 'Lilaia',
                              alt: 'Lilaea',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the river Cephisus.',
                            },
                            {
                              label: 'Daulis',
                              rank: '0',
                              desc:
                                'A Naiad nymph after whom the Boeotian town of Daulis was named.',
                            },
                            {
                              label: 'Melaina',
                              rank: '0',
                            },
                            {
                              label: 'Thyia',
                              rank: '0',
                              desc:
                                'A Naiad nymph of Mount Parnassus loved by the god Apollo. She was the first to celebrate the orgies of Dionysus at Delphi.',
                            },
                            {
                              label: 'The Kephisides',
                              rank: '0',
                            },
                          ],
                        },
                        {
                          label: 'Kephissos (River of Attika)',
                          rank: '0',
                          children: [
                            {
                              label: 'Diogenia',
                              alt: 'Diogeneia',
                              rank: '0',
                              desc:
                                'A naiad daughter of the river Cephisus. She was the wife of an Athenian nobleman.',
                            },
                          ],
                        },
                        {
                          label: 'Khremetes (River of Libya)',
                          alt: 'Chremetes',
                          rank: '0',
                          desc: 'A river of Libya and its god.',
                          children: [
                            {
                              label: 'Ankhiroe',
                              alt: 'Anchiroe',
                              rank: '0',
                              desc: 'An Arcadian Naiad nymph.',
                            },
                          ],
                        },
                        {
                          label: 'Kladeos (River of Elis)',
                          rank: '0',
                        },
                        {
                          label: 'Kokytos (River of Hades)',
                          alt: 'Cocytus',
                          rank: '0',
                          desc: 'The underworld river of wailing and its god.',
                          children: [
                            {
                              label: 'The Kokythiai',
                              rank: '0',
                            },
                            {
                              label: 'Mintha',
                              alt: 'Minthe',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the underworld river-god Cocytus. She was transformed into a mint plant by Persephone when her affair with the god Hades was discovered.',
                            },
                          ],
                        },
                        {
                          label: 'Kydos (River of Kilikia)',
                          rank: '0',
                        },
                        {
                          label: 'Kytheros (River of Elis)',
                          alt: 'Cytherus',
                          rank: '0',
                          desc: 'A river of Elis and its god.',
                          children: [
                            {
                              label: 'The 4 Ionides',
                              rank: '0',
                            },
                          ],
                        },
                        {
                          label: 'Ladon (River of Arkadia)',
                          rank: '0',
                          desc:
                            'A hundred-headed dragon which guarded the golden apples of the Hesperides. It was slain by Heracles.',
                          children: [
                            {
                              label: 'Metope',
                              rank: '0',
                              desc:
                                'The Naiad nymph wife of the Argive river-god Asopus.',
                            },
                            {
                              label: 'Thelpousa',
                              alt: 'Thelpusa',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the Arcadian river Ladon.',
                            },
                            {
                              label: 'Themis',
                              i: 'themis',
                              rank: '0',
                              parents: 'Ouranos, Gaia',
                              desc:
                                'The Titan goddess of divine law, natural order and the oracles of the earth. She was the mother of the goddess Fates and Seasons by Zeus.',
                              children: [
                                {
                                  label: 'Thriae',
                                  rank: '0',
                                  parents: 'Zeus, Themis',
                                  desc:
                                    'Lesser goddesses of nature who can foresee the future or foretell the unknown by inspiration, magic, signs, or omens.  The word Thriae means "pebbles," because the future was foretold by tossing pebbles',
                                },
                                {
                                  label: 'The Horai',
                                  i: 'horai',
                                  parents: 'Zeus, Themis',
                                  desc:
                                    'The Horae (the Hours) are the goddesses of the seasons (the Greek had only three seasons; spring, summer and winter). They are called Thallo, Auxo and Carpo, names which denote budding, growth and ripening.  The twelve Horai, who were daughters of Helios, were not always clearly distinguishable from the three Horai of the seasons, who were also described as overseeing the paths of the sun.',
                                  children: [
                                    {
                                      label: 'Dike',
                                      i: 'dike',
                                      alt: 'Dice',
                                      rank: '0',
                                      parents: 'Zeus, Themis',
                                      desc:
                                        'The goddess of justice. She was one of the three Horae (Seasons)',
                                    },
                                    {
                                      label: 'Eirene',
                                      rank: '0',
                                      parents: 'Zeus, Themis',
                                      desc:
                                        'One of the three Horae, the goddess of peace and spring',
                                    },
                                    {
                                      label: 'Eunomia',
                                      rank: '0',
                                      parents: 'Zeus, Themis',
                                      desc:
                                        'The goddess of good order and spring pastures. She was one of the three Horae (Seasons) and an attendant of the goddess Aphrodite',
                                    },
                                  ],
                                },
                                {
                                  label: 'Moirae (Fates)',
                                  i: 'moirae',
                                  alt: 'Moirai',
                                  rank: '0',
                                  parents: 'Zeus, Themis',
                                  desc:
                                    'The female deities who supervised fate',
                                  children: [
                                    {
                                      label: 'Atropos',
                                      alt: 'Atropus',
                                      rank: '0',
                                      parents: 'Zeus, Themis',
                                      desc:
                                        'Atropos was one of the three Moirae, the Fates, who cut the thread or web of life',
                                    },
                                    {
                                      label: 'Klotho',
                                      alt: 'Clotho',
                                      rank: '0',
                                      parents: 'Zeus, Themis',
                                      desc:
                                        'The youngest of the three Fates, who spins the thread of human life',
                                    },
                                    {
                                      label: 'Lakhesis',
                                      alt: 'Lachesis',
                                      rank: '0',
                                      parents: 'Zeus, Themis',
                                      desc:
                                        'One of the three Fates (Moirae), the :Disposer"; he measures the length of the thread of human life spun by Klotho and determines its destiny',
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              label: 'Syrinx',
                              rank: '0',
                              desc:
                                'A Naiad nymph chased by the god Pan. She fled his embrace and was transformed by her sisters into river reeds. The god crafted his famous pan-pipes from her plant.',
                            },
                          ],
                        },
                        {
                          label: 'Lamos (River of Phoinikia)',
                          rank: '0',
                          desc:
                            'A river of Cilicia or Mount Helicon in Boeotia and its god. He and his sons and daughters were nurses of the god Dionysus.',
                        },
                        {
                          label: 'Lethe (River of Hades)',
                          rank: '0',
                          desc: 'The female personification of forgetfulness.',
                        },
                        {
                          label: 'Maiandros (River of Karia)',
                          alt: 'Maeander',
                          rank: '0',
                          desc: 'A river of Caria and its god.',
                        },
                        {
                          label: 'Meles (River of Lydia)',
                          rank: '0',
                        },
                        {
                          label: 'Neilos (River of Aigyptos) (w/ Kallirrhoe)',
                          alt: 'Nile',
                          rank: '0',
                          desc: 'The river of Egypt and its god.',
                          children: [
                            {
                              label: 'Memphis',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the River Nile. She was the wife of the very first Egyptian king Epaphus, who named his capital after her.',
                            },
                            {
                              label: 'Ankhinoe',
                              alt: 'Anchinoe',
                              rank: '0',
                              desc: 'An Egyptian Naiad.',
                            },
                            {
                              label: 'Kaliadne',
                              alt: 'Caliadne',
                              rank: '0',
                              desc: 'An Egyptian Naiad.',
                            },
                            {
                              label: 'Polyxo',
                              rank: '0',
                              desc: 'An Egyptian naiad.',
                            },
                            {
                              label: 'Anippe',
                              rank: '0',
                              desc:
                                'A Naiad daughter of the River Nile loved by Poseidon.',
                            },
                            {
                              label: 'Khione',
                              alt: 'Chione',
                              rank: '0',
                              desc:
                                'The goddess or nymph of snow. She was a daughter of the winter-god Boreas loved by the god Poseidon.',
                            },
                          ],
                        },
                        {
                          label: 'Nestos (River of Thrake)',
                          rank: '0',
                        },
                        {
                          label: 'Paktolos (River of Lydia)',
                          rank: '0',
                        },
                        {
                          label: 'Parthenios (River of Paphlagonia)',
                          rank: '0',
                        },
                        {
                          label: 'Peneios (River of Thessalia) (w/ Kreusa)',
                          alt: 'Peneus',
                          rank: '0',
                          desc: 'A river of Thessaly and its god.',
                          children: [
                            {
                              label: 'The Thessalides',
                              rank: '0',
                            },
                            {
                              label: 'Daphne',
                              i: 'daphne',
                              rank: '0',
                              desc:
                                'A naiad daughter of the river Peneius. She was loved by the god Apollo who pursued her through the woods. As he was about to capture her she prayed to Gaea and was transformed into a laurel tree.',
                            },
                            {
                              label: 'Stilbe',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the Thessalian river Peneius loved by the god Apollo.',
                            },
                            {
                              label: 'Menippe',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the river Peneius.',
                            },
                            {
                              label: 'Hypseus',
                              rank: '0',
                              children: [
                                {
                                  label: 'Kyrene',
                                  alt: 'Cyrene',
                                  rank: '0',
                                  desc:
                                    'A Naiad nymph huntress of Thessaly who was loved by the god Apollo. She bore him the rustic god Aristaeus.',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          label: 'Phasis (River of Kholkis)',
                          rank: '0',
                          desc: 'A river of Colchis and its god.',
                        },
                        {
                          label: 'Pitane',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the Spartan river Eurotas. She was loved by Poseidon.',
                        },
                        {
                          label: 'Pleistos (River of Phokis)',
                          alt: 'Pleistus',
                          rank: '0',
                          desc: 'A river of Phocis and its god.',
                          children: [
                            {
                              label: 'The Korykiai',
                              rank: '0',
                            },
                            {
                              label: 'Korykia',
                              alt: 'Corycia',
                              rank: '0',
                              desc:
                                'One of the Corycian nymphs of Delphi loved by the god Apollo.',
                            },
                          ],
                        },
                        {
                          label: 'Pyriphlegethon (River of Hades)',
                          rank: '0',
                          desc: 'The underworld river of fire and its god.',
                        },
                        {
                          label: 'Rhesos (River of Troad)',
                          rank: '0',
                        },
                        {
                          label: 'Rhodios (River of Troad)',
                          rank: '0',
                        },
                        {
                          label: 'Saggarios (River of Phrygia) (w/ Kybele )',
                          alt: 'Sangarius',
                          rank: '0',
                          desc: 'A river of Phrygia and its god.',
                        },
                        {
                          label: 'Simoeis (River of Troad)',
                          rank: '0',
                          desc: 'A river of Troy and its god.',
                          children: [
                            {
                              label: 'The Troiades',
                              rank: '0',
                            },
                            {
                              label: 'Astyokhe',
                              alt: 'Astyoche',
                              rank: '0',
                              desc:
                                'A Naiad daughter of the Trojan river Simoeis. She married a Trojan king.',
                            },
                            {
                              label: 'Hieromneme',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the river Simoeis, and wife of the Dardanian prince Assaracus.',
                            },
                          ],
                        },
                        {
                          label: 'Skamandros (River of Troad)',
                          alt: 'Scamander',
                          rank: '0',
                          desc:
                            'A river of Troy and its god. When he attempted to drown the hero Achilles in the Trojan War, Hephaestus scorched his streams with fire.',
                          children: [
                            {
                              label: 'The Troiades',
                              rank: '0',
                            },
                            {
                              label: 'Kallirhoe',
                              i: 'kallirhoe',
                              alt: 'Callirhoe',
                              rank: '0',
                              desc:
                                'An Oceanid wife of the giant Chrysaor. She begged her son Geryon not to battle Heracles.',
                            },
                            {
                              label: 'Strymo',
                              rank: '0',
                              desc:
                                'A Naiad nymph daughter of the Trojan river Scamander.',
                            },
                            {
                              label: 'Glaukia',
                              alt: 'Glaucia',
                              rank: '0',
                              desc:
                                'A Naiad daughter of the river Scamander. She was loved by a companion of Heracles.',
                            },
                          ],
                        },
                        {
                          label: 'Sparte',
                          alt: 'Sparta',
                          rank: '0',
                          desc:
                            'The Naiad nymph wife of Lacedaemon, the first King of Sparta.',
                        },
                        {
                          label: 'Sperkheios (River of Malis)',
                          alt: 'Spercheus',
                          rank: '0',
                          desc: 'A river of Malis and its god.',
                          children: [
                            {
                              label: 'The Sperkheides',
                              rank: '0',
                            },
                            {
                              label: 'Diopatre',
                              alt: 'Diopatra',
                              rank: '0',
                              desc:
                                'A Malian Naiad nymph loved by Poseidon. The god turned her sisters into poplars while he seduced her.',
                            },
                          ],
                        },
                        {
                          label: 'Strymon (River of Thrake) (w/ Neaera )',
                          rank: '0',
                          desc: 'A river of Thrace and its god.',
                          children: [
                            {
                              label: 'Euadne',
                              alt: 'Evadne',
                              rank: '0',
                              desc:
                                'A naiad daughter of the river Strymon married to Argus king of Argos.',
                            },
                            {
                              label: 'Rhodope',
                              rank: '0',
                              parents: 'Okeanus, Tethys',
                              desc:
                                'The Okeanis "rosey-eyed" was probably either an Anthousa flower-nymphe of Nephele of the rose-coloured clouds of dawn. A Naiad nymph daughter of the Thracian river-god Strymon. When she and her husband Haemus impersonated Zeus and Hera, the angry gods transformed them into mountains.',
                            },
                            {
                              label: 'Tereine',
                              rank: '0',
                              desc:
                                'A Thracian Naiad nymph loved by the god Ares.',
                            },
                          ],
                        },
                        {
                          label: 'Symaithos (River of Sikelia)',
                          alt: 'Symaethus',
                          rank: '0',
                          desc: 'A Sicilian river and its god.',
                        },
                        {
                          label: 'Termessos (River of Boiotia)',
                          rank: '0',
                          children: [
                            {
                              label: 'Aganippe',
                              rank: '0',
                              desc:
                                'A naiad daughter of the river Termessus. She was the nymph of a sacred spring of the Muses whose waters had the power of inspiration.',
                            },
                          ],
                        },
                        {
                          label: 'Tiasa',
                          rank: '0',
                          desc: 'The Naiad nymph of a Spartan stream.',
                        },
                      ],
                    },
                  ],
                },
                {
                  label: 'Theia',
                  alt: 'Thea',
                  rank: '1',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'The Titan goddess of sight and clear blue skies. With her brother and husband, Hyperion, she was the mother of Helios (the Sun), Eos (the Moon), and Selene (the Dawn).',
                  children: [
                    {
                      label: 'Eos',
                      i: 'eos',
                      rank: '0',
                      parents: 'Hyperion, Theia',
                      desc:
                        'The Titan goddess of the dawn. She was cursed by Aphrodite with an insatiable appetite for men, loving one after another - Cephalus, Tithonus, Phaethon, Orion.',
                      children: [
                        {
                          label: 'Astraea',
                          alt: 'Astraia',
                          rank: '0',
                          desc:
                            'The younger Titan-goddess of justice. Astraea left the earth at the end of the Golden Age and entered the heavens as the constellation Virgo.',
                        },
                        {
                          label: 'Boreas',
                          i: 'boreas',
                          rank: '0',
                          parents: 'Astraeus, Eos',
                          desc:
                            'The purple-haired, winged god of the North-Wind. He was also the god of winter who carried snow on his chill breath.',
                        },
                        {
                          label: 'Eosphorus',
                          i: 'eosphoros',
                          alt: 'Eosphoros',
                          rank: '0',
                          parents: 'Aestraeus, Eos',
                          desc:
                            'The god of the morning star who heralded the arrival of dawn.',
                        },
                        {
                          label: 'Eurus',
                          alt: 'Euros',
                          rank: '0',
                          parents: 'Astraeus, Eos',
                          desc:
                            'The god of the East Wind (or more specifically the South-East Wind).',
                        },
                        {
                          label: 'Hesperus',
                          alt: 'Hesperos',
                          rank: '0',
                          parents: 'Aestraeus, Eos',
                          desc: 'The god of the evening star (Venus).',
                        },
                        {
                          label: 'Notus',
                          alt: 'Notos',
                          rank: '0',
                          parents: 'Astraeus, Eos',
                          desc: 'The god of the South Wind.',
                        },
                        {
                          label: 'Zephyrus',
                          i: 'zephyros',
                          alt: 'Zephyros',
                          rank: '0',
                          parents: 'Astraeus, Eos',
                          desc:
                            'The god of the gentle West-Wind and the season of spring.',
                        },
                      ],
                    },
                    {
                      label: 'Selene',
                      i: 'selene',
                      parents: 'Hyperion, Theia',
                      rank: '0',
                      desc:
                        'The goddess of the moon who rode through the sky at night in a chariot drawn by winged horses, or seated side-saddle on an ass. She fell in love with the young shepherd Endymion who was granted mmortality in a state of eternal sleep.',
                    },
                  ],
                },
                {
                  label: 'Themis',
                  i: 'themis',
                  rank: '0',
                  parents: 'Ouranos, Gaia',
                  desc:
                    'The Titan goddess of divine law, natural order and the oracles of the earth. She was the mother of the goddess Fates and Seasons by Zeus.',
                  children: [
                    {
                      label: 'Thriae',
                      rank: '0',
                      parents: 'Zeus, Themis',
                      desc:
                        'Lesser goddesses of nature who can foresee the future or foretell the unknown by inspiration, magic, signs, or omens.  The word Thriae means "pebbles," because the future was foretold by tossing pebbles',
                    },
                    {
                      label: 'The Horai',
                      i: 'horai',
                      parents: 'Zeus, Themis',
                      desc:
                        'The Horae (the Hours) are the goddesses of the seasons (the Greek had only three seasons; spring, summer and winter). They are called Thallo, Auxo and Carpo, names which denote budding, growth and ripening.  The twelve Horai, who were daughters of Helios, were not always clearly distinguishable from the three Horai of the seasons, who were also described as overseeing the paths of the sun.',
                      children: [
                        {
                          label: 'Dike',
                          i: 'dike',
                          alt: 'Dice',
                          rank: '0',
                          parents: 'Zeus, Themis',
                          desc:
                            'The goddess of justice. She was one of the three Horae (Seasons)',
                        },
                        {
                          label: 'Eirene',
                          rank: '0',
                          parents: 'Zeus, Themis',
                          desc:
                            'One of the three Horae, the goddess of peace and spring',
                        },
                        {
                          label: 'Eunomia',
                          rank: '0',
                          parents: 'Zeus, Themis',
                          desc:
                            'The goddess of good order and spring pastures. She was one of the three Horae (Seasons) and an attendant of the goddess Aphrodite',
                        },
                      ],
                    },
                    {
                      label: 'Moirae (Fates)',
                      i: 'moirae',
                      alt: 'Moirai',
                      rank: '0',
                      parents: 'Zeus, Themis',
                      desc: 'The female deities who supervised fate',
                      children: [
                        {
                          label: 'Atropos',
                          alt: 'Atropus',
                          rank: '0',
                          parents: 'Zeus, Themis',
                          desc:
                            'Atropos was one of the three Moirae, the Fates, who cut the thread or web of life',
                        },
                        {
                          label: 'Klotho',
                          alt: 'Clotho',
                          rank: '0',
                          parents: 'Zeus, Themis',
                          desc:
                            'The youngest of the three Fates, who spins the thread of human life',
                        },
                        {
                          label: 'Lakhesis',
                          alt: 'Lachesis',
                          rank: '0',
                          parents: 'Zeus, Themis',
                          desc:
                            'One of the three Fates (Moirae), the :Disposer"; he measures the length of the thread of human life spun by Klotho and determines its destiny',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'The Ourea',
          rank: '0',
          parents: 'Gaia alone.',
          desc:
            'The Ourea were the Protogenoi(Primeval gods) or rustic Daimones (Spirits) of the mountains. Each and every Mountain was said to have its own ancient bearded god.  Their names are Aitna, Athos, Helikon, Kythairon, Nysos, Olympos, Oreios, Parnes, and Tmolos',
        },
        {
          label: 'Phorkys',
          alt: 'Phorkys',
          rank: '0',
          parents: 'Pontos, Gaia',
          desc:
            'An ancient Sea-God. He was the forefather of most of the monsters of myth.',
          children: [
            {
              label: 'The Gorgons',
              rank: '0',
              parents: 'Phorkys, Keto',
              desc:
                'A monstrous feminine creature whose appearance would turn anyone who laid eyes upon it to stone. Later there were three of them: Euryale ("far-roaming"), Sthenno ("forceful"), and Medusa ("ruler"), the only one of them who was mortal. ',
              children: [
                {
                  label: 'Euryale',
                  rank: '0',
                  desc: 'One of the two immortal Gorgons.',
                },
                {
                  label: 'Medusa',
                  i: 'medousa',
                  alt: 'Medousa',
                  rank: '0',
                  desc:
                    'A serpent-haired Gorgon who was slain by the hero Perseus. When she was beheaded her two children by Poseidon were born from her bloody neck.',
                  children: [
                    {
                      label: 'Pegasus',
                      i: 'pegasos',
                      alt: 'Pegasos',
                      rank: '0',
                      parents: 'Poseidon, Medusa',
                      desc:
                        'A winged horse which sprung from the neck of Medusa after her decapitation. He was tamed by the hero Bellerophon who rode him into battle against the Amazons and the monster Chimera.',
                    },
                    {
                      label: 'Chrysaor',
                      alt: 'Khrysaor',
                      rank: '0',
                      parents: 'Poseidon, Medusa',
                      desc: 'A giant, "Golden Falchion".',
                      children: [
                        {
                          label: 'Echidna',
                          alt: 'Ekhidna',
                          rank: '0',
                          parents: 'Keto alone.',
                          desc:
                            'A deadly she-dragon with the upper body of a beautiful nymph, and the tail of a serpent in place of legs. The immortal Echidna married the hundred-headed giant Typhon and spawned a brood of terrible monsters.',
                        },
                      ],
                    },
                  ],
                },
                {
                  label: 'Sthenno',
                  rank: '0',
                },
              ],
            },
            {
              label: 'Graeae',
              i: 'graeae',
              rank: '0',
              desc:
                'The three "old women" or "gray ones," they were gray-haired from birth and have only one eye and one tooth, which they share among them. They are Enyo ("horror"), Deino ("dread") and Pemphredo ("alarm")',
              children: [
                {
                  label: 'Deino',
                  rank: '0',
                  parents: 'Phorkys, Keto',
                  desc: 'One of the old hag Graeae.',
                },
                {
                  label: 'Enyo',
                  rank: '0',
                  parents: 'Phorkys, Keto',
                  desc: 'The goddess of war, a battlefield companion of Ares.',
                },
                {
                  label: 'Pemphredo',
                  rank: '0',
                  parents: 'Phorkys, Keto',
                  desc: 'One of old hag Graeae.',
                },
              ],
            },
            {
              label: 'Ladon',
              rank: '0',
              parents: 'Phorkys, Keto',
              desc:
                'A hundred-headed dragon which guarded the golden apples of the Hesperides. It was slain by Heracles.',
            },
            {
              label: 'Scylla',
              i: 'skylla',
              alt: 'Skylla',
              rank: '0',
              parents: 'Phorkys alone',
              desc:
                'A monstrous sea-goddess whose body was ringed by carnivorous heads. She dwelt in a cliffside cave opposite the whirlpool daemon Charybdis.',
            },
            {
              label: 'Thoosa',
              rank: '0',
              parents: 'Porchys, Keto',
              desc:
                'A sea nymph loved by the god Poseidon. She was the mother of the Cyclops Polyphemus.',
              children: [
                {
                  label: 'Polyphemos',
                  i: 'polyphemos',
                  alt: 'Polyphemus',
                  rank: '0',
                  parents: 'Poseidon, Thoosa',
                  desc:
                    'A man-eating Cyclops who was blinded by the hero Odysseus',
                },
              ],
            },
          ],
        },
        {
          label: 'Pontos (Sea)',
          parents: 'Gaia alone',
          desc: 'The Protogenos (primeval god) of the sea.',
          children: [
            {
              label: 'Aigaios',
              rank: '0',
              parents: 'Pontos, Gaia',
              desc:
                "god of the stormy seas and an ally of the Titanes. The Aegean Sea was named after him (Pontos Aigaios).  When he was vanquished by Zeus, Aigaios' son Briareos appears to have assumed the role of god of Aegean storms.",
            },
            {
              label: 'Eurybia',
              rank: '0',
              parents: 'Pontos, Gaia',
              desc:
                'The ancient goddess of power over the sea. She was the wife of the star Titan Krios.',
              children: [
                {
                  label: 'Astraeus',
                  alt: 'Astraios',
                  rank: '0',
                  parents: 'Krios, Eurybia',
                  desc:
                    'The Titan-god of the stars, astronomy and astrology. He was the father of the Winds and the Stars by the dawn-goddess Eos.',
                  children: [
                    {
                      label: 'Boreas',
                      i: 'boreas',
                      rank: '0',
                      parents: 'Astraeus, Eos',
                      desc:
                        'The purple-haired, winged god of the North-Wind. He was also the god of winter who carried snow on his chill breath.',
                    },
                    {
                      label: 'Eurus',
                      alt: 'Euros',
                      rank: '0',
                      parents: 'Astraeus, Eos',
                      desc:
                        'The god of the East Wind (or more specifically the South-East Wind).',
                    },
                    {
                      label: 'Notus',
                      alt: 'Notos',
                      rank: '0',
                      parents: 'Astraeus, Eos',
                      desc: 'The god of the South Wind.',
                    },
                    {
                      label: 'Zephyrus',
                      i: 'zephyros',
                      alt: 'Zephyros',
                      rank: '0',
                      parents: 'Astraeus, Eos',
                      desc:
                        'The god of the gentle West-Wind and the season of spring.',
                    },
                    {
                      label: 'Astraea',
                      alt: 'Astraia',
                      rank: '0',
                      desc:
                        'The younger Titan-goddess of justice. Astraea left the earth at the end of the Golden Age and entered the heavens as the constellation Virgo.',
                    },
                    {
                      label: 'Hesperus',
                      alt: 'Hesperos',
                      rank: '0',
                      parents: 'Aestraeus, Eos',
                      desc: 'The god of the evening star (Venus).',
                    },
                    {
                      label: 'Eosphorus',
                      i: 'eosphoros',
                      alt: 'Eosphoros',
                      rank: '0',
                      parents: 'Aestraeus, Eos',
                      desc:
                        'The god of the morning star who heralded the arrival of dawn.',
                    },
                  ],
                },
                {
                  label: 'Pallas',
                  rank: '0',
                  desc:
                    'The Titan-god of warcraft. He was the father of Victory, Force, Power and Rivalry.',
                  children: [
                    {
                      label: 'Bia',
                      rank: '0',
                      parents: 'Pallas, Styx',
                      desc:
                        'The goddess of force. She sided with Zeus in the Titan-War and became one of his chief attendants.',
                    },
                    {
                      label: 'Nike',
                      i: 'nike',
                      parents: 'Pallas, Styx',
                      rank: '0',
                      desc:
                        'The goddess of victory who sided with Zeus in the Titan-War and became his constant companion.',
                    },
                    {
                      label: 'Cratos',
                      rank: '0',
                      parents: 'Pallas, Styx',
                      desc: 'The personification of strength and power.',
                    },
                    {
                      label: 'Zelus',
                      alt: 'Zelos',
                      parents: 'Pallas, Styx',
                      rank: '0',
                      desc:
                        'The personification of rivalry. He and his three siblings were daemon attendants of the god Zeus.',
                    },
                  ],
                },
                {
                  label: 'Perses',
                  shortlabel: 'Perses',
                  parents: 'Helios, Perse',
                  rank: '0',
                  desc: 'The Titan god of destruction and laying waste.',
                  children: [
                    {
                      label: 'Hecate',
                      i: 'hekate',
                      alt: 'Hekate',
                      parents: 'Perses, Asteria',
                      rank: '0',
                      desc:
                        'The Titan goddess of witchcraft, ghosts and necromancy. She assisted Demeter in her search for Persephone, and became her minister in Hades.',
                    },
                  ],
                },
              ],
            },
            {
              label: 'Keto',
              alt: 'Ceto',
              rank: '0',
              parents: 'Pontos, Gaia',
              desc:
                'An ancient Sea-Goddess. She personified the dangers of the sea. Most of the monsters of mythology were descended from her.',
              children: [
                {
                  label: 'Echidna',
                  alt: 'Ekhidna',
                  rank: '0',
                  parents: 'Keto alone.',
                  desc:
                    'A deadly she-dragon with the upper body of a beautiful nymph, and the tail of a serpent in place of legs. The immortal Echidna married the hundred-headed giant Typhon and spawned a brood of terrible monsters.',
                },
                {
                  label: 'The Gorgons',
                  rank: '0',
                  parents: 'Phorkys, Keto',
                  desc:
                    'A monstrous feminine creature whose appearance would turn anyone who laid eyes upon it to stone. Later there were three of them: Euryale ("far-roaming"), Sthenno ("forceful"), and Medusa ("ruler"), the only one of them who was mortal. ',
                  children: [
                    {
                      label: 'Euryale',
                      rank: '0',
                      desc: 'One of the two immortal Gorgons.',
                    },
                    {
                      label: 'Medusa',
                      i: 'medousa',
                      alt: 'Medousa',
                      rank: '0',
                      desc:
                        'A serpent-haired Gorgon who was slain by the hero Perseus. When she was beheaded her two children by Poseidon were born from her bloody neck.',
                      children: [
                        {
                          label: 'Pegasus',
                          i: 'pegasos',
                          alt: 'Pegasos',
                          rank: '0',
                          parents: 'Poseidon, Medusa',
                          desc:
                            'A winged horse which sprung from the neck of Medusa after her decapitation. He was tamed by the hero Bellerophon who rode him into battle against the Amazons and the monster Chimera.',
                        },
                        {
                          label: 'Chrysaor',
                          alt: 'Khrysaor',
                          rank: '0',
                          parents: 'Poseidon, Medusa',
                          desc: 'A giant, "Golden Falchion".',
                          children: [
                            {
                              label: 'Echidna',
                              alt: 'Ekhidna',
                              rank: '0',
                              parents: 'Keto alone.',
                              desc:
                                'A deadly she-dragon with the upper body of a beautiful nymph, and the tail of a serpent in place of legs. The immortal Echidna married the hundred-headed giant Typhon and spawned a brood of terrible monsters.',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      label: 'Sthenno',
                      rank: '0',
                    },
                  ],
                },
                {
                  label: 'Graeae',
                  i: 'graeae',
                  rank: '0',
                  desc:
                    'The three "old women" or "gray ones," they were gray-haired from birth and have only one eye and one tooth, which they share among them. They are Enyo ("horror"), Deino ("dread") and Pemphredo ("alarm")',
                  children: [
                    {
                      label: 'Deino',
                      rank: '0',
                      parents: 'Phorkys, Keto',
                      desc: 'One of the old hag Graeae.',
                    },
                    {
                      label: 'Enyo',
                      rank: '0',
                      parents: 'Phorkys, Keto',
                      desc:
                        'The goddess of war, a battlefield companion of Ares.',
                    },
                    {
                      label: 'Pemphredo',
                      rank: '0',
                      parents: 'Phorkys, Keto',
                      desc: 'One of old hag Graeae.',
                    },
                  ],
                },
                {
                  label: 'Thoosa',
                  rank: '0',
                  parents: 'Porchys, Keto',
                  desc:
                    'A sea nymph loved by the god Poseidon. She was the mother of the Cyclops Polyphemus.',
                  children: [
                    {
                      label: 'Polyphemos',
                      i: 'polyphemos',
                      alt: 'Polyphemus',
                      rank: '0',
                      parents: 'Poseidon, Thoosa',
                      desc:
                        'A man-eating Cyclops who was blinded by the hero Odysseus',
                    },
                  ],
                },
              ],
            },
            {
              label: 'Nereus',
              i: 'nereus',
              rank: '0',
              parents: 'Pontos, Gaia',
              desc:
                'An ancient fish-tailed sea-god known as the Old Man of the Sea. He was the father of the fifty Nereides',
              children: [
                {
                  label: 'The Nereides',
                  i: 'nereides',
                  rank: '0',
                  parents: 'Nereus, Doris',
                  desc:
                    'The fifty daughters who dwell in the Mediterranean Sea, these beautiful women were always friendly and helpful towards sailors fighting perilous storms. They are believed to be able to prophesize. They belong to the retinue of Poseidon',
                },
              ],
            },
            {
              label: 'Phorkys',
              alt: 'Phorkys',
              rank: '0',
              parents: 'Pontos, Gaia',
              desc:
                'An ancient Sea-God. He was the forefather of most of the monsters of myth.',
              children: [
                {
                  label: 'The Gorgons',
                  rank: '0',
                  parents: 'Phorkys, Keto',
                  desc:
                    'A monstrous feminine creature whose appearance would turn anyone who laid eyes upon it to stone. Later there were three of them: Euryale ("far-roaming"), Sthenno ("forceful"), and Medusa ("ruler"), the only one of them who was mortal. ',
                  children: [
                    {
                      label: 'Euryale',
                      rank: '0',
                      desc: 'One of the two immortal Gorgons.',
                    },
                    {
                      label: 'Medusa',
                      i: 'medousa',
                      alt: 'Medousa',
                      rank: '0',
                      desc:
                        'A serpent-haired Gorgon who was slain by the hero Perseus. When she was beheaded her two children by Poseidon were born from her bloody neck.',
                      children: [
                        {
                          label: 'Pegasus',
                          i: 'pegasos',
                          alt: 'Pegasos',
                          rank: '0',
                          parents: 'Poseidon, Medusa',
                          desc:
                            'A winged horse which sprung from the neck of Medusa after her decapitation. He was tamed by the hero Bellerophon who rode him into battle against the Amazons and the monster Chimera.',
                        },
                        {
                          label: 'Chrysaor',
                          alt: 'Khrysaor',
                          rank: '0',
                          parents: 'Poseidon, Medusa',
                          desc: 'A giant, "Golden Falchion".',
                          children: [
                            {
                              label: 'Echidna',
                              alt: 'Ekhidna',
                              rank: '0',
                              parents: 'Keto alone.',
                              desc:
                                'A deadly she-dragon with the upper body of a beautiful nymph, and the tail of a serpent in place of legs. The immortal Echidna married the hundred-headed giant Typhon and spawned a brood of terrible monsters.',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      label: 'Sthenno',
                      rank: '0',
                    },
                  ],
                },
                {
                  label: 'Graeae',
                  i: 'graeae',
                  rank: '0',
                  desc:
                    'The three "old women" or "gray ones," they were gray-haired from birth and have only one eye and one tooth, which they share among them. They are Enyo ("horror"), Deino ("dread") and Pemphredo ("alarm")',
                  children: [
                    {
                      label: 'Deino',
                      rank: '0',
                      parents: 'Phorkys, Keto',
                      desc: 'One of the old hag Graeae.',
                    },
                    {
                      label: 'Enyo',
                      rank: '0',
                      parents: 'Phorkys, Keto',
                      desc:
                        'The goddess of war, a battlefield companion of Ares.',
                    },
                    {
                      label: 'Pemphredo',
                      rank: '0',
                      parents: 'Phorkys, Keto',
                      desc: 'One of old hag Graeae.',
                    },
                  ],
                },
                {
                  label: 'Ladon',
                  rank: '0',
                  parents: 'Phorkys, Keto',
                  desc:
                    'A hundred-headed dragon which guarded the golden apples of the Hesperides. It was slain by Heracles.',
                },
                {
                  label: 'Scylla',
                  i: 'skylla',
                  alt: 'Skylla',
                  rank: '0',
                  parents: 'Phorkys alone',
                  desc:
                    'A monstrous sea-goddess whose body was ringed by carnivorous heads. She dwelt in a cliffside cave opposite the whirlpool daemon Charybdis.',
                },
                {
                  label: 'Thoosa',
                  rank: '0',
                  parents: 'Porchys, Keto',
                  desc:
                    'A sea nymph loved by the god Poseidon. She was the mother of the Cyclops Polyphemus.',
                  children: [
                    {
                      label: 'Polyphemos',
                      i: 'polyphemos',
                      alt: 'Polyphemus',
                      rank: '0',
                      parents: 'Poseidon, Thoosa',
                      desc:
                        'A man-eating Cyclops who was blinded by the hero Odysseus',
                    },
                  ],
                },
              ],
            },
            {
              label: 'The Telkhines',
              rank: '0',
              parents: 'Pontus, Gaia',
              desc:
                'Four mysterious magician-smiths and sea daimones native to the islands of Keos and Rhodes.  They invented the art of metal-working and were said to have crafted the sickle Kronos used to castrate his father Ouranos and later a magical trident for Poseidon which the god used to lever mountains into the sea and form the islands.',
            },
            {
              label: 'Thaumas (marine wonders)',
              shortlabel: 'Thaumas',
              rank: '0',
              parents: 'Pontos, Gaia',
              desc:
                'The god of the wonders of the sea. He was the father of Iris (the Rainbow) and whirlwind Harpies.',
              children: [
                {
                  label: 'Iris',
                  i: 'iris',
                  rank: '0',
                  desc:
                    'The goddess of the rainbow and the messenger of the gods.',
                },
                {
                  label: 'Arce',
                  alt: 'Arke',
                  rank: '0',
                  desc:
                    'A sister of Iris. She was the messanger-goddess of the Titans who was stripped of her wings and cast into Tartarus by Zeus.',
                },
                {
                  label: 'Aello',
                  i: 'aello',
                  rank: '0',
                  desc: 'One of the Harpies.',
                },
                {
                  label: 'Celaeno',
                  alt: 'Kelaino',
                  rank: '0',
                  desc:
                    'One of the starry Pleiad nymphs. She was loved by the god Poseidon.',
                },
                {
                  label: 'Ocypete',
                  i: 'okypete',
                  alt: 'Okypete',
                  rank: '0',
                  desc: 'One of the three Harpies.',
                },
                {
                  label: 'Podarge',
                  rank: '0',
                },
              ],
            },
          ],
        },
        {
          label: 'Python',
          rank: '0',
          parents: 'Gaia alone.',
          desc:
            'A monstrous "DRAKAINA," or she-serpent, born from of the slime which coating the earth after the great deluge.',
        },
        {
          label: 'The Telkhines',
          rank: '0',
          parents: 'Pontus, Gaia',
          desc:
            'Four mysterious magician-smiths and sea daimones native to the islands of Keos and Rhodes.  They invented the art of metal-working and were said to have crafted the sickle Kronos used to castrate his father Ouranos and later a magical trident for Poseidon which the god used to lever mountains into the sea and form the islands.',
        },
        {
          label: 'Thaumas (marine wonders)',
          shortlabel: 'Thaumas',
          rank: '0',
          parents: 'Pontos, Gaia',
          desc:
            'The god of the wonders of the sea. He was the father of Iris (the Rainbow) and whirlwind Harpies.',
          children: [
            {
              label: 'Iris',
              i: 'iris',
              rank: '0',
              desc: 'The goddess of the rainbow and the messenger of the gods.',
            },
            {
              label: 'Arce',
              alt: 'Arke',
              rank: '0',
              desc:
                'A sister of Iris. She was the messanger-goddess of the Titans who was stripped of her wings and cast into Tartarus by Zeus.',
            },
            {
              label: 'Aello',
              i: 'aello',
              rank: '0',
              desc: 'One of the Harpies.',
            },
            {
              label: 'Celaeno',
              alt: 'Kelaino',
              rank: '0',
              desc:
                'One of the starry Pleiad nymphs. She was loved by the god Poseidon.',
            },
            {
              label: 'Ocypete',
              i: 'okypete',
              alt: 'Okypete',
              rank: '0',
              desc: 'One of the three Harpies.',
            },
            {
              label: 'Podarge',
              rank: '0',
            },
          ],
        },
        {
          label: 'The Titans',
          i: 'titans',
          rank: '0',
          parents: 'Ouranos, Gaia',
          desc:
            'The Titanes were six ancient gods of time.  When Ouranos buried their six storm-giant brothers within the earth, Gaia persuaded five of the Titanes (all except Okeanos) to act against him. As the Sky descended to lie upon the Earth, four of the brothers seized him, and strained to hold him firm, while the fifth, Kronos, castrated him with an adamantine sickle,  The sons of four of the elder Titanes - Iapetos, Krios, Koios and Hyperion - were also known as Titan-gods',
          children: [
            {
              label: 'Cronus',
              i: 'kronos',
              alt: 'Kronos',
              rank: '1',
              parents: 'Ouranos, Gaia',
              desc:
                'The King of the Titans and the elder Titan-god of time. He castrated and deposed his father Uranus but was in turn was defeated by his own son Zeus after a ten year war. Cronus was cast into Tartarus but at the end of the Age of Heroes Zeus freed and made him king of Elysium',
              children: [
                {
                  label: 'Chiron',
                  i: 'chiron',
                  alt: 'Kheiron',
                  rank: '0',
                  parents: 'Cronus, Philyra',
                  desc:
                    'An immortal Centaur son of Cronus. He was famed for his wisdom and dwelt in a cave on Mt Pelion where he fostered and trained many of the great heroes.',
                  children: [
                    {
                      label: 'Ocyrhoe',
                      alt: 'Okyrhoe',
                      rank: '0',
                      parents: 'Chiron, Chariclo',
                      desc:
                        'A Naiad nymph of the island of Samos who was pursued by the god Apollon. When she attempted to flee the island by ship he turned the vessel to stone and transformed the pilot into a porpoise.',
                    },
                  ],
                },
                {
                  label: 'Demeter',
                  i: 'demeter',
                  rank: '0',
                  parents: 'Cronus, Rheia',
                  desc:
                    'Goddess of agriculture and the fertile earth. She was one of the twelve great Olympian gods. Her Mysteries promised mankind passage to a blessed afterlife.',
                  children: [
                    {
                      label: 'Persephone',
                      i: 'persephone',
                      rank: '0',
                      parents: 'Zeus, Demeter',
                      desc:
                        'The Queen of the underworld. She was a spring-time goddess, the only daughter of Demeter, who was abducted to the underworld by Hades. Her mother brought famineto the world until Zeus agreed to let her return for part of the year.',
                      children: [
                        {
                          label: 'Zagreus',
                          alt: 'Zagreos',
                          rank: '0',
                          parents: 'Zeus, Persephone',
                          desc:
                            'The first-born son of Zeus who the god seated on the throne of heaven armed with thunderbolts when he was but a babe. The Titan gods stole into Olympus, distracted the child, and dismembered him with their bloody knives. Athena recovered his heart, and the god was reborn through Semele as Dionysus.',
                        },
                      ],
                    },
                  ],
                },
                {
                  label: 'Hades',
                  i: 'hades',
                  alt: 'Haides',
                  rank: '2',
                  parents: 'Cronus, Rheia',
                  desc:
                    'One of the three mighty sons of Cronus. When Zeus, Hades and Poseidon drew lots for the division of the world, Haides received the subterranean lands of the dead.',
                },
                {
                  label: 'Hera',
                  i: 'hera',
                  rank: '2',
                  parents: 'Cronus, Rheia',
                  desc:
                    'The Queen of the gods, and goddess of the heavens, women and marriage. She was one of the twelve great Olympian gods.',
                  children: [
                    {
                      label: 'Hephaestus',
                      i: 'hephaistos',
                      alt: 'Hephaistos',
                      rank: '0',
                      parents: 'Zeus, Hera',
                      desc:
                        'The god of fire, volcanism, smiths and craftsmen. He was one of the twelve great Olympian gods.',
                    },
                    {
                      label: 'Hebe',
                      i: 'hebe',
                      rank: '0',
                      parents: 'Zeus, Hera',
                      desc:
                        'The goddess of youth and the wife of Herakles after his ascension to Olympus.',
                    },
                    {
                      label: 'Ares',
                      i: 'ares',
                      rank: '0',
                      parents: 'Zeus, Hera',
                      desc:
                        'The god of war and one of the twelve great Olympian gods.',
                      children: [
                        {
                          label: 'Deimos',
                          i: 'deimos',
                          alt: 'Deimus',
                          rank: '0',
                          parents: 'Ares, Aphrodite',
                          desc: 'The god of terror and an attendant of Ares.',
                        },
                        {
                          label: 'The Erotes',
                          rank: '0',
                          parents: 'Ares, Aphrodite',
                          desc:
                            'Gods and goddesses of the various aspects of erotic love.',
                          children: [
                            {
                              label: 'Anteros',
                              i: 'anteros',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                              desc: 'The god of returned or mutual love. ',
                            },
                            {
                              label: 'Harmonia',
                              i: 'harmonia',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                              desc:
                                'The goddess of harmony and unity. She was married to the mortal Cadmus in a marriage ceremony attended by all the gods. After ruling Thebes for many years the two were transported to Elysium and a life of bliss.',
                            },
                            {
                              label: 'Hedylogos',
                              i: 'hedylogos',
                              alt: 'Hedylogus',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                              desc:
                                'The god of sweet-talk, one of the winged Erotes (Love-Gods).',
                            },
                            {
                              label: 'Himeros',
                              i: 'himeros',
                              alt: 'Himerus',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                              desc:
                                'The god of sexual desire, one of the winged Erotes (Love Gods). He was present at the birth of Aphrodite and became one of her constant companions.',
                            },
                            {
                              label: 'Photos',
                              i: 'photos',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                            },
                          ],
                        },
                        {
                          label: 'Hermaphroditos',
                          i: 'hermaphroditos',
                          alt: 'Hermaphroditus',
                          rank: '0',
                          parents: 'Hermes, Aphrodite',
                          desc:
                            'Loved by the nymph Salmacis, she prayed they might never be separated. The gods took her request literally and merged their forms into one - part male, part female. He was numbered amongst the winged Erotes.',
                        },
                        {
                          label: 'Phobos',
                          i: 'phobos',
                          alt: 'Phobus',
                          rank: '0',
                          parents: 'Ares, Aphrodite',
                          desc:
                            'The daemon personification of fear. He was a son and battlefield companion of the god Ares.',
                        },
                      ],
                    },
                  ],
                },
                {
                  label: 'Hestia',
                  i: 'hestia',
                  rank: '0',
                  parents: 'Cronus, Rheia',
                  desc:
                    'The goddess of hearth and home. She was a virgin goddess, one of the great Olympian gods. She was also the goddess of the sacrificial flame and was so honoured with every sacrifice to the gods.',
                },
                {
                  label: 'Poseidon',
                  i: 'poseidon',
                  rank: '2',
                  parents: 'Cronus, Rheia',
                  desc:
                    'The King of the Sea, and the god of horses, rivers and earthquakes. He was one of the great Olympian gods who received the sea when the cosmos was divided amongst the three sons of Cronus, following the overthrow of the Titans.',
                  children: [
                    {
                      label: 'Chrysaor',
                      alt: 'Khrysaor',
                      rank: '0',
                      parents: 'Poseidon, Medusa',
                      desc: 'A giant, "Golden Falchion".',
                      children: [
                        {
                          label: 'Echidna',
                          alt: 'Ekhidna',
                          rank: '0',
                          parents: 'Keto alone.',
                          desc:
                            'A deadly she-dragon with the upper body of a beautiful nymph, and the tail of a serpent in place of legs. The immortal Echidna married the hundred-headed giant Typhon and spawned a brood of terrible monsters.',
                        },
                      ],
                    },
                    {
                      label: 'Pegasus',
                      i: 'pegasos',
                      alt: 'Pegasos',
                      rank: '0',
                      parents: 'Poseidon, Medusa',
                      desc:
                        'A winged horse which sprung from the neck of Medusa after her decapitation. He was tamed by the hero Bellerophon who rode him into battle against the Amazons and the monster Chimera.',
                    },
                    {
                      label: 'Polyphemos',
                      i: 'polyphemos',
                      alt: 'Polyphemus',
                      rank: '0',
                      parents: 'Poseidon, Thoosa',
                      desc:
                        'A man-eating Cyclops who was blinded by the hero Odysseus',
                    },
                  ],
                },
                {
                  label: 'Zeus',
                  i: 'zeus',
                  rank: '2',
                  parents: 'Cronus, Rheia',
                  desc:
                    'The King of the Gods, greatest of the twelve Olympians. He was the god of the heavens, weather, fate, and kings. His weapon was the fiery thunderbolt.',
                  children: [
                    {
                      label: 'Aeacus',
                      i: 'aiakos',
                      alt: 'Aiakos',
                      rank: '0',
                      parents: 'Zeus, Aegina',
                      desc:
                        'One of the three Judges of the Underworld. He was a king of Aigina appointed to this position after death.',
                    },
                    {
                      label: 'Aegipan',
                      alt: 'Aigipan',
                      rank: '0',
                      parents: 'Zeus, Aega',
                      desc:
                        'The fish-goat god. When Typhon attacked Olympus Aegipan suggested the gods flee to Egypt and hide there in the form of animals. In this exodus he took the form of a goat with the tail of a fish. Later he helped to free the captured Zeus and was placed amongst the stars as the constellation Capricorn.',
                    },
                    {
                      label: 'Aethlius',
                      rank: '0',
                      parents: 'Zeus, Protogenia',
                    },
                    {
                      label: 'Apollo',
                      i: 'apollon',
                      alt: 'Apollon',
                      rank: '2',
                      parents: 'Zeus, Leto',
                      desc:
                        'The god of prophecy, music and healing and one of the twelve great Olympian gods. His arrows brought plague to men.',
                    },
                    {
                      label: 'Arcesius (w/ Chalcomedusa)',
                      children: [
                        {
                          label: 'Odysseus',
                        },
                      ],
                    },
                    {
                      label: 'Ares',
                      i: 'ares',
                      rank: '0',
                      parents: 'Zeus, Hera',
                      desc:
                        'The god of war and one of the twelve great Olympian gods.',
                      children: [
                        {
                          label: 'Deimos',
                          i: 'deimos',
                          alt: 'Deimus',
                          rank: '0',
                          parents: 'Ares, Aphrodite',
                          desc: 'The god of terror and an attendant of Ares.',
                        },
                        {
                          label: 'The Erotes',
                          rank: '0',
                          parents: 'Ares, Aphrodite',
                          desc:
                            'Gods and goddesses of the various aspects of erotic love.',
                          children: [
                            {
                              label: 'Anteros',
                              i: 'anteros',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                              desc: 'The god of returned or mutual love. ',
                            },
                            {
                              label: 'Harmonia',
                              i: 'harmonia',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                              desc:
                                'The goddess of harmony and unity. She was married to the mortal Cadmus in a marriage ceremony attended by all the gods. After ruling Thebes for many years the two were transported to Elysium and a life of bliss.',
                            },
                            {
                              label: 'Hedylogos',
                              i: 'hedylogos',
                              alt: 'Hedylogus',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                              desc:
                                'The god of sweet-talk, one of the winged Erotes (Love-Gods).',
                            },
                            {
                              label: 'Himeros',
                              i: 'himeros',
                              alt: 'Himerus',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                              desc:
                                'The god of sexual desire, one of the winged Erotes (Love Gods). He was present at the birth of Aphrodite and became one of her constant companions.',
                            },
                            {
                              label: 'Photos',
                              i: 'photos',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                            },
                          ],
                        },
                        {
                          label: 'Hermaphroditos',
                          i: 'hermaphroditos',
                          alt: 'Hermaphroditus',
                          rank: '0',
                          parents: 'Hermes, Aphrodite',
                          desc:
                            'Loved by the nymph Salmacis, she prayed they might never be separated. The gods took her request literally and merged their forms into one - part male, part female. He was numbered amongst the winged Erotes.',
                        },
                        {
                          label: 'Phobos',
                          i: 'phobos',
                          alt: 'Phobus',
                          rank: '0',
                          parents: 'Ares, Aphrodite',
                          desc:
                            'The daemon personification of fear. He was a son and battlefield companion of the god Ares.',
                        },
                      ],
                    },
                    {
                      label: 'Artemis',
                      i: 'artemis',
                      rank: '2',
                      parents: 'Zeus, Leto',
                      desc:
                        'The goddess of hunting, wild animals, childbirth and children. She brought sudden death to women and girls with her arrows. She was one of the twelve great Olympian gods.',
                    },
                    {
                      label: 'Athene',
                      i: 'athene',
                      alt: 'Athena',
                      rank: '2',
                      parents: 'Zeus, Metis',
                      desc:
                        'Goddess of war and crafts who sprung fully grown and armed from the head of Zeus. She was one of the twelve great Olympian gods.',
                    },
                    {
                      label: 'Castor',
                      i: 'castor',
                      alt: 'Kastor',
                      rank: '0',
                      parents: 'Zeus, Leda',
                    },
                    {
                      label: 'Dardanus',
                      rank: '0',
                      parents: 'Zeus, Electra',
                      desc:
                        'Founder of the city of Dardania (the later, ill-fated city of Troy); he gave his name to the Dardanelles, once called the Hellespont',
                    },
                    {
                      label: 'Dionysos',
                      i: 'dionysos',
                      rank: '0',
                      parents: 'Zeus, Semele',
                      desc:
                        'Also known as Bacchus in both Greek and Roman mythology, he is the god of wine and the youngest of the twelve Olympians. Dionysus had an unusual birth that evokes the difficulty in fitting him into the Olympian pantheon. The goddess Hestia relinquished her position to him when he entered Olympus after spending many years wandering the world establishing his cult.',
                      children: [
                        {
                          label: 'Iakkhos',
                          i: 'iakkhos',
                          alt: 'Iacchus',
                          rank: '0',
                          parents: 'Dionysos, Aura',
                          desc:
                            'The torch-bearing god of the processions of the Eleusinian Mysteries and its ritual cry iakkhe. He was a daemon attendant of the goddess Demeter.',
                        },
                        {
                          label: 'Telete',
                          rank: '0',
                          parents: 'Dionysos, Nikaia',
                          desc:
                            'The female personification of the Dionysian mystery rites, and initiation into the orgiastic cult.',
                        },
                        {
                          label: 'Komos',
                          i: 'komos',
                          alt: 'Comus',
                          rank: '0',
                          parents: 'Dionysos, Kirke',
                          desc:
                            'The god of banquets and festivity, he was a son of Hermes and Circe. Komos could change the faces of men to beasts in the festivities.',
                        },
                        {
                          label: 'Priapos',
                          i: 'priapos',
                          alt: 'Priapus',
                          rank: '0',
                          parents:
                            'Dionysos, AphroditeThe rustic god of garden fertility. He was an ugly little satyr with enormous genitals.',
                        },
                      ],
                    },
                    {
                      label: 'The Dryads',
                      rank: '0',
                      parents: 'Zeus, Gaia',
                      desc:
                        'Female spirits of nature (nymphs), who preside over the groves and forests',
                    },
                    {
                      label: 'Elleithyia',
                      rank: '0',
                      parents: 'Zeus, Hera',
                    },
                    {
                      label: 'The Graces',
                      i: 'graces',
                      alt: 'Aglaia',
                      rank: '0',
                      parents: 'Zeus, Eurynome',
                      desc:
                        'Also called the three Charites, the goddesses who bestowed beauty and charm and who were themselves the embodiment of both',
                      children: [
                        {
                          label: 'Thalia',
                          i: 'thalia',
                          alt: 'Thaleia',
                          rank: '0',
                          parents: 'Zeus, Euronyme',
                          desc:
                            'One of the three Graces (or Charities), "good cheer"',
                        },
                        {
                          label: 'Euphrosyne',
                          i: 'euphrosyne',
                          rank: '0',
                          parents: 'Zeus, Euronyme',
                          desc:
                            'The goddess of mirth and merriment, one of the three Charites',
                        },
                        {
                          label: 'Aglaea',
                          i: 'aglaea',
                          alt: 'Aglaia',
                          rank: '0',
                          parents: 'Zeus, Eurynome',
                          desc:
                            'Goddess of beauty and one of the three Charites. She was married to Hephaestus ',
                        },
                      ],
                    },
                    {
                      label: 'The Hamadryads',
                      rank: '0',
                      parents: 'Zeus, Gaia',
                      desc:
                        'Tree nymphs who lived and died with the tree they inhabited',
                    },
                    {
                      label: 'Hebe',
                      i: 'hebe',
                      rank: '0',
                      parents: 'Zeus, Hera',
                      desc:
                        'The goddess of youth and the wife of Herakles after his ascension to Olympus.',
                    },
                    {
                      label: 'Helen of Troy',
                      rank: '0',
                      parents: 'Zeus, Leda',
                    },
                    {
                      label: 'Hephaestus',
                      i: 'hephaistos',
                      alt: 'Hephaistos',
                      rank: '0',
                      parents: 'Zeus, Hera',
                      desc:
                        'The god of fire, volcanism, smiths and craftsmen. He was one of the twelve great Olympian gods.',
                    },
                    {
                      label: 'Herakles',
                      i: 'herakles',
                      alt: 'Heracles',
                      rank: '0',
                      parents: 'Zeus, Alcmene',
                      desc:
                        'The greatest of the Greek heroes, famed for his twelve labours. On his funeral pyre he was consumed by lightning and apotheosized by Zeus into a god on Olympus. He there married Hebe, goddess of youth.',
                    },
                    {
                      label: 'Hermes',
                      i: 'hermes',
                      rank: '2',
                      parents: 'Zeus, Maia',
                      desc:
                        'The god of animal husbandry and fertility, trade, messengers, and travel. He was one of the twelve great Olympian gods and the messenger of Zeus, King of the Gods.',
                      children: [
                        {
                          label: 'Hermaphroditos',
                          i: 'hermaphroditos',
                          alt: 'Hermaphroditus',
                          rank: '0',
                          parents: 'Hermes, Aphrodite',
                          desc:
                            'Loved by the nymph Salmacis, she prayed they might never be separated. The gods took her request literally and merged their forms into one - part male, part female. He was numbered amongst the winged Erotes.',
                        },
                      ],
                    },
                    {
                      label: 'The Horai',
                      i: 'horai',
                      parents: 'Zeus, Themis',
                      desc:
                        'The Horae (the Hours) are the goddesses of the seasons (the Greek had only three seasons; spring, summer and winter). They are called Thallo, Auxo and Carpo, names which denote budding, growth and ripening.  The twelve Horai, who were daughters of Helios, were not always clearly distinguishable from the three Horai of the seasons, who were also described as overseeing the paths of the sun.',
                      children: [
                        {
                          label: 'Dike',
                          i: 'dike',
                          alt: 'Dice',
                          rank: '0',
                          parents: 'Zeus, Themis',
                          desc:
                            'The goddess of justice. She was one of the three Horae (Seasons)',
                        },
                        {
                          label: 'Eirene',
                          rank: '0',
                          parents: 'Zeus, Themis',
                          desc:
                            'One of the three Horae, the goddess of peace and spring',
                        },
                        {
                          label: 'Eunomia',
                          rank: '0',
                          parents: 'Zeus, Themis',
                          desc:
                            'The goddess of good order and spring pastures. She was one of the three Horae (Seasons) and an attendant of the goddess Aphrodite',
                        },
                      ],
                    },
                    {
                      label: 'Iasion',
                      rank: '0',
                      parents: 'Zeus, Electra',
                      desc:
                        'A springtime consort of the goddess Demeter and patron-god of her Samothracian Mysteries.',
                    },
                    {
                      label: 'Lacedaemon',
                      rank: '0',
                      parents: 'Zeus, Taygete',
                      desc:
                        'Born when Zeus took advantage of Taygete when she was unconscious ',
                    },
                    {
                      label: 'Minos',
                      i: 'minos',
                      rank: '0',
                      parents: 'Zeus, Europa',
                      desc:
                        'A lawmaking King of Crete who was appointed a judge of the dead in the underworld.',
                    },
                    {
                      label: 'Moirae (Fates)',
                      i: 'moirae',
                      alt: 'Moirai',
                      rank: '0',
                      parents: 'Zeus, Themis',
                      desc: 'The female deities who supervised fate',
                      children: [
                        {
                          label: 'Atropos',
                          alt: 'Atropus',
                          rank: '0',
                          parents: 'Zeus, Themis',
                          desc:
                            'Atropos was one of the three Moirae, the Fates, who cut the thread or web of life',
                        },
                        {
                          label: 'Klotho',
                          alt: 'Clotho',
                          rank: '0',
                          parents: 'Zeus, Themis',
                          desc:
                            'The youngest of the three Fates, who spins the thread of human life',
                        },
                        {
                          label: 'Lakhesis',
                          alt: 'Lachesis',
                          rank: '0',
                          parents: 'Zeus, Themis',
                          desc:
                            'One of the three Fates (Moirae), the :Disposer"; he measures the length of the thread of human life spun by Klotho and determines its destiny',
                        },
                      ],
                    },
                    {
                      label: 'The Muses',
                      i: 'muses',
                      alt: 'Terpsikhore',
                      rank: '0',
                      parents: 'Zeus, Mnemosyne',
                      desc: 'The Muse of choral dance and song',
                      children: [
                        {
                          label: 'Calliope',
                          i: 'kalliope',
                          alt: 'Kalliope',
                          rank: '0',
                          parents: 'Zeus, Mnemosyne',
                          desc:
                            'The eldest of the Muses. She was muse of epic poetry',
                        },
                        {
                          label: 'Clio',
                          alt: 'Kleio',
                          rank: '0',
                          parents: 'Zeus, Mnemosyne',
                          desc: 'The muse of history',
                        },
                        {
                          label: 'Erato',
                          rank: '0',
                          parents: 'Zeus, Mnemosyne',
                          desc: 'The Muse of lyric love poetry.',
                        },
                        {
                          label: 'Euterpe',
                          rank: '0',
                          parents: 'Zeus, Mnemosyne',
                          desc: 'The Muse of lyric poetry',
                        },
                        {
                          label: 'Melpomene',
                          rank: '0',
                          parents: 'Zeus, Mnemosyne',
                          desc: 'The Muse of tragedy',
                        },
                        {
                          label: 'Polyhymnia',
                          i: 'polyhymnia',
                          alt: 'Polyhymnia',
                          rank: '0',
                          parents: 'Zeus, Mnemosyne',
                          desc: 'The Muse of hymns',
                        },
                        {
                          label: 'Terpsichore',
                          i: 'terpsikhore',
                          alt: 'Terpsikhore',
                          rank: '0',
                          parents: 'Zeus, Mnemosyne',
                          desc: 'The Muse of choral dance and song',
                        },
                        {
                          label: 'Thalia 1',
                          i: 'thalia',
                          alt: 'Thaleia',
                          rank: '0',
                          parents: 'Zeus, Mnemosyne',
                          desc: 'The Muse of comedy and pastoral poetry',
                        },
                        {
                          label: 'Urania',
                          alt: 'Ourania',
                          rank: '0',
                          parents: 'Zeus, Mnemosyne',
                          desc: 'The Muse of astronomy',
                        },
                      ],
                    },
                    {
                      label: 'Myrmidon',
                      rank: '0',
                      parents: 'Zeus, Eurymedusa',
                    },
                    {
                      label: 'The Oreads',
                      rank: '0',
                      parents: 'Zeus, Gaia',
                      desc:
                        'The Greek nymphs of mountains and grottoes (from the Greek oros "mountain"). They belong to the retinue of Aphrodite',
                    },
                    {
                      label: 'Pandia',
                      alt: 'Pandeia',
                      rank: '0',
                      parents: 'Zeus, Selene',
                      desc:
                        'The goddess of brightness; a minor goddess whose name means "all bright"',
                    },
                    {
                      label: 'Persephone',
                      i: 'persephone',
                      rank: '0',
                      parents: 'Zeus, Demeter',
                      desc:
                        'The Queen of the underworld. She was a spring-time goddess, the only daughter of Demeter, who was abducted to the underworld by Hades. Her mother brought famineto the world until Zeus agreed to let her return for part of the year.',
                      children: [
                        {
                          label: 'Zagreus',
                          alt: 'Zagreos',
                          rank: '0',
                          parents: 'Zeus, Persephone',
                          desc:
                            'The first-born son of Zeus who the god seated on the throne of heaven armed with thunderbolts when he was but a babe. The Titan gods stole into Olympus, distracted the child, and dismembered him with their bloody knives. Athena recovered his heart, and the god was reborn through Semele as Dionysus.',
                        },
                      ],
                    },
                    {
                      label: 'Perseus',
                      i: 'perseus',
                      rank: '0',
                      parents: 'Zeus, Danae',
                    },
                    {
                      label: 'Polydeuces',
                      i: 'polydeuces',
                      rank: '0',
                      parents: 'Zeus, Leda',
                    },
                    {
                      label: 'Rhadamanthys',
                      i: 'rhadamanthys',
                      rank: '0',
                      parents: 'Zeus, Europa',
                      desc:
                        'One of the three judges of the dead in the underworld and the Lord of the Islands of the Blessed.',
                    },
                    {
                      label: 'Sarpedon',
                      i: 'sarpedon',
                      rank: '0',
                      parents: 'Zeus, Europa',
                    },
                    {
                      label: 'Tantalus',
                      rank: '0',
                      parents: 'Zeus, Plouto',
                    },
                    {
                      label: 'Thriae',
                      rank: '0',
                      parents: 'Zeus, Themis',
                      desc:
                        'Lesser goddesses of nature who can foresee the future or foretell the unknown by inspiration, magic, signs, or omens.  The word Thriae means "pebbles," because the future was foretold by tossing pebbles',
                    },
                    {
                      label: 'Zagreus',
                      alt: 'Zagreos',
                      rank: '0',
                      parents: 'Zeus, Persephone',
                      desc:
                        'The first-born son of Zeus who the god seated on the throne of heaven armed with thunderbolts when he was but a babe. The Titan gods stole into Olympus, distracted the child, and dismembered him with their bloody knives. Athena recovered his heart, and the god was reborn through Semele as Dionysus.',
                    },
                  ],
                },
              ],
            },
            {
              label: 'Hyperion',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'Titan-god of the light of heaven and the ordering of the days and months',
              children: [
                {
                  label: 'Helios',
                  i: 'helios',
                  alt: 'Helius',
                  rank: '0',
                  desc:
                    'The god of the sun, who rode through the sky in a chariot drawn by winged horses and crowned with the aureole of the sun. Husband of Clymene and father of Phaethon.',
                  children: [
                    {
                      label: 'Aegea',
                      rank: '0',
                      parents: 'Helios, Perse',
                      desc:
                        'Sister to Circe and Pasiphae, and daughter of the sun. When the Titans attacked the gods of Olympus, Gaia placed Aega in a cave to hide her shining loveliness',
                    },
                    {
                      label: 'Aetes',
                      rank: '0',
                      parents: 'Helios, Perse',
                      desc:
                        'King of Colchis;  Aetes is the father of the sorceress Medea.',
                    },
                    {
                      label: 'Circe',
                      i: 'kirke',
                      alt: 'Kirke',
                      rank: '0',
                      parents: 'Helios, Perse',
                      desc:
                        'An immortal witch who dwelt on the island of Aeaea. She turned travellers into beasts with her potions.',
                    },
                    {
                      label: 'Eos',
                      i: 'eos',
                      rank: '0',
                      parents: 'Hyperion, Theia',
                      desc:
                        'The Titan goddess of the dawn. She was cursed by Aphrodite with an insatiable appetite for men, loving one after another - Cephalus, Tithonus, Phaethon, Orion.',
                      children: [
                        {
                          label: 'Astraea',
                          alt: 'Astraia',
                          rank: '0',
                          desc:
                            'The younger Titan-goddess of justice. Astraea left the earth at the end of the Golden Age and entered the heavens as the constellation Virgo.',
                        },
                        {
                          label: 'Boreas',
                          i: 'boreas',
                          rank: '0',
                          parents: 'Astraeus, Eos',
                          desc:
                            'The purple-haired, winged god of the North-Wind. He was also the god of winter who carried snow on his chill breath.',
                        },
                        {
                          label: 'Eosphorus',
                          i: 'eosphoros',
                          alt: 'Eosphoros',
                          rank: '0',
                          parents: 'Aestraeus, Eos',
                          desc:
                            'The god of the morning star who heralded the arrival of dawn.',
                        },
                        {
                          label: 'Eurus',
                          alt: 'Euros',
                          rank: '0',
                          parents: 'Astraeus, Eos',
                          desc:
                            'The god of the East Wind (or more specifically the South-East Wind).',
                        },
                        {
                          label: 'Hesperus',
                          alt: 'Hesperos',
                          rank: '0',
                          parents: 'Aestraeus, Eos',
                          desc: 'The god of the evening star (Venus).',
                        },
                        {
                          label: 'Notus',
                          alt: 'Notos',
                          rank: '0',
                          parents: 'Astraeus, Eos',
                          desc: 'The god of the South Wind.',
                        },
                        {
                          label: 'Zephyrus',
                          i: 'zephyros',
                          alt: 'Zephyros',
                          rank: '0',
                          parents: 'Astraeus, Eos',
                          desc:
                            'The god of the gentle West-Wind and the season of spring.',
                        },
                      ],
                    },
                    {
                      label: 'The 7 Heliadae',
                      rank: '0',
                      parents: 'Helios, Rhode',
                      desc:
                        'The Heliadae were expert astrologers and seafarers, related to the Heliades, daughters of Helios. They were Helia, Merope, Phoebe, Aetheria, and Dioxippe.',
                      children: [
                        {
                          label: 'Actis',
                          rank: '0',
                        },
                        {
                          label: 'Candallus',
                          rank: '0',
                        },
                        {
                          label: 'Cercaphus',
                          rank: '0',
                        },
                        {
                          label: 'Electryone',
                          rank: '0',
                        },
                        {
                          label: 'Macareus',
                          rank: '0',
                        },
                        {
                          label: 'Ochimus',
                          rank: '0',
                        },
                        {
                          label: 'Tenages',
                          rank: '0',
                        },
                        {
                          label: 'Triopas',
                          rank: '0',
                        },
                      ],
                    },
                    {
                      label: 'Lampetia',
                      rank: '0',
                      parents: 'Helios, Neaera',
                      desc:
                        'A nymph daughter of Helios who cared for her father"s sheep-flocks on the island of Thrinacie.',
                    },
                    {
                      label: 'Pasiphae',
                      i: 'pasiphae',
                      rank: '0',
                      parents: 'Helios, Perse',
                      desc:
                        'A goddess-witch of the island of Crete, the wife of King Minos. She was filled with an unnatural desire for the Cretan Bull and after mating it conceived the bull-headed Minotaur.',
                    },
                    {
                      label: 'Perses',
                      shortlabel: 'Perses',
                      parents: 'Helios, Perse',
                      rank: '0',
                      desc: 'The Titan god of destruction and laying waste.',
                      children: [
                        {
                          label: 'Hecate',
                          i: 'hekate',
                          alt: 'Hekate',
                          parents: 'Perses, Asteria',
                          rank: '0',
                          desc:
                            'The Titan goddess of witchcraft, ghosts and necromancy. She assisted Demeter in her search for Persephone, and became her minister in Hades.',
                        },
                      ],
                    },
                    {
                      label: 'Phaethon',
                      alt: 'Phaeton',
                      rank: '0',
                      parents: 'Helios, Clymene',
                      desc:
                        'A son of the sun-god Helios who attempted to drive his father"s chariot. He lost control and after scorching the earth was struck down by the bolt of Zeus.',
                    },
                    {
                      label: 'Phaethusa',
                      alt: 'Paethousa',
                      rank: '0',
                      parents: 'Helios, Neaera',
                      desc:
                        'A nymph daughter of the sun-god Helios, and the shepherdess of his flocks on the island of Thrinacie.',
                    },
                    {
                      label: 'Selene',
                      i: 'selene',
                      parents: 'Hyperion, Theia',
                      rank: '0',
                      desc:
                        'The goddess of the moon who rode through the sky at night in a chariot drawn by winged horses, or seated side-saddle on an ass. She fell in love with the young shepherd Endymion who was granted mmortality in a state of eternal sleep.',
                    },
                  ],
                },
              ],
            },
            {
              label: 'Iapetus',
              alt: 'Iapetos',
              rank: '1',
              parents: 'Ouranos, Gaia',
              desc: 'The Titan-god of mortality and wounding',
              children: [
                {
                  label: 'Atlas',
                  i: 'atlas',
                  rank: '1',
                  desc:
                    'The Titan-god of daring. He led the Titan-army in the war against the gods and as punishment was condemned to bear the heavens upon his shoulders.',
                  children: [
                    {
                      label: 'Calypso',
                      alt: 'Kalypso',
                      rank: '0',
                      parents: 'Atlas, Asia',
                      desc:
                        'A goddess-nymph of the island Ogygia. She detained the hero Odysseus on her island for many years.',
                    },
                    {
                      label: 'The Hesperides',
                      rank: '0',
                      parents: 'Atlas, Hesperius',
                      desc:
                        'The Hesperides are Aegle, Arethusa, Erytheia and Hesperia, nymphs who live in a beautiful garden.  The Hesperides are Aegle, Arethusa, Erytheia and Hesperia',
                      i: 'hesperides',
                    },
                    {
                      label: 'The Hyades',
                      rank: '0',
                      parents: 'Atlas, Aethra',
                      desc:
                        'The sisters of the Pleiades.  In some traditions they were regarded as the nurses of either Dionysus or the infant Zeus. As a reward, they were placed in the sky as a constellation',
                      children: [
                        {
                          label: 'Ambrosia',
                          rank: '0',
                          parents: 'Atlas, Aethra',
                          desc: 'One of the Hyades',
                        },
                        {
                          label: 'Cleeia',
                          rank: '0',
                          parents: 'Atlas, Aethra',
                          desc: 'One of the Hyades',
                        },
                        {
                          label: 'Coronis',
                          alt: 'Koronis',
                          rank: '0',
                          parents: 'Atlas, Aethra',
                          desc: 'One of the starry Hyades.',
                        },
                        {
                          label: 'Eudora',
                          rank: '0',
                          parents: 'Atlas, Aethra',
                          desc: 'One of the starry Hyades',
                        },
                        {
                          label: 'Pedile',
                          rank: '0',
                          parents: 'Atlas, Aethra',
                          desc: 'One of the Hyades',
                        },
                        {
                          label: 'Phaeo',
                          rank: '0',
                          parents: 'Atlas, Aethra',
                          desc: 'One of the Hyades',
                        },
                        {
                          label: 'Phaesla',
                          rank: '0',
                          parents: 'Atlas, Aethra',
                          desc: 'One of the Hyades',
                        },
                        {
                          label: 'Phyto',
                          rank: '0',
                          parents: 'Atlas, Aethra',
                          desc: 'One of the Hyades',
                        },
                        {
                          label: 'Polyxo',
                          rank: '0',
                          parents: 'Atlas, Aethra',
                          desc: 'One of the Hyades',
                        },
                        {
                          label: 'Theone',
                          rank: '0',
                          parents: 'Atlas, Aethra',
                          desc: 'One of the Hyades',
                        },
                      ],
                    },
                    {
                      label: 'Hyas',
                      rank: '0',
                      parents: 'Atlas, Aethra',
                      desc:
                        'The water-bearing son of the Titan Atlas who was killed by a lion and placed amongst the stars as the constellation Aquarius.',
                    },
                    {
                      label: 'Maera',
                      alt: 'Maira',
                      rank: '0',
                      parents: 'Atlas, Asia',
                      desc:
                        'A star-nymph daughter of the Titan Atlas, and wife of the Arcadian King Tegeates. She was the goddess of the scorching dog-star Sirios.',
                    },
                    {
                      label: 'The Pleiades',
                      rank: '0',
                      parents: 'Atlas, Pleione',
                      desc:
                        'The virgin companions of Artemis. When Orion, a beautiful hunter, pursued them and their mother, they prayed to the gods for rescue. The gods answered they prayer and they were changed into doves, and later into stars. Zeus placed them in the sky where they formed a part of the constellation of Taurus',
                      children: [
                        {
                          label: 'Alcyone',
                          alt: 'Alkyone',
                          rank: '0',
                          desc:
                            'One of the Pleiades. She was loved by Poseidon.',
                        },
                        {
                          label: 'Celaeno',
                          alt: 'Kelaino',
                          rank: '0',
                          desc:
                            'One of the starry Pleiad nymphs. She was loved by the god Poseidon.',
                        },
                        {
                          label: 'Maia',
                          i: 'maia',
                          rank: '0',
                          desc:
                            'A Pleiad star-nymph of Mount Cyllene in Arcadia. She was the mother of the god Hermes by Zeus.',
                        },
                        {
                          label: 'Merope',
                          rank: '0',
                          desc:
                            'One of the Pleiad star-nymphs, the wife of the impious Corinthian King Sisyphos. Blushing in shame for her husband"s crimes, her star shone only faintly.',
                        },
                        {
                          label: 'Sterope',
                          rank: '0',
                          desc:
                            'One of the starry Pleiad nymphs. She was loved by the god Ares.',
                        },
                        {
                          label: 'Taygete',
                          rank: '0',
                          desc:
                            'The starry Pleiad nymph of Mount Taygetus who was loved by Zeus. She was the ancestress of the kings of Sparta.',
                        },
                      ],
                    },
                  ],
                },
                {
                  label: 'Epimethus',
                  i: 'epimethus',
                  rank: '0',
                  parents: 'Iapetus, Clymene',
                  desc:
                    'Epimetheus ("afterthought") foolishly ignored his brother Prometheus\' warnings to beware of any gifts from Zeus. He accepted Pandora as his wife, thereby bringing ills and sorrows to the world. Epimetheus was made up by the Greeks as the antipode of his brother Prometheus ("forethought").',
                },
                {
                  label: 'Menoetius',
                  alt: 'Menoitios',
                  rank: '0',
                  parents: 'Iapetus, Clymene ',
                  desc:
                    'The Titan god of rash anger. He was blasted into Erebus with a thunderbolt by Zeus.',
                },
                {
                  label: 'Prometheus',
                  i: 'prometheus',
                  rank: '0',
                  parents: 'Iapetus, Clymene',
                  desc:
                    'The Titan god of forethought and the creator of mankind. He cheated the gods on several occasions on behalf of man, including the theft of fire. As punishment Zeus chained him to the Caucasus mountains and sent an eagle to prey on his ever-regenerating liver. He was later freed by Heracles.',
                },
              ],
            },
            {
              label: 'Coeus',
              alt: 'Koios',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc: 'The Titan-god of intelligence and the axis of heaven.',
              children: [
                {
                  label: 'Leto',
                  i: 'leto',
                  rank: '0',
                  parents: 'Coeus, Phoibe',
                  desc:
                    'Hera was jealous of Leto because Zeus, the husband of Hera, had fallen in love with her. From their union Leto bore the divine twins, Artemis and Apollo.',
                  children: [
                    {
                      label: 'Apollo',
                      i: 'apollon',
                      alt: 'Apollon',
                      rank: '2',
                      parents: 'Zeus, Leto',
                      desc:
                        'The god of prophecy, music and healing and one of the twelve great Olympian gods. His arrows brought plague to men.',
                    },
                    {
                      label: 'Artemis',
                      i: 'artemis',
                      rank: '2',
                      parents: 'Zeus, Leto',
                      desc:
                        'The goddess of hunting, wild animals, childbirth and children. She brought sudden death to women and girls with her arrows. She was one of the twelve great Olympian gods.',
                    },
                  ],
                },
                {
                  label: 'Asteria',
                  i: 'asteria',
                  rank: '0',
                  parents: 'Coeus, Phoibe',
                  desc:
                    'The Titaness goddess of the prophesies of night. She was the mother of the goddess Hecate. When Asteria was pursued by Zeus she changed herself into a quail and leapt from heaven into the sea. There she metamorphosed (permanently) into the island of Delos.',
                  children: [
                    {
                      label: 'Hecate',
                      i: 'hekate',
                      alt: 'Hekate',
                      parents: 'Perses, Asteria',
                      rank: '0',
                      desc:
                        'The Titan goddess of witchcraft, ghosts and necromancy. She assisted Demeter in her search for Persephone, and became her minister in Hades.',
                    },
                  ],
                },
              ],
            },
            {
              label: 'Krios',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'Krios was the Titan god of leadership, domesticated animals and the constellations of heaven',
              children: [
                {
                  label: 'Astraeus',
                  alt: 'Astraios',
                  rank: '0',
                  parents: 'Krios, Eurybia',
                  desc:
                    'The Titan-god of the stars, astronomy and astrology. He was the father of the Winds and the Stars by the dawn-goddess Eos.',
                  children: [
                    {
                      label: 'Boreas',
                      i: 'boreas',
                      rank: '0',
                      parents: 'Astraeus, Eos',
                      desc:
                        'The purple-haired, winged god of the North-Wind. He was also the god of winter who carried snow on his chill breath.',
                    },
                    {
                      label: 'Eurus',
                      alt: 'Euros',
                      rank: '0',
                      parents: 'Astraeus, Eos',
                      desc:
                        'The god of the East Wind (or more specifically the South-East Wind).',
                    },
                    {
                      label: 'Notus',
                      alt: 'Notos',
                      rank: '0',
                      parents: 'Astraeus, Eos',
                      desc: 'The god of the South Wind.',
                    },
                    {
                      label: 'Zephyrus',
                      i: 'zephyros',
                      alt: 'Zephyros',
                      rank: '0',
                      parents: 'Astraeus, Eos',
                      desc:
                        'The god of the gentle West-Wind and the season of spring.',
                    },
                    {
                      label: 'Astraea',
                      alt: 'Astraia',
                      rank: '0',
                      desc:
                        'The younger Titan-goddess of justice. Astraea left the earth at the end of the Golden Age and entered the heavens as the constellation Virgo.',
                    },
                    {
                      label: 'Hesperus',
                      alt: 'Hesperos',
                      rank: '0',
                      parents: 'Aestraeus, Eos',
                      desc: 'The god of the evening star (Venus).',
                    },
                    {
                      label: 'Eosphorus',
                      i: 'eosphoros',
                      alt: 'Eosphoros',
                      rank: '0',
                      parents: 'Aestraeus, Eos',
                      desc:
                        'The god of the morning star who heralded the arrival of dawn.',
                    },
                  ],
                },
                {
                  label: 'Styx (hate)',
                  alt: 'Pallas',
                  rank: '0',
                  parents: 'Okeanus, Tethys',
                  desc:
                    'The goddess of the underworld river Styx, eldest of the Oceanids. She brought her children to side with Zeus in the Titan-War, and as reward he made her waters the inviolate oath of the gods.',
                  children: [
                    {
                      label: 'Bia',
                      rank: '0',
                      parents: 'Pallas, Styx',
                      desc:
                        'The goddess of force. She sided with Zeus in the Titan-War and became one of his chief attendants.',
                    },
                    {
                      label: 'Nike',
                      i: 'nike',
                      parents: 'Pallas, Styx',
                      rank: '0',
                      desc:
                        'The goddess of victory who sided with Zeus in the Titan-War and became his constant companion.',
                    },
                    {
                      label: 'Cratos',
                      rank: '0',
                      parents: 'Pallas, Styx',
                      desc: 'The personification of strength and power.',
                    },
                    {
                      label: 'Zelus',
                      alt: 'Zelos',
                      parents: 'Pallas, Styx',
                      rank: '0',
                      desc:
                        'The personification of rivalry. He and his three siblings were daemon attendants of the god Zeus.',
                    },
                  ],
                },
              ],
            },
            {
              label: 'Okeanus',
              i: 'okeanos',
              alt: 'Oceanus',
              rank: '1',
              parents: 'Ouranos, Gaia',
              desc:
                'Eldest of the Titans, god of the vast ocean (later identified with the Atlantic), and the father by Tethys of all rivers. He remained neutral in the Titan war. He fostered the three daughters of Cronus after they were disgorged by their father',
              children: [
                {
                  label: 'Okeanides',
                  i: 'okeanides',
                  alt: 'Oceanides',
                  rank: '0',
                  parents: 'Okeanos, Tethys',
                  desc:
                    'Nymphs of the ocean. There were also nymphs of springs and rivers (Naiads), clouds (Nephelai), cool breezes (Aurai), meadows (Limoniads) and groves (Alseides). The eldest of them were lower ranked Titan goddesses.',
                  children: [
                    {
                      label: 'Admete',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'An Okeanis whose name means "the unbroken" or "unwedded". She may have been the Naias Nymphe of a wild mountain stream, or the Nephele of wild clouds and rain. Admete was perhaps a goddess of unwedded maidens, her sister Zeuxo, representing the yoke of marriage',
                    },
                    {
                      label: 'Akaste',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'An Okeanis whose name means "unstable" or "irregular". She may have been the Naias Nymphe of an erratically flowing spring or stream, or a Nephele of unpredictable rainfall. Akaste might also have been a gooddess of unpredictable behavior',
                    },
                    {
                      label: 'Amphiro',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'An Okeanis named "the surrounding flow". She may have been a Naias of a stream of Nephele of rain',
                    },
                    {
                      label: 'Amphitrite',
                      i: 'amphitrite',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis goddess of the sea. (She was usually numbered amongst the Nereides rather than Okeanides)',
                    },
                    {
                      label: 'Asia (Continent Asia)',
                      alt: 'Asie',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis Nymphe of the region of Asia (or rather Anatolian peninsular). She was the wife or mother of the Titan Prometheus. Her sister was Europe',
                      children: [
                        {
                          label: 'Calypso',
                          alt: 'Kalypso',
                          rank: '0',
                          parents: 'Atlas, Asia',
                          desc:
                            'A goddess-nymph of the island Ogygia. She detained the hero Odysseus on her island for many years.',
                        },
                        {
                          label: 'Maera',
                          alt: 'Maira',
                          rank: '0',
                          parents: 'Atlas, Asia',
                          desc:
                            'A star-nymph daughter of the Titan Atlas, and wife of the Arcadian King Tegeates. She was the goddess of the scorching dog-star Sirios.',
                        },
                      ],
                    },
                    {
                      label: 'Asterope',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc: 'The "starry-eyed"; an Oceanid loved by Zeus',
                    },
                    {
                      label: 'Beroe',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis Nymphe of the city of Beroe (Beruit) in Lebanon',
                    },
                    {
                      label: 'Daeira (Knowledge)',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'An Okeanis Nymphe named "the knowing" or "learned". She was a goddess of the town of Eleusis, perhaps the Naias of the sacred town well',
                    },
                    {
                      label: 'Dione',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis Nymphe "heavenly" or "divine" was a goddess of the oracle of Dodona in Thesprotia.  Some say she was the mother of the goddess Aphrodite by Zeus.  Dione was probably the same as the Okeanis Dodone, an eponymous goddess of the shrine',
                    },
                    {
                      label: 'Dodone',
                      alt: 'Dodona',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis Nymphe of Dodona in Thesprotia. She may have been the Naias of a local spring or well, and was perhaps the same as the Okeanis Dione',
                    },
                    {
                      label: 'Doris',
                      i: 'doris',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Oceanid goddess of the mingling of fresh water with the brine. She was the wife of the sea-god Nereus, her half-brother, and mother of the fifty Nereides.',
                      children: [
                        {
                          label: 'The Nereides',
                          i: 'nereides',
                          rank: '0',
                          parents: 'Nereus, Doris',
                          desc:
                            'The fifty daughters who dwell in the Mediterranean Sea, these beautiful women were always friendly and helpful towards sailors fighting perilous storms. They are believed to be able to prophesize. They belong to the retinue of Poseidon',
                        },
                      ],
                    },
                    {
                      label: 'Eidyia',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "seeing" or "knowing" was the wife of King Aeetes of Kolkhis. She was apparently a goddess connected with the power of witchcraft',
                    },
                    {
                      label: 'Elektra (Amber-colour)',
                      shortlabel: 'Elektra',
                      alt: 'Electra',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Oceanid of amber-light. She was married to the wondrous sea-god Thaumas and bore him Iris, the rainbow, and the whirlwind Harpies.',
                    },
                    {
                      label: 'Ephyra',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The eponymous Oceanid nymph of the town of Ephyra (Corinth)',
                    },
                    {
                      label: 'Eudora',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "good-gifts" was perhaps a Nephele of good downfalls of rain or the Naias of a generously flowing spring',
                    },
                    {
                      label: 'Europe (Continent Europe)',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis Nymphe of the continent of Europe. Her sister was Asia',
                    },
                    {
                      label: 'Eurynome 1',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis Nymphe of "broad-pastures". She was the mother of the Kharites by Zeus. Eurynome was perhaps one of the Epimelides, Nymphai of grazing pasture',
                    },
                    {
                      label: 'Eurynome 2',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis Nymphe of "wide-rulership". She was the wife of the Titan Ophion',
                    },
                    {
                      label: 'Galaxaura',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis Nymphe "milky breeze" was probably the Aura or Nephele of the mist-clearing breeze',
                    },
                    {
                      label: 'Hagno',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "holy" was one of the nurses of the infant god Zeus. She was the Naias of the Arkan spring Hagno, whose waters generated the clouds of a Nephele',
                    },
                    {
                      label: 'Hesione',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "knowing" or "foresight" was a goddess of foreknowledge. She was the wife of the Titan Prometheus (forethought). Hesione was also known as Pronoia',
                    },
                    {
                      label: 'Hippo',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis Nymphe "horse" was the Naias of a stream or Aura of breezes - both winds and waters were often likened to horses',
                    },
                    {
                      label: 'Hyale',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "crystal" or "clear like crystal" was a Nephele of rain. She was on the attendant Nymphs of Artemis',
                    },
                    {
                      label: 'Iakhe',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis of the ritual cry of joy "iakhe". She was a goddess of the Eleusinian Mysteries',
                    },
                    {
                      label: 'Ianeira',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'An Okeanis Nymphe, perhaps the goddess of the Ionian tribe of Greeks. Her sister Doris presided over the Dorians',
                    },
                    {
                      label: 'Ianthe (Violet-colour)',
                      shortlabel: 'Ianthe',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis of "violet flowers" or the colour "violet". She may have been a Nephele of the violet tinged clouds of dawn, or an Anthousa (flower-nymph) of violets',
                    },
                    {
                      label: 'Kallirhoe',
                      i: 'kallirhoe',
                      alt: 'Callirhoe',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "fair-flowing" was either the Naias of a good flowing spring or Nephele (Cloud) of good downpours. She was the mother of the Erythian (Spanish) giant Geryon.',
                    },
                    {
                      label: 'Kalypso',
                      alt: 'Calypso',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'An Okeanis whose name means "hidden", "covered"or "veiled". She may have been the Naias of a covered or hidden spring or the Aura of invisible breezes',
                    },
                    {
                      label: 'Kamarina',
                      alt: 'Camarina',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis Nymphe of the city of Kamarina in Sicily. She was probably the Naias of the town fountain or well',
                    },
                    {
                      label: 'Kapheira',
                      alt: 'Capheira',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "storm-breath" was probably the Aura of strong winds. She was a nurse of the god Poseidon',
                    },
                    {
                      label: 'Kerkeis',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc: 'One of the Okeanides',
                    },
                    {
                      label: 'Keto',
                      alt: 'Ceto',
                      rank: '0',
                      parents: 'Pontos, Gaia',
                      desc:
                        'An ancient Sea-Goddess. She personified the dangers of the sea. Most of the monsters of mythology were descended from her.',
                      children: [
                        {
                          label: 'Echidna',
                          alt: 'Ekhidna',
                          rank: '0',
                          parents: 'Keto alone.',
                          desc:
                            'A deadly she-dragon with the upper body of a beautiful nymph, and the tail of a serpent in place of legs. The immortal Echidna married the hundred-headed giant Typhon and spawned a brood of terrible monsters.',
                        },
                        {
                          label: 'The Gorgons',
                          rank: '0',
                          parents: 'Phorkys, Keto',
                          desc:
                            'A monstrous feminine creature whose appearance would turn anyone who laid eyes upon it to stone. Later there were three of them: Euryale ("far-roaming"), Sthenno ("forceful"), and Medusa ("ruler"), the only one of them who was mortal. ',
                          children: [
                            {
                              label: 'Euryale',
                              rank: '0',
                              desc: 'One of the two immortal Gorgons.',
                            },
                            {
                              label: 'Medusa',
                              i: 'medousa',
                              alt: 'Medousa',
                              rank: '0',
                              desc:
                                'A serpent-haired Gorgon who was slain by the hero Perseus. When she was beheaded her two children by Poseidon were born from her bloody neck.',
                              children: [
                                {
                                  label: 'Pegasus',
                                  i: 'pegasos',
                                  alt: 'Pegasos',
                                  rank: '0',
                                  parents: 'Poseidon, Medusa',
                                  desc:
                                    'A winged horse which sprung from the neck of Medusa after her decapitation. He was tamed by the hero Bellerophon who rode him into battle against the Amazons and the monster Chimera.',
                                },
                                {
                                  label: 'Chrysaor',
                                  alt: 'Khrysaor',
                                  rank: '0',
                                  parents: 'Poseidon, Medusa',
                                  desc: 'A giant, "Golden Falchion".',
                                  children: [
                                    {
                                      label: 'Echidna',
                                      alt: 'Ekhidna',
                                      rank: '0',
                                      parents: 'Keto alone.',
                                      desc:
                                        'A deadly she-dragon with the upper body of a beautiful nymph, and the tail of a serpent in place of legs. The immortal Echidna married the hundred-headed giant Typhon and spawned a brood of terrible monsters.',
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              label: 'Sthenno',
                              rank: '0',
                            },
                          ],
                        },
                        {
                          label: 'Graeae',
                          i: 'graeae',
                          rank: '0',
                          desc:
                            'The three "old women" or "gray ones," they were gray-haired from birth and have only one eye and one tooth, which they share among them. They are Enyo ("horror"), Deino ("dread") and Pemphredo ("alarm")',
                          children: [
                            {
                              label: 'Deino',
                              rank: '0',
                              parents: 'Phorkys, Keto',
                              desc: 'One of the old hag Graeae.',
                            },
                            {
                              label: 'Enyo',
                              rank: '0',
                              parents: 'Phorkys, Keto',
                              desc:
                                'The goddess of war, a battlefield companion of Ares.',
                            },
                            {
                              label: 'Pemphredo',
                              rank: '0',
                              parents: 'Phorkys, Keto',
                              desc: 'One of old hag Graeae.',
                            },
                          ],
                        },
                        {
                          label: 'Thoosa',
                          rank: '0',
                          parents: 'Porchys, Keto',
                          desc:
                            'A sea nymph loved by the god Poseidon. She was the mother of the Cyclops Polyphemus.',
                          children: [
                            {
                              label: 'Polyphemos',
                              i: 'polyphemos',
                              alt: 'Polyphemus',
                              rank: '0',
                              parents: 'Poseidon, Thoosa',
                              desc:
                                'A man-eating Cyclops who was blinded by the hero Odysseus',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      label: 'Khariklo',
                      i: 'khariklo',
                      alt: 'Chariklo',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'A Okeanis Nymphe of Mount Pelion in Thessalia. She was the wife of the wise kentauros (centaur) Kheiron',
                    },
                    {
                      label: 'Khryseis (Gold-colour)',
                      shortlabel: 'Khryseis',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "golden" or "golden-yellow" was probably either a Nephele of the golden-tinged clouds of sunset, or the Naias of a gold-producing mountain-spring',
                    },
                    {
                      label: 'Klymene 1',
                      i: 'klymene',
                      alt: 'Clymene',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis goddess of fame and infamy was the wife of the Titan Iapetos',
                      children: [
                        {
                          label: 'Atlas',
                          i: 'atlas',
                          rank: '1',
                          desc:
                            'The Titan-god of daring. He led the Titan-army in the war against the gods and as punishment was condemned to bear the heavens upon his shoulders.',
                          children: [
                            {
                              label: 'Calypso',
                              alt: 'Kalypso',
                              rank: '0',
                              parents: 'Atlas, Asia',
                              desc:
                                'A goddess-nymph of the island Ogygia. She detained the hero Odysseus on her island for many years.',
                            },
                            {
                              label: 'The Hesperides',
                              rank: '0',
                              parents: 'Atlas, Hesperius',
                              desc:
                                'The Hesperides are Aegle, Arethusa, Erytheia and Hesperia, nymphs who live in a beautiful garden.  The Hesperides are Aegle, Arethusa, Erytheia and Hesperia',
                              i: 'hesperides',
                            },
                            {
                              label: 'The Hyades',
                              rank: '0',
                              parents: 'Atlas, Aethra',
                              desc:
                                'The sisters of the Pleiades.  In some traditions they were regarded as the nurses of either Dionysus or the infant Zeus. As a reward, they were placed in the sky as a constellation',
                              children: [
                                {
                                  label: 'Ambrosia',
                                  rank: '0',
                                  parents: 'Atlas, Aethra',
                                  desc: 'One of the Hyades',
                                },
                                {
                                  label: 'Cleeia',
                                  rank: '0',
                                  parents: 'Atlas, Aethra',
                                  desc: 'One of the Hyades',
                                },
                                {
                                  label: 'Coronis',
                                  alt: 'Koronis',
                                  rank: '0',
                                  parents: 'Atlas, Aethra',
                                  desc: 'One of the starry Hyades.',
                                },
                                {
                                  label: 'Eudora',
                                  rank: '0',
                                  parents: 'Atlas, Aethra',
                                  desc: 'One of the starry Hyades',
                                },
                                {
                                  label: 'Pedile',
                                  rank: '0',
                                  parents: 'Atlas, Aethra',
                                  desc: 'One of the Hyades',
                                },
                                {
                                  label: 'Phaeo',
                                  rank: '0',
                                  parents: 'Atlas, Aethra',
                                  desc: 'One of the Hyades',
                                },
                                {
                                  label: 'Phaesla',
                                  rank: '0',
                                  parents: 'Atlas, Aethra',
                                  desc: 'One of the Hyades',
                                },
                                {
                                  label: 'Phyto',
                                  rank: '0',
                                  parents: 'Atlas, Aethra',
                                  desc: 'One of the Hyades',
                                },
                                {
                                  label: 'Polyxo',
                                  rank: '0',
                                  parents: 'Atlas, Aethra',
                                  desc: 'One of the Hyades',
                                },
                                {
                                  label: 'Theone',
                                  rank: '0',
                                  parents: 'Atlas, Aethra',
                                  desc: 'One of the Hyades',
                                },
                              ],
                            },
                            {
                              label: 'Hyas',
                              rank: '0',
                              parents: 'Atlas, Aethra',
                              desc:
                                'The water-bearing son of the Titan Atlas who was killed by a lion and placed amongst the stars as the constellation Aquarius.',
                            },
                            {
                              label: 'Maera',
                              alt: 'Maira',
                              rank: '0',
                              parents: 'Atlas, Asia',
                              desc:
                                'A star-nymph daughter of the Titan Atlas, and wife of the Arcadian King Tegeates. She was the goddess of the scorching dog-star Sirios.',
                            },
                            {
                              label: 'The Pleiades',
                              rank: '0',
                              parents: 'Atlas, Pleione',
                              desc:
                                'The virgin companions of Artemis. When Orion, a beautiful hunter, pursued them and their mother, they prayed to the gods for rescue. The gods answered they prayer and they were changed into doves, and later into stars. Zeus placed them in the sky where they formed a part of the constellation of Taurus',
                              children: [
                                {
                                  label: 'Alcyone',
                                  alt: 'Alkyone',
                                  rank: '0',
                                  desc:
                                    'One of the Pleiades. She was loved by Poseidon.',
                                },
                                {
                                  label: 'Celaeno',
                                  alt: 'Kelaino',
                                  rank: '0',
                                  desc:
                                    'One of the starry Pleiad nymphs. She was loved by the god Poseidon.',
                                },
                                {
                                  label: 'Maia',
                                  i: 'maia',
                                  rank: '0',
                                  desc:
                                    'A Pleiad star-nymph of Mount Cyllene in Arcadia. She was the mother of the god Hermes by Zeus.',
                                },
                                {
                                  label: 'Merope',
                                  rank: '0',
                                  desc:
                                    'One of the Pleiad star-nymphs, the wife of the impious Corinthian King Sisyphos. Blushing in shame for her husband"s crimes, her star shone only faintly.',
                                },
                                {
                                  label: 'Sterope',
                                  rank: '0',
                                  desc:
                                    'One of the starry Pleiad nymphs. She was loved by the god Ares.',
                                },
                                {
                                  label: 'Taygete',
                                  rank: '0',
                                  desc:
                                    'The starry Pleiad nymph of Mount Taygetus who was loved by Zeus. She was the ancestress of the kings of Sparta.',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          label: 'Epimethus',
                          i: 'epimethus',
                          rank: '0',
                          parents: 'Iapetus, Clymene',
                          desc:
                            'Epimetheus ("afterthought") foolishly ignored his brother Prometheus\' warnings to beware of any gifts from Zeus. He accepted Pandora as his wife, thereby bringing ills and sorrows to the world. Epimetheus was made up by the Greeks as the antipode of his brother Prometheus ("forethought").',
                        },
                        {
                          label: 'Menoetius',
                          alt: 'Menoitios',
                          rank: '0',
                          parents: 'Iapetus, Clymene ',
                          desc:
                            'The Titan god of rash anger. He was blasted into Erebus with a thunderbolt by Zeus.',
                        },
                        {
                          label: 'Prometheus',
                          i: 'prometheus',
                          rank: '0',
                          parents: 'Iapetus, Clymene',
                          desc:
                            'The Titan god of forethought and the creator of mankind. He cheated the gods on several occasions on behalf of man, including the theft of fire. As punishment Zeus chained him to the Caucasus mountains and sent an eagle to prey on his ever-regenerating liver. He was later freed by Heracles.',
                        },
                      ],
                    },
                    {
                      label: 'Klymene',
                      i: 'klymene',
                      alt: 'Clymene',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis of fame was the mother of the Phaethon by Helios the sun. She was probably one of the Nephelai. She may be the same as Klytia',
                      children: [
                        {
                          label: 'Phaeton',
                          rank: '0',
                          parents: 'Helios, Clymene',
                          desc:
                            'The son of the sun-god Helios. He induced his father to allow him to drive the chariot of the sun across the heavens for one day. The horses ran wildly out of their course and came close to the earth, threatening to burn it. Zeus noticed the danger and with a thunderbolt he destroyed Phaeton. ',
                        },
                      ],
                    },
                    {
                      label: 'Klytia',
                      alt: 'Clytia',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'One of the Oceanides who fell in love with the sun-god Helius. When he abandoned her she wasted away and was transformed into the sun-gazing heliotrope flower.  She may have been the same as Klymene 2',
                    },
                    {
                      label: 'Krokale',
                      alt: 'Crocale',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "sea-shore" was a Naias Nymphe companion of the goddess Artemis',
                    },
                    {
                      label: 'Leuke',
                      alt: 'Leuce',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'An Okeanis named "the white" who was loved by Haides god of the underworld. She was transformed into the white poplar tree of the nlessed Elysian Fields',
                    },
                    {
                      label: 'Leukippe',
                      alt: 'Leucippides',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "White-Horse" was probably the Nephele or Aura of fast moving clouds, or the Naias of a frothy white spring or mountain stream. Winds and waters were often compared to horses',
                    },
                    {
                      label: 'Libya (Continent Africa)',
                      alt: 'Libye',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Oceanid nymph who gave her name to the continent of Libya (Africa).  She was a sister of Europe and Asia',
                    },
                    {
                      label: 'Melia',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Oceanid nymph wife of the Argive river-god Inachus.  She was probably the Naias of a sweet-water spring, perhaps the same as Melia 2, who was loved by the god Apollon and was the Naias of the Theban spring Ismene',
                    },
                    {
                      label: 'Meliboea 1',
                      alt: 'Meliboia',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "sweet-cattle" was the wife of the early Arkadian King Pelasgos. She was probably either the Naias nymphe of an Arkadian spring or the Epimelis of cattle-grazing pastures',
                    },
                    {
                      label: 'Meliboea 2',
                      alt: 'Meliboia',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc: 'An Okeanis loved by the Syrian River-God Orontes',
                    },
                    {
                      label: 'Melite',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "honey-sweet" was probably the Nymphe of sweet-water spring',
                    },
                    {
                      label: 'Melobosis',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "food of fruit" or "sheep-feeder" was probably one of the Epimelides, Nymphai of grassy pastures or fruit trees',
                    },
                    {
                      label: 'Menestho',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "swift-force" or "strong and fast" was probably the Naias of a full flowing stream, or the Aura of strongly blowing breezes',
                    },
                    {
                      label: 'Merope',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "with face turned" was the mother of Phaethon by the god Helios. She was probably the same as Klymene 2',
                    },
                    {
                      label: 'Metis (Counsel)',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis goddess of wisdom and good-counsel. She was loved by Zeus, who swallowed her to avoid the prophecy that her son would dethrone him. She was probably one of the Nephelai',
                      children: [
                        {
                          label: 'Athene',
                          i: 'athene',
                          alt: 'Athena',
                          rank: '2',
                          parents: 'Zeus, Metis',
                          desc:
                            'Goddess of war and crafts who sprung fully grown and armed from the head of Zeus. She was one of the twelve great Olympian gods.',
                        },
                      ],
                    },
                    {
                      label: 'Neda',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis goddess of the Arkadian River Neda. She was an Arkadian nurse of the infant god Zeus',
                    },
                    {
                      label: 'Nemesis',
                      i: 'nemesis',
                      rank: '0',
                      parents: 'Nyx alone; or Okeanus and Tethys',
                      desc:
                        'The Okeanis goddess of indignation and retribution for hybristic behaviour and undeserved good fortune. After being seduced by Zeus in the form of a swan, she lay the egg from which Helen was hatched. She a daughter of Nyx, but was also called a daughter of Nyx or Zeus.',
                    },
                    {
                      label: 'Nephele 1',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'A Nymphe "cloud" who was the wife of the mortal King Athamas. She rescued her two children from sacrifice by sending a flying golden-fleeced Ram to their aide (a creature reminiscent of a golden cloud)',
                    },
                    {
                      label: 'Nephele 2',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'A Nymphe formed by Zeus in the shape of Hera out of the clouds. She was raped by the criminal Ixion, and bore him the Kentauroi (Centaurs)',
                      children: [
                        {
                          label: 'Nessos',
                          i: 'nessos',
                          alt: 'Nessus',
                          rank: '0',
                          desc:
                            'A centaur ferryman who tried to rape the wife of Heracles, Deianeira, as he was carrying her across his river. Heracles heard her screams and shot him dead with poisoned arrows. The dying centaur tricked the girl into taking a sample of his poisoned blood to use as an aphrodisiac should her husband ever prove unfaithful.',
                        },
                        {
                          label: 'Eurytion',
                          i: 'eurytion',
                          rank: '0',
                          desc:
                            'A Thessalian centaur who attempted to abduct the bride of the Lapith King Peirithous on her wedding day. Most of the centaurs were slain in the battle which ensued.',
                        },
                        {
                          label: 'Hylonome',
                          rank: '0',
                          desc:
                            'A female centaur. She killed herself when her husband the centaur Cyllarus was slain in the battle with the Lapiths.',
                        },
                        {
                          label: 'Petraios',
                          i: 'petraios',
                          rank: '0',
                        },
                        {
                          label: 'Asbolos',
                          i: 'asbolos',
                          rank: '0',
                        },
                        {
                          label: 'Arktos',
                          rank: '0',
                        },
                        {
                          label: 'Oureios',
                          rank: '0',
                        },
                        {
                          label: 'Mimas',
                          rank: '0',
                          desc:
                            'One of the Gigantes who slain in the giant-war by Hephaestus with barage of red-hot metal.',
                        },
                        {
                          label: 'Peukeus',
                          rank: '0',
                        },
                        {
                          label: 'Perimedes',
                          rank: '0',
                        },
                        {
                          label: 'Dryalos',
                          rank: '0',
                        },
                        {
                          label: 'Rhoikos',
                          rank: '0',
                          parents: 'Ouranos, Gaia',
                          desc: 'One of the Gigantes',
                        },
                        {
                          label: 'Hylaios',
                          i: 'hylaios',
                          rank: '0',
                        },
                      ],
                    },
                    {
                      label: 'Nephele 3',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis Nymphe "cloud" was one of the virgin Nephelai attendants of the goddess Artemis',
                    },
                    {
                      label: 'Nymphai Artemis',
                      i: 'artemis',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The fifty youngest Okeanides were handmaidens of the goddess Artemis',
                    },
                    {
                      label: 'The 5 Nysiades',
                      i: 'nysiades',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'Five Okeanides of Mt Nysa in Phoinikia who nursed the god Dionysos and became the first of his Bakkhantes',
                    },
                    {
                      label: 'Okyrhoe',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "swift-flowing" was either a Naias of fast flowing spring, or Nephele of falling rain',
                    },
                    {
                      label: 'Ourania',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The "heavenly-one" was probably an Okeanis Nephele (of the clouds)',
                    },
                    {
                      label: 'Paregoron',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis goddess of consolation and soothing words. She was an attendant of the goddess Aphrodite',
                    },
                    {
                      label: 'Pasithoe',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'An Okeanis whose name means "all-swift". She was probably either the Naias of a fast-flowing spring or an Aura of the swift breeze',
                    },
                    {
                      label: 'Periboia',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "surrounded by cattle" was the wife of the Titan Lelantos. She was probably the Naias of a pasture-feeding stream',
                    },
                    {
                      label: 'Peitho (Persuasion)',
                      i: 'peitho',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Oceanid goddess of persuasion and seductive words. She was the nurse and close companionof the goddess Aphrodite.',
                    },
                    {
                      label: 'Perseis',
                      alt: 'Perse',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'An Okeanis-eponym of Persia and mother by Helios of the eastern despots Aeetes and Perses, and the witches Pasiphae and Kirke. Her name also means "destroyer" who probably was a goddess of the destructive power of witches',
                      children: [
                        {
                          label: 'Aegea',
                          rank: '0',
                          parents: 'Helios, Perse',
                          desc:
                            'Sister to Circe and Pasiphae, and daughter of the sun. When the Titans attacked the gods of Olympus, Gaia placed Aega in a cave to hide her shining loveliness',
                        },
                        {
                          label: 'Aetes',
                          rank: '0',
                          parents: 'Helios, Perse',
                          desc:
                            'King of Colchis;  Aetes is the father of the sorceress Medea.',
                        },
                        {
                          label: 'Circe',
                          i: 'kirke',
                          alt: 'Kirke',
                          rank: '0',
                          parents: 'Helios, Perse',
                          desc:
                            'An immortal witch who dwelt on the island of Aeaea. She turned travellers into beasts with her potions.',
                        },
                        {
                          label: 'Pasiphae',
                          i: 'pasiphae',
                          rank: '0',
                          parents: 'Helios, Perse',
                          desc:
                            'A goddess-witch of the island of Crete, the wife of King Minos. She was filled with an unnatural desire for the Cretan Bull and after mating it conceived the bull-headed Minotaur.',
                        },
                        {
                          label: 'Perses',
                          shortlabel: 'Perses',
                          parents: 'Helios, Perse',
                          rank: '0',
                          desc:
                            'The Titan god of destruction and laying waste.',
                          children: [
                            {
                              label: 'Hecate',
                              i: 'hekate',
                              alt: 'Hekate',
                              parents: 'Perses, Asteria',
                              rank: '0',
                              desc:
                                'The Titan goddess of witchcraft, ghosts and necromancy. She assisted Demeter in her search for Persephone, and became her minister in Hades.',
                            },
                          ],
                        },
                        {
                          label: 'Phaethusa',
                          alt: 'Paethousa',
                          rank: '0',
                          parents: 'Helios, Perse',
                          desc:
                            'A nymph daughter of the sun-god Helios, and the shepherdess of his flocks on the island of Thrinacie.',
                        },
                      ],
                    },
                    {
                      label: 'Petraie (Stoney-grey-colour)',
                      shortlabel: 'Petraie',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "of the rocks" or "stone-grey" was probably the Naias of a rocky spring, or Nephele of dark grey clouds',
                    },
                    {
                      label: 'Phaino',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "appearing" or "shining" was perhaps the Nephele of the appearance of cloud, or the Naias of a bright spring',
                    },
                    {
                      label: 'Phiale',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "water-pitcher" was one of the companions of the goddess Artemis. She was either a spring Naias or rain-pouring Nephele',
                    },
                    {
                      label: 'Philyre',
                      alt: 'Philyra',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'An Oceanid nymph, daughter of Oceanus and Tethys, loved by the Titan Cronus. When Rhea discovered their rendezvous, he transformed himself into a stallion. From their union, the centaur Chiron was born. When Philyra saw her son, she asked Zeus to transform her into another form, and became a linden tree. Goddess of beauty, perfume, healing, and writing, and the inventor of paper.',
                      children: [
                        {
                          label: 'Chiron',
                          i: 'chiron',
                          alt: 'Kheiron',
                          rank: '0',
                          parents: 'Cronus, Philyra',
                          desc:
                            'An immortal Centaur son of Cronus. He was famed for his wisdom and dwelt in a cave on Mt Pelion where he fostered and trained many of the great heroes.',
                          children: [
                            {
                              label: 'Ocyrhoe',
                              alt: 'Okyrhoe',
                              rank: '0',
                              parents: 'Chiron, Chariclo',
                              desc:
                                'A Naiad nymph of the island of Samos who was pursued by the god Apollon. When she attempted to flee the island by ship he turned the vessel to stone and transformed the pilot into a porpoise.',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      label: 'Pleione (Many)',
                      shortlabel: 'Pleione',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Oceanid nymph wife of the Titan Atlas. She and her seven daughters, the Pleiades, were pursued by the lusty giant Orion for seven years before the gods placed them amongst the stars.',
                      children: [
                        {
                          label: 'The Pleiades',
                          rank: '0',
                          parents: 'Atlas, Pleione',
                          desc:
                            'The virgin companions of Artemis. When Orion, a beautiful hunter, pursued them and their mother, they prayed to the gods for rescue. The gods answered they prayer and they were changed into doves, and later into stars. Zeus placed them in the sky where they formed a part of the constellation of Taurus',
                          children: [
                            {
                              label: 'Alcyone',
                              alt: 'Alkyone',
                              rank: '0',
                              desc:
                                'One of the Pleiades. She was loved by Poseidon.',
                            },
                            {
                              label: 'Celaeno',
                              alt: 'Kelaino',
                              rank: '0',
                              desc:
                                'One of the starry Pleiad nymphs. She was loved by the god Poseidon.',
                            },
                            {
                              label: 'Maia',
                              i: 'maia',
                              rank: '0',
                              desc:
                                'A Pleiad star-nymph of Mount Cyllene in Arcadia. She was the mother of the god Hermes by Zeus.',
                            },
                            {
                              label: 'Merope',
                              rank: '0',
                              desc:
                                'One of the Pleiad star-nymphs, the wife of the impious Corinthian King Sisyphos. Blushing in shame for her husband"s crimes, her star shone only faintly.',
                            },
                            {
                              label: 'Sterope',
                              rank: '0',
                              desc:
                                'One of the starry Pleiad nymphs. She was loved by the god Ares.',
                            },
                            {
                              label: 'Taygete',
                              rank: '0',
                              desc:
                                'The starry Pleiad nymph of Mount Taygetus who was loved by Zeus. She was the ancestress of the kings of Sparta.',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      label: 'Plexaure',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis of the "weaving breeze" was likely one of the Aurai',
                    },
                    {
                      label: 'Plouto (Wealth)',
                      alt: 'Pluto',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis goddess of wealth was probably a Nephele of fertile rains, prospering the agricultural crop',
                    },
                    {
                      label: 'Polydora',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "many gifts" might have been the Nephele of generous downfalls',
                    },
                    {
                      label: 'Pronoia',
                      alt: 'Pronoea',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Nymphe named "foresight" was the wife of the Titan Prometheus. She was a goddess of the shrine of Delphoi, and probably the same as the Okeanis Hesione',
                    },
                    {
                      label: 'Prymno',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "root" or "undermost" was probably the Naias Nymphe of groundwater, or the waters of a deep well',
                    },
                    {
                      label: 'Psekas',
                      alt: 'Psecas',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "rain-shower" was a Nephele companion of the goddess Artemis',
                    },
                    {
                      label: 'Rhanis',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'An Okeanis named "rain-drop". She was one of the Nephelai attendants of the goddess Artemis',
                    },
                    {
                      label: 'Rhodeia (Rose-colour)',
                      shortlabel: 'Rhodeia',
                      alt: 'Rhode',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis named "of the roses" or "rose-coloured" was either an Anthousa flower-nymphe, Naias of a rose-draped spring, or Nephele of the rose-tinged clouds of dawn',
                      children: [
                        {
                          label: 'The 7 Heliadae',
                          rank: '0',
                          parents: 'Helios, Clymene, Rhode',
                          desc:
                            'The Heliadae were the seven sons of Helios, the sun god and the nymph Rhodus, daughter of Poseidon. The names of the seven sons were Ochimus, Cercaphus, Macareus ( or Macar), Actis, Tenages, Triopas, and Candalus. ',
                        },
                      ],
                    },
                    {
                      label: 'Rhodope',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "rosey-eyed" was probably either an Anthousa flower-nymphe of Nephele of the rose-coloured clouds of dawn. A Naiad nymph daughter of the Thracian river-god Strymon. When she and her husband Haemus impersonated Zeus and Hera, the angry gods transformed them into mountains.',
                    },
                    {
                      label: 'Styx (hate)',
                      alt: 'Pallas',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The goddess of the underworld river Styx, eldest of the Oceanids. She brought her children to side with Zeus in the Titan-War, and as reward he made her waters the inviolate oath of the gods.',
                      children: [
                        {
                          label: 'Bia',
                          rank: '0',
                          parents: 'Pallas, Styx',
                          desc:
                            'The goddess of force. She sided with Zeus in the Titan-War and became one of his chief attendants.',
                        },
                        {
                          label: 'Nike',
                          i: 'nike',
                          parents: 'Pallas, Styx',
                          rank: '0',
                          desc:
                            'The goddess of victory who sided with Zeus in the Titan-War and became his constant companion.',
                        },
                        {
                          label: 'Cratos',
                          rank: '0',
                          parents: 'Pallas, Styx',
                          desc: 'The personification of strength and power.',
                        },
                        {
                          label: 'Zelus',
                          alt: 'Zelos',
                          parents: 'Pallas, Styx',
                          rank: '0',
                          desc:
                            'The personification of rivalry. He and his three siblings were daemon attendants of the god Zeus.',
                        },
                      ],
                    },
                    {
                      label: 'Telesto (Success)',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis goddess of success and accomplishment. She was probably one of the Nephelai, an ethereal goddess',
                    },
                    {
                      label: 'Theiosa',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc: 'An Okeanis nurse of the infant Zeus in Arkadia',
                    },
                    {
                      label: 'Thoe',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "swift" might have been a Naias, Nephele or Aura Nymphe',
                    },
                    {
                      label: 'Tykhe (Fortune)',
                      i: 'tykhe',
                      alt: 'Tyche',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis goddess of fortune or chance was probably one of the heavenly Nephelai',
                    },
                    {
                      label: 'Xanthe (Yellow-colour)',
                      rank: '0',
                      parents: 'Okeanus, Thetys',
                      desc:
                        'The Okeanis "yellow" or "yellow-brown" was probably either a Naias of a muddy flowing stream, or the Nephele of the yellowed clouds of dawn and dusk',
                    },
                    {
                      label: 'Zeuxos',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'An Okeanis named "the yoked" was probably a goddess of marriage, brides being yoked in marriage. She may have been a Naias or Nephele Nymphe, in the sense of a yoked or tamed horse',
                    },
                  ],
                },
                {
                  label: 'Potamoi',
                  rank: '0',
                  parents: 'Okeanus, Tethys',
                  desc:
                    'The River god sons of Oceanus. Each river had its own god. They were manlike from the chest upwards, but below were bodied with the serpentine tail of a fish.',
                  children: [
                    {
                      label: 'Aigaios (River of Skheria)',
                      alt: 'Aegaeus',
                      rank: '0',
                      desc:
                        'A river of Scheria (island of the Phaeacians) and its god.',
                    },
                    {
                      label: 'Aisepos (River of Troad)',
                      rank: '0',
                    },
                    {
                      label: 'Akheloios (River of Aitolia)',
                      i: 'akheloios',
                      alt: 'Achelous',
                      rank: '0',
                      desc:
                        'A river of Aetolia and its god. He wrestled Heracles for the hand of Deianeira but lost the contest and with it his horn.',
                    },
                    {
                      label: 'Alpheios (River of Arkadia and Elis)',
                      alt: 'Alpheius',
                      rank: '0',
                      desc:
                        'A river of Elis and its god. He fell in love with the nymph Arethusa and pursued her all the way to the island Ortygia. Artemis then transformed her into a spring to escape him but Alpheius guided his stream under the sea to Sicily so he could forever mingle his waters with hers.',
                    },
                    {
                      label: 'Amnisos (River of Krete)',
                      alt: 'Amnisus',
                      rank: '0',
                      desc: 'A river of Crete and its god.',
                    },
                    {
                      label: 'Anigros (River of Elis)',
                      alt: 'Anigrus',
                      rank: '0',
                      desc: 'A river of Elis and its god.',
                      children: [
                        {
                          label: 'The Anigrides',
                          rank: '0',
                        },
                      ],
                    },
                    {
                      label: 'Askanios (River of Mysia)',
                      alt: 'Ascanius',
                      rank: '0',
                      desc: 'A River of Mysia and its god.',
                    },
                    {
                      label: 'Asopos (River of Argos and Boiotia) (w/ Metope)',
                      shortlabel: 'Asopos',
                      alt: 'Asopus',
                      rank: '0',
                      desc:
                        'A river of Boeotia and Argos and its god. He had twenty beautiful daughters, most of whom were carried off by the gods. Asopus pursued Zeus when he abducted Aegina but was driven back by the god"s thunderbolts.',
                      children: [
                        {
                          label: 'Aigina',
                          i: 'aigina',
                          alt: 'Aegina',
                          rank: '0',
                          desc:
                            'A naiad daughter of the river Asopus. She was loved by Zeus who carried her off to the island of Aegina. When her father pursued them Zeus struck him with a thunderbolt.',
                        },
                        {
                          label: 'Salamis',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the river Asopus who was abducted to the island of the same name by the god Poseidon.',
                        },
                        {
                          label: 'Nemea',
                          rank: '0',
                          desc:
                            'The Naiad nymph of the town of Nemea. She was a daughter of either Zeus and Selene or the river Asopus.',
                        },
                        {
                          label: 'Harpina',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the river Asopus who was abducted to Elis by Ares.',
                        },
                        {
                          label: 'Thebe',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the river Asopus abducted to the town of Thebes by Zeus..',
                        },
                        {
                          label: 'Antiope',
                          rank: '0',
                        },
                        {
                          label: 'Plataia',
                          alt: 'Plataea',
                          rank: '0',
                          desc:
                            'The Naiad nymph of the Boeotian town of Plataea loved by Zeus. The god pretended to be taking her for his bride when Hera abandoned their marriage.',
                        },
                        {
                          label: 'Thespia',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the river Asopus. She was carried off to Boeotia by the god Apollo.',
                        },
                        {
                          label: 'Tanagra',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the river Asopus. The gods Ares and Hermes competed a boxing match to win her love.',
                        },
                        {
                          label: 'Oeroe',
                          rank: '0',
                        },
                        {
                          label: 'Euboia',
                          alt: 'Euboea',
                          rank: '0',
                          desc:
                            'A Naiad daughter of the river Asopus carried off by Poseidon to the island of Euboea.',
                        },
                        {
                          label: 'Korkyra',
                          alt: 'Corcyra',
                          rank: '0',
                          desc:
                            'A Naiad daughter of the river Asopus. She was loved by Poseidon who carried her off to the island of Corcyra.',
                        },
                        {
                          label: 'Sinope',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the river Asopus who was abducted tot he town of Sinope on the Black Sea by Apollo. She made him swear to respect her virginity.',
                        },
                        {
                          label: 'Peirene',
                          rank: '0',
                          desc:
                            'The weeping Naiad nymph of the fountain of the town of Corinth. She was loved by Poseidon.',
                        },
                        {
                          label: 'Kleone',
                          alt: 'Cleone',
                          rank: '0',
                          desc:
                            'The Naiad nymph of the town of Cleonae in Argos.',
                        },
                        {
                          label: 'Ismene',
                          i: 'ismene',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the River Asopus, and the wife of King Argus.',
                        },
                        {
                          label: 'Asopis',
                          rank: '0',
                          desc: 'A Naiad daughter of the river Asopus.',
                        },
                        {
                          label: 'Ornia',
                          rank: '0',
                        },
                        {
                          label: 'Khalkis',
                          alt: 'Chalcis',
                          rank: '0',
                          desc:
                            'A Naiad daughter of Asopus. The town of Chalcis in Euboea was named after her.',
                        },
                      ],
                    },
                    {
                      label: 'Asterion (River of Argos)',
                      rank: '0',
                      desc: 'A river of Mycenae and its god.',
                      children: [
                        {
                          label: 'Akraia',
                          alt: 'Acraea',
                          rank: '0',
                          desc:
                            'A naiad daughter of the river Asterion. With her sisters Euboea and Prosymna she nursed Hera as a child.',
                        },
                        {
                          label: 'Prosymna',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the river Asterion. She and her sisters Euboea and Acraea were nurses of the goddess Hera.',
                        },
                        {
                          label: 'Euboia',
                          alt: 'Euboea',
                          rank: '0',
                          desc:
                            'A Naiad daughter of the river Asopus carried off by Poseidon to the island of Euboea.',
                        },
                      ],
                    },
                    {
                      label: 'Axios (River of Paionia)',
                      alt: 'Axius',
                      rank: '0',
                      desc: 'A river of Paeonia and its god.',
                    },
                    {
                      label: 'Caanthus',
                      alt: 'Kaanthos',
                      rank: '0',
                      parents: 'Oceanus, Tethys',
                      desc:
                        'A River-god son of the Titan Oceanus who was slain by Apollo in their rivalry for the love of the Nymph Melia.',
                    },
                    {
                      label: 'Enipeus (River of Thessalia)',
                      rank: '0',
                    },
                    {
                      label: 'Erasinos (River of Argos)',
                      alt: 'Erasinus',
                      rank: '0',
                      desc: 'A river of Argos and its god.',
                      children: [
                        {
                          label: 'Ankhinoe',
                          alt: 'Anchinoe',
                          rank: '0',
                          desc: 'An Egyptian Naiad.',
                        },
                        {
                          label: 'Byze',
                          rank: '0',
                          desc:
                            'A Naiad daughter of the river Erasinus. With her sisters she was an attendant of Britomartis.',
                        },
                        {
                          label: 'Melite',
                          rank: '0',
                          desc:
                            'A Naiad nymph of the island of the Phaeacians. She was seduced by Heracles.',
                        },
                        {
                          label: 'Moira',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the river Erasinus who, with her sisters, was an attendant of the goddess Britomartis.',
                        },
                      ],
                    },
                    {
                      label: 'Eridanos (River of N. Europe)',
                      alt: 'Eridanus',
                      rank: '0',
                      desc: 'A river of northern Europe or Italy and its god.',
                    },
                    {
                      label: 'Erymanthos (River of Arkadia)',
                      rank: '0',
                    },
                    {
                      label: 'Euenos (River of Aitolia)',
                      alt: 'Evenus',
                      rank: '0',
                      desc: 'A river of Aetolia and its god.',
                    },
                    {
                      label: 'Eurotas (River of Lakonia)',
                      rank: '0',
                      desc:
                        'A river in Laconia and its god. He was the first King of Sparta.',
                    },
                    {
                      label: 'Grenikos (River of Troad)',
                      alt: 'Grenicus',
                      rank: '0',
                      desc: 'A river of Troy and its god.',
                      children: [
                        {
                          label: 'Alexirhoe',
                          alt: 'Alexiroe',
                          rank: '0',
                          desc:
                            'A naiad daughter of the river Grenicus of Troy.',
                        },
                        {
                          label: 'Pegasis',
                          rank: '0',
                          desc: 'A Trojan Naiad nymph.',
                        },
                      ],
                    },
                    {
                      label: 'Gyge (Lake of Lydia)',
                      alt: 'Gygaie',
                      rank: '0',
                      desc: 'A lake of Lydia and its god.',
                    },
                    {
                      label: 'Haliakmon (River of Makedonia)',
                      rank: '0',
                    },
                    {
                      label: 'Hebros (River of Thrake)',
                      alt: 'Hebrus',
                      rank: '0',
                      desc: 'A river of Thrace and its god.',
                    },
                    {
                      label: 'Heptaporos (River of Troad)',
                      rank: '0',
                    },
                    {
                      label: 'Hermos (River of Lydia)',
                      alt: 'Hermus',
                      rank: '0',
                      desc: 'A river of Lydia and its god.',
                    },
                    {
                      label: 'Hydaspes (River of India)',
                      rank: '0',
                      desc:
                        'An Indian River-God who fought and was defeated by Dionysus in the Indian Wars.',
                    },
                    {
                      label: 'Imbrasos (River of Samos)',
                      alt: 'Imbrasus',
                      rank: '0',
                      desc: 'A river of the island of Samos and its god.',
                    },
                    {
                      label: 'Ilissos (River of Attika)',
                      alt: 'Ilissus',
                      rank: '0',
                      desc: 'A river of Athens and its god.',
                      children: [
                        {
                          label: 'Pharmakeia',
                          alt: 'Pharmacea',
                          rank: '0',
                          desc:
                            'The Naiad nymph of a poisonous spring near the town of Athens.',
                        },
                      ],
                    },
                    {
                      label: 'Inakhos (River of Argos)',
                      alt: 'Inachus',
                      rank: '0',
                      desc:
                        'A river of Argos and its god. When Poseidon and Hera were contesting for dominion of Argos, he ruled in favour of Hera. Poseidon in anger caused his stream to run dry.',
                      children: [
                        {
                          label: 'Mykene',
                          alt: 'Mycene',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the river Inachus after whom the city of Mycenae was named.',
                        },
                        {
                          label: 'Kallithyia',
                          alt: 'Callithyia',
                          rank: '0',
                          desc:
                            'A Naiad daughter of the river Inachus who founded the ancient cult of Hera in Argos.',
                        },
                        {
                          label: 'Philodike',
                          alt: 'Philodice',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the river Inachus, the wife of a Messenian king.',
                        },
                        {
                          label: 'Io',
                          i: 'io',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the river Inachus. She was loved by Zeus who transformed her into a cow to hide her from the jealous gaze of Hera. The goddess was not fooled and sent a maddening gladfly to torment her. It drove her to wander all the way to Egypt, where she gave birth to Epaphus, ancestor of the Pharaohs.',
                        },
                        {
                          label: 'Amymone',
                          rank: '0',
                          desc:
                            'The Naiad of an Argive spring who was loved by the god Poseidon.',
                        },
                        {
                          label: 'Messeis',
                          rank: '0',
                          desc:
                            'The Naiad nymph of an Argive spring, a daughter of the River Inachus.',
                        },
                        {
                          label: 'Hypereia',
                          alt: 'Hyperia',
                          rank: '0',
                          desc:
                            'The Naiad nymph daughter of the River-god Inachus.',
                        },
                      ],
                    },
                    {
                      label: 'Inopos (River of Delos)',
                      rank: '0',
                    },
                    {
                      label: 'Ismenos (River of Boiotia)',
                      alt: 'Ismenus',
                      rank: '0',
                      desc: 'A River of Boeotia and its god.',
                      children: [
                        {
                          label: 'Dirke',
                          alt: 'Dirce',
                          rank: '0',
                          desc:
                            'The Naiad nymph of the sacred fountain of Dionysus on Mount Cithaeron.',
                        },
                        {
                          label: 'Strophia',
                          rank: '0',
                          desc:
                            'The Naiad nymph of a spring on Mount Cithaeron.',
                        },
                        {
                          label: 'Ismenis',
                          rank: '0',
                          desc:
                            'A Naiad daughter of the River Ismenos loved by the god Faunus.',
                        },
                      ],
                    },
                    {
                      label: 'Istros (River of Skythia)',
                      alt: 'Istrus',
                      rank: '0',
                      desc: 'A god of the river Danube in Scythia.',
                    },
                    {
                      label: 'Kaikos (River of Teuthrania)',
                      alt: 'Caecus',
                      rank: '0',
                      desc: 'A river of Teuthrania and its god.',
                      children: [
                        {
                          label: 'Okyrrhoe',
                          rank: '0',
                        },
                      ],
                    },
                    {
                      label: 'Kaystros (River of Lydia)',
                      alt: 'Caystera',
                      rank: '0',
                      desc: 'river of Lydia and its god.',
                    },
                    {
                      label: 'Kebren (River of Troad)',
                      alt: 'Cebren',
                      rank: '0',
                      desc: 'A river of Troy and its god.',
                      children: [
                        {
                          label: 'Oinone',
                          alt: 'Oenone',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the river Cebren of Troy. She was the first wife of Prince Paris who refused to heal him when he later returned to her seeking a cure for his mortal arrow-wound. She refused, and when he died she hung herself in remorse.',
                        },
                        {
                          label: 'Hesperia',
                          rank: '0',
                          desc: 'A naiad daughter of the river Cebren.',
                        },
                      ],
                    },
                    {
                      label: 'Kephissos (River of Phokis)',
                      rank: '0',
                      children: [
                        {
                          label: 'Lilaia',
                          alt: 'Lilaea',
                          rank: '0',
                          desc: 'A Naiad nymph daughter of the river Cephisus.',
                        },
                        {
                          label: 'Daulis',
                          rank: '0',
                          desc:
                            'A Naiad nymph after whom the Boeotian town of Daulis was named.',
                        },
                        {
                          label: 'Melaina',
                          rank: '0',
                        },
                        {
                          label: 'Thyia',
                          rank: '0',
                          desc:
                            'A Naiad nymph of Mount Parnassus loved by the god Apollo. She was the first to celebrate the orgies of Dionysus at Delphi.',
                        },
                        {
                          label: 'The Kephisides',
                          rank: '0',
                        },
                      ],
                    },
                    {
                      label: 'Kephissos (River of Attika)',
                      rank: '0',
                      children: [
                        {
                          label: 'Diogenia',
                          alt: 'Diogeneia',
                          rank: '0',
                          desc:
                            'A naiad daughter of the river Cephisus. She was the wife of an Athenian nobleman.',
                        },
                      ],
                    },
                    {
                      label: 'Khremetes (River of Libya)',
                      alt: 'Chremetes',
                      rank: '0',
                      desc: 'A river of Libya and its god.',
                      children: [
                        {
                          label: 'Ankhiroe',
                          alt: 'Anchiroe',
                          rank: '0',
                          desc: 'An Arcadian Naiad nymph.',
                        },
                      ],
                    },
                    {
                      label: 'Kladeos (River of Elis)',
                      rank: '0',
                    },
                    {
                      label: 'Kokytos (River of Hades)',
                      alt: 'Cocytus',
                      rank: '0',
                      desc: 'The underworld river of wailing and its god.',
                      children: [
                        {
                          label: 'The Kokythiai',
                          rank: '0',
                        },
                        {
                          label: 'Mintha',
                          alt: 'Minthe',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the underworld river-god Cocytus. She was transformed into a mint plant by Persephone when her affair with the god Hades was discovered.',
                        },
                      ],
                    },
                    {
                      label: 'Kydos (River of Kilikia)',
                      rank: '0',
                    },
                    {
                      label: 'Kytheros (River of Elis)',
                      alt: 'Cytherus',
                      rank: '0',
                      desc: 'A river of Elis and its god.',
                      children: [
                        {
                          label: 'The 4 Ionides',
                          rank: '0',
                        },
                      ],
                    },
                    {
                      label: 'Ladon (River of Arkadia)',
                      rank: '0',
                      desc:
                        'A hundred-headed dragon which guarded the golden apples of the Hesperides. It was slain by Heracles.',
                      children: [
                        {
                          label: 'Metope',
                          rank: '0',
                          desc:
                            'The Naiad nymph wife of the Argive river-god Asopus.',
                        },
                        {
                          label: 'Thelpousa',
                          alt: 'Thelpusa',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the Arcadian river Ladon.',
                        },
                        {
                          label: 'Themis',
                          i: 'themis',
                          rank: '0',
                          parents: 'Ouranos, Gaia',
                          desc:
                            'The Titan goddess of divine law, natural order and the oracles of the earth. She was the mother of the goddess Fates and Seasons by Zeus.',
                          children: [
                            {
                              label: 'Thriae',
                              rank: '0',
                              parents: 'Zeus, Themis',
                              desc:
                                'Lesser goddesses of nature who can foresee the future or foretell the unknown by inspiration, magic, signs, or omens.  The word Thriae means "pebbles," because the future was foretold by tossing pebbles',
                            },
                            {
                              label: 'The Horai',
                              i: 'horai',
                              parents: 'Zeus, Themis',
                              desc:
                                'The Horae (the Hours) are the goddesses of the seasons (the Greek had only three seasons; spring, summer and winter). They are called Thallo, Auxo and Carpo, names which denote budding, growth and ripening.  The twelve Horai, who were daughters of Helios, were not always clearly distinguishable from the three Horai of the seasons, who were also described as overseeing the paths of the sun.',
                              children: [
                                {
                                  label: 'Dike',
                                  i: 'dike',
                                  alt: 'Dice',
                                  rank: '0',
                                  parents: 'Zeus, Themis',
                                  desc:
                                    'The goddess of justice. She was one of the three Horae (Seasons)',
                                },
                                {
                                  label: 'Eirene',
                                  rank: '0',
                                  parents: 'Zeus, Themis',
                                  desc:
                                    'One of the three Horae, the goddess of peace and spring',
                                },
                                {
                                  label: 'Eunomia',
                                  rank: '0',
                                  parents: 'Zeus, Themis',
                                  desc:
                                    'The goddess of good order and spring pastures. She was one of the three Horae (Seasons) and an attendant of the goddess Aphrodite',
                                },
                              ],
                            },
                            {
                              label: 'Moirae (Fates)',
                              i: 'moirae',
                              alt: 'Moirai',
                              rank: '0',
                              parents: 'Zeus, Themis',
                              desc: 'The female deities who supervised fate',
                              children: [
                                {
                                  label: 'Atropos',
                                  alt: 'Atropus',
                                  rank: '0',
                                  parents: 'Zeus, Themis',
                                  desc:
                                    'Atropos was one of the three Moirae, the Fates, who cut the thread or web of life',
                                },
                                {
                                  label: 'Klotho',
                                  alt: 'Clotho',
                                  rank: '0',
                                  parents: 'Zeus, Themis',
                                  desc:
                                    'The youngest of the three Fates, who spins the thread of human life',
                                },
                                {
                                  label: 'Lakhesis',
                                  alt: 'Lachesis',
                                  rank: '0',
                                  parents: 'Zeus, Themis',
                                  desc:
                                    'One of the three Fates (Moirae), the :Disposer"; he measures the length of the thread of human life spun by Klotho and determines its destiny',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          label: 'Syrinx',
                          rank: '0',
                          desc:
                            'A Naiad nymph chased by the god Pan. She fled his embrace and was transformed by her sisters into river reeds. The god crafted his famous pan-pipes from her plant.',
                        },
                      ],
                    },
                    {
                      label: 'Lamos (River of Phoinikia)',
                      rank: '0',
                      desc:
                        'A river of Cilicia or Mount Helicon in Boeotia and its god. He and his sons and daughters were nurses of the god Dionysus.',
                    },
                    {
                      label: 'Lethe (River of Hades)',
                      rank: '0',
                      desc: 'The female personification of forgetfulness.',
                    },
                    {
                      label: 'Maiandros (River of Karia)',
                      alt: 'Maeander',
                      rank: '0',
                      desc: 'A river of Caria and its god.',
                    },
                    {
                      label: 'Meles (River of Lydia)',
                      rank: '0',
                    },
                    {
                      label: 'Neilos (River of Aigyptos) (w/ Kallirrhoe)',
                      alt: 'Nile',
                      rank: '0',
                      desc: 'The river of Egypt and its god.',
                      children: [
                        {
                          label: 'Memphis',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the River Nile. She was the wife of the very first Egyptian king Epaphus, who named his capital after her.',
                        },
                        {
                          label: 'Ankhinoe',
                          alt: 'Anchinoe',
                          rank: '0',
                          desc: 'An Egyptian Naiad.',
                        },
                        {
                          label: 'Kaliadne',
                          alt: 'Caliadne',
                          rank: '0',
                          desc: 'An Egyptian Naiad.',
                        },
                        {
                          label: 'Polyxo',
                          rank: '0',
                          desc: 'An Egyptian naiad.',
                        },
                        {
                          label: 'Anippe',
                          rank: '0',
                          desc:
                            'A Naiad daughter of the River Nile loved by Poseidon.',
                        },
                        {
                          label: 'Khione',
                          alt: 'Chione',
                          rank: '0',
                          desc:
                            'The goddess or nymph of snow. She was a daughter of the winter-god Boreas loved by the god Poseidon.',
                        },
                      ],
                    },
                    {
                      label: 'Nestos (River of Thrake)',
                      rank: '0',
                    },
                    {
                      label: 'Paktolos (River of Lydia)',
                      rank: '0',
                    },
                    {
                      label: 'Parthenios (River of Paphlagonia)',
                      rank: '0',
                    },
                    {
                      label: 'Peneios (River of Thessalia) (w/ Kreusa)',
                      alt: 'Peneus',
                      rank: '0',
                      desc: 'A river of Thessaly and its god.',
                      children: [
                        {
                          label: 'The Thessalides',
                          rank: '0',
                        },
                        {
                          label: 'Daphne',
                          i: 'daphne',
                          rank: '0',
                          desc:
                            'A naiad daughter of the river Peneius. She was loved by the god Apollo who pursued her through the woods. As he was about to capture her she prayed to Gaea and was transformed into a laurel tree.',
                        },
                        {
                          label: 'Stilbe',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the Thessalian river Peneius loved by the god Apollo.',
                        },
                        {
                          label: 'Menippe',
                          rank: '0',
                          desc: 'A Naiad nymph daughter of the river Peneius.',
                        },
                        {
                          label: 'Hypseus',
                          rank: '0',
                          children: [
                            {
                              label: 'Kyrene',
                              alt: 'Cyrene',
                              rank: '0',
                              desc:
                                'A Naiad nymph huntress of Thessaly who was loved by the god Apollo. She bore him the rustic god Aristaeus.',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      label: 'Phasis (River of Kholkis)',
                      rank: '0',
                      desc: 'A river of Colchis and its god.',
                    },
                    {
                      label: 'Pitane',
                      rank: '0',
                      desc:
                        'A Naiad nymph daughter of the Spartan river Eurotas. She was loved by Poseidon.',
                    },
                    {
                      label: 'Pleistos (River of Phokis)',
                      alt: 'Pleistus',
                      rank: '0',
                      desc: 'A river of Phocis and its god.',
                      children: [
                        {
                          label: 'The Korykiai',
                          rank: '0',
                        },
                        {
                          label: 'Korykia',
                          alt: 'Corycia',
                          rank: '0',
                          desc:
                            'One of the Corycian nymphs of Delphi loved by the god Apollo.',
                        },
                      ],
                    },
                    {
                      label: 'Pyriphlegethon (River of Hades)',
                      rank: '0',
                      desc: 'The underworld river of fire and its god.',
                    },
                    {
                      label: 'Rhesos (River of Troad)',
                      rank: '0',
                    },
                    {
                      label: 'Rhodios (River of Troad)',
                      rank: '0',
                    },
                    {
                      label: 'Saggarios (River of Phrygia) (w/ Kybele )',
                      alt: 'Sangarius',
                      rank: '0',
                      desc: 'A river of Phrygia and its god.',
                    },
                    {
                      label: 'Simoeis (River of Troad)',
                      rank: '0',
                      desc: 'A river of Troy and its god.',
                      children: [
                        {
                          label: 'The Troiades',
                          rank: '0',
                        },
                        {
                          label: 'Astyokhe',
                          alt: 'Astyoche',
                          rank: '0',
                          desc:
                            'A Naiad daughter of the Trojan river Simoeis. She married a Trojan king.',
                        },
                        {
                          label: 'Hieromneme',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the river Simoeis, and wife of the Dardanian prince Assaracus.',
                        },
                      ],
                    },
                    {
                      label: 'Skamandros (River of Troad)',
                      alt: 'Scamander',
                      rank: '0',
                      desc:
                        'A river of Troy and its god. When he attempted to drown the hero Achilles in the Trojan War, Hephaestus scorched his streams with fire.',
                      children: [
                        {
                          label: 'The Troiades',
                          rank: '0',
                        },
                        {
                          label: 'Kallirhoe',
                          i: 'kallirhoe',
                          alt: 'Callirhoe',
                          rank: '0',
                          desc:
                            'An Oceanid wife of the giant Chrysaor. She begged her son Geryon not to battle Heracles.',
                        },
                        {
                          label: 'Strymo',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the Trojan river Scamander.',
                        },
                        {
                          label: 'Glaukia',
                          alt: 'Glaucia',
                          rank: '0',
                          desc:
                            'A Naiad daughter of the river Scamander. She was loved by a companion of Heracles.',
                        },
                      ],
                    },
                    {
                      label: 'Sparte',
                      alt: 'Sparta',
                      rank: '0',
                      desc:
                        'The Naiad nymph wife of Lacedaemon, the first King of Sparta.',
                    },
                    {
                      label: 'Sperkheios (River of Malis)',
                      alt: 'Spercheus',
                      rank: '0',
                      desc: 'A river of Malis and its god.',
                      children: [
                        {
                          label: 'The Sperkheides',
                          rank: '0',
                        },
                        {
                          label: 'Diopatre',
                          alt: 'Diopatra',
                          rank: '0',
                          desc:
                            'A Malian Naiad nymph loved by Poseidon. The god turned her sisters into poplars while he seduced her.',
                        },
                      ],
                    },
                    {
                      label: 'Strymon (River of Thrake) (w/ Neaera )',
                      rank: '0',
                      desc: 'A river of Thrace and its god.',
                      children: [
                        {
                          label: 'Euadne',
                          alt: 'Evadne',
                          rank: '0',
                          desc:
                            'A naiad daughter of the river Strymon married to Argus king of Argos.',
                        },
                        {
                          label: 'Rhodope',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "rosey-eyed" was probably either an Anthousa flower-nymphe of Nephele of the rose-coloured clouds of dawn. A Naiad nymph daughter of the Thracian river-god Strymon. When she and her husband Haemus impersonated Zeus and Hera, the angry gods transformed them into mountains.',
                        },
                        {
                          label: 'Tereine',
                          rank: '0',
                          desc: 'A Thracian Naiad nymph loved by the god Ares.',
                        },
                      ],
                    },
                    {
                      label: 'Symaithos (River of Sikelia)',
                      alt: 'Symaethus',
                      rank: '0',
                      desc: 'A Sicilian river and its god.',
                    },
                    {
                      label: 'Termessos (River of Boiotia)',
                      rank: '0',
                      children: [
                        {
                          label: 'Aganippe',
                          rank: '0',
                          desc:
                            'A naiad daughter of the river Termessus. She was the nymph of a sacred spring of the Muses whose waters had the power of inspiration.',
                        },
                      ],
                    },
                    {
                      label: 'Tiasa',
                      rank: '0',
                      desc: 'The Naiad nymph of a Spartan stream.',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'The Titanides',
          rank: '0',
          parents: 'Ouranos, Gaia',
          desc:
            'The Titanides were the six earth-goddesses, the female counterparts of the Titanes.  The Titanides represented different aspects of their mother Gaia the Earth.',
          children: [
            {
              label: 'Mnemosyne',
              i: 'mnemosyne',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'The Titan goddess of memory, words and language. She bore Zeus the nine goddess Muses after spending a night lengthened ninefold in the arms of the god.',
              children: [
                {
                  label: 'The Muses',
                  i: 'muses',
                  alt: 'Terpsikhore',
                  rank: '0',
                  parents: 'Zeus, Mnemosyne',
                  desc: 'The Muse of choral dance and song',
                  children: [
                    {
                      label: 'Calliope',
                      i: 'kalliope',
                      alt: 'Kalliope',
                      rank: '0',
                      parents: 'Zeus, Mnemosyne',
                      desc:
                        'The eldest of the Muses. She was muse of epic poetry',
                    },
                    {
                      label: 'Clio',
                      alt: 'Kleio',
                      rank: '0',
                      parents: 'Zeus, Mnemosyne',
                      desc: 'The muse of history',
                    },
                    {
                      label: 'Erato',
                      rank: '0',
                      parents: 'Zeus, Mnemosyne',
                      desc: 'The Muse of lyric love poetry.',
                    },
                    {
                      label: 'Euterpe',
                      rank: '0',
                      parents: 'Zeus, Mnemosyne',
                      desc: 'The Muse of lyric poetry',
                    },
                    {
                      label: 'Melpomene',
                      rank: '0',
                      parents: 'Zeus, Mnemosyne',
                      desc: 'The Muse of tragedy',
                    },
                    {
                      label: 'Polyhymnia',
                      i: 'polyhymnia',
                      alt: 'Polyhymnia',
                      rank: '0',
                      parents: 'Zeus, Mnemosyne',
                      desc: 'The Muse of hymns',
                    },
                    {
                      label: 'Terpsichore',
                      i: 'terpsikhore',
                      alt: 'Terpsikhore',
                      rank: '0',
                      parents: 'Zeus, Mnemosyne',
                      desc: 'The Muse of choral dance and song',
                    },
                    {
                      label: 'Thalia 1',
                      i: 'thalia',
                      alt: 'Thaleia',
                      rank: '0',
                      parents: 'Zeus, Mnemosyne',
                      desc: 'The Muse of comedy and pastoral poetry',
                    },
                    {
                      label: 'Urania',
                      alt: 'Ourania',
                      rank: '0',
                      parents: 'Zeus, Mnemosyne',
                      desc: 'The Muse of astronomy',
                    },
                  ],
                },
              ],
            },
            {
              label: 'Phoibe',
              alt: 'Phoibe',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'The Titan goddess of bright intellect and the oracle at Delphi. She gifted the shrine to her grandson Apollon on his birthday.  She married her brother Coeus and with him she became the mother of Leto and Asteria',
              children: [
                {
                  label: 'Asteria',
                  i: 'asteria',
                  rank: '0',
                  parents: 'Coeus, Phoibe',
                  desc:
                    'The Titaness goddess of the prophesies of night. She was the mother of the goddess Hecate. When Asteria was pursued by Zeus she changed herself into a quail and leapt from heaven into the sea. There she metamorphosed (permanently) into the island of Delos.',
                  children: [
                    {
                      label: 'Hecate',
                      i: 'hekate',
                      alt: 'Hekate',
                      parents: 'Perses, Asteria',
                      rank: '0',
                      desc:
                        'The Titan goddess of witchcraft, ghosts and necromancy. She assisted Demeter in her search for Persephone, and became her minister in Hades.',
                    },
                  ],
                },
                {
                  label: 'Leto',
                  i: 'leto',
                  rank: '0',
                  parents: 'Coeus, Phoibe',
                  desc:
                    'Hera was jealous of Leto because Zeus, the husband of Hera, had fallen in love with her. From their union Leto bore the divine twins, Artemis and Apollo.',
                  children: [
                    {
                      label: 'Apollo',
                      i: 'apollon',
                      alt: 'Apollon',
                      rank: '2',
                      parents: 'Zeus, Leto',
                      desc:
                        'The god of prophecy, music and healing and one of the twelve great Olympian gods. His arrows brought plague to men.',
                    },
                    {
                      label: 'Artemis',
                      i: 'artemis',
                      rank: '2',
                      parents: 'Zeus, Leto',
                      desc:
                        'The goddess of hunting, wild animals, childbirth and children. She brought sudden death to women and girls with her arrows. She was one of the twelve great Olympian gods.',
                    },
                  ],
                },
              ],
            },
            {
              label: 'Rheia',
              i: 'rheia',
              alt: 'Rheia',
              rank: '1',
              parents: 'Ouranos, Gaia',
              desc:
                'Mother of the gods, and the Titan goddess of female fertility and mountain wilderness. Her brother and husband, Cronus, swallowed each of her children, but she managed to hide the youngest, Zeus, in a cave on the island Crete. Zeus eventually made his father disgorge his siblings -- Demeter, Hades, Hera, Hestia, Poseidon.',
              children: [
                {
                  label: 'Demeter',
                  i: 'demeter',
                  rank: '0',
                  parents: 'Cronus, Rheia',
                  desc:
                    'Goddess of agriculture and the fertile earth. She was one of the twelve great Olympian gods. Her Mysteries promised mankind passage to a blessed afterlife.',
                  children: [
                    {
                      label: 'Persephone',
                      i: 'persephone',
                      rank: '0',
                      parents: 'Zeus, Demeter',
                      desc:
                        'The Queen of the underworld. She was a spring-time goddess, the only daughter of Demeter, who was abducted to the underworld by Hades. Her mother brought famineto the world until Zeus agreed to let her return for part of the year.',
                      children: [
                        {
                          label: 'Zagreus',
                          alt: 'Zagreos',
                          rank: '0',
                          parents: 'Zeus, Persephone',
                          desc:
                            'The first-born son of Zeus who the god seated on the throne of heaven armed with thunderbolts when he was but a babe. The Titan gods stole into Olympus, distracted the child, and dismembered him with their bloody knives. Athena recovered his heart, and the god was reborn through Semele as Dionysus.',
                        },
                      ],
                    },
                  ],
                },
                {
                  label: 'Hades',
                  i: 'hades',
                  alt: 'Haides',
                  rank: '2',
                  parents: 'Cronus, Rheia',
                  desc:
                    'One of the three mighty sons of Cronus. When Zeus, Hades and Poseidon drew lots for the division of the world, Haides received the subterranean lands of the dead.',
                },
                {
                  label: 'Hera',
                  i: 'hera',
                  rank: '2',
                  parents: 'Cronus, Rheia',
                  desc:
                    'The Queen of the gods, and goddess of the heavens, women and marriage. She was one of the twelve great Olympian gods.',
                  children: [
                    {
                      label: 'Hephaestus',
                      i: 'hephaistos',
                      alt: 'Hephaistos',
                      rank: '0',
                      parents: 'Zeus, Hera',
                      desc:
                        'The god of fire, volcanism, smiths and craftsmen. He was one of the twelve great Olympian gods.',
                    },
                    {
                      label: 'Hebe',
                      i: 'hebe',
                      rank: '0',
                      parents: 'Zeus, Hera',
                      desc:
                        'The goddess of youth and the wife of Herakles after his ascension to Olympus.',
                    },
                    {
                      label: 'Ares',
                      i: 'ares',
                      rank: '0',
                      parents: 'Zeus, Hera',
                      desc:
                        'The god of war and one of the twelve great Olympian gods.',
                      children: [
                        {
                          label: 'Deimos',
                          i: 'deimos',
                          alt: 'Deimus',
                          rank: '0',
                          parents: 'Ares, Aphrodite',
                          desc: 'The god of terror and an attendant of Ares.',
                        },
                        {
                          label: 'The Erotes',
                          rank: '0',
                          parents: 'Ares, Aphrodite',
                          desc:
                            'Gods and goddesses of the various aspects of erotic love.',
                          children: [
                            {
                              label: 'Anteros',
                              i: 'anteros',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                              desc: 'The god of returned or mutual love. ',
                            },
                            {
                              label: 'Harmonia',
                              i: 'harmonia',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                              desc:
                                'The goddess of harmony and unity. She was married to the mortal Cadmus in a marriage ceremony attended by all the gods. After ruling Thebes for many years the two were transported to Elysium and a life of bliss.',
                            },
                            {
                              label: 'Hedylogos',
                              i: 'hedylogos',
                              alt: 'Hedylogus',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                              desc:
                                'The god of sweet-talk, one of the winged Erotes (Love-Gods).',
                            },
                            {
                              label: 'Himeros',
                              i: 'himeros',
                              alt: 'Himerus',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                              desc:
                                'The god of sexual desire, one of the winged Erotes (Love Gods). He was present at the birth of Aphrodite and became one of her constant companions.',
                            },
                            {
                              label: 'Photos',
                              i: 'photos',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                            },
                          ],
                        },
                        {
                          label: 'Hermaphroditos',
                          i: 'hermaphroditos',
                          alt: 'Hermaphroditus',
                          rank: '0',
                          parents: 'Hermes, Aphrodite',
                          desc:
                            'Loved by the nymph Salmacis, she prayed they might never be separated. The gods took her request literally and merged their forms into one - part male, part female. He was numbered amongst the winged Erotes.',
                        },
                        {
                          label: 'Phobos',
                          i: 'phobos',
                          alt: 'Phobus',
                          rank: '0',
                          parents: 'Ares, Aphrodite',
                          desc:
                            'The daemon personification of fear. He was a son and battlefield companion of the god Ares.',
                        },
                      ],
                    },
                  ],
                },
                {
                  label: 'Hestia',
                  i: 'hestia',
                  rank: '0',
                  parents: 'Cronus, Rheia',
                  desc:
                    'The goddess of hearth and home. She was a virgin goddess, one of the great Olympian gods. She was also the goddess of the sacrificial flame and was so honoured with every sacrifice to the gods.',
                },
                {
                  label: 'Poseidon',
                  i: 'poseidon',
                  rank: '2',
                  parents: 'Cronus, Rheia',
                  desc:
                    'The King of the Sea, and the god of horses, rivers and earthquakes. He was one of the great Olympian gods who received the sea when the cosmos was divided amongst the three sons of Cronus, following the overthrow of the Titans.',
                  children: [
                    {
                      label: 'Chrysaor',
                      alt: 'Khrysaor',
                      rank: '0',
                      parents: 'Poseidon, Medusa',
                      desc: 'A giant, "Golden Falchion".',
                      children: [
                        {
                          label: 'Echidna',
                          alt: 'Ekhidna',
                          rank: '0',
                          parents: 'Keto alone.',
                          desc:
                            'A deadly she-dragon with the upper body of a beautiful nymph, and the tail of a serpent in place of legs. The immortal Echidna married the hundred-headed giant Typhon and spawned a brood of terrible monsters.',
                        },
                      ],
                    },
                    {
                      label: 'Pegasus',
                      i: 'pegasos',
                      alt: 'Pegasos',
                      rank: '0',
                      parents: 'Poseidon, Medusa',
                      desc:
                        'A winged horse which sprung from the neck of Medusa after her decapitation. He was tamed by the hero Bellerophon who rode him into battle against the Amazons and the monster Chimera.',
                    },
                    {
                      label: 'Polyphemos',
                      i: 'polyphemos',
                      alt: 'Polyphemus',
                      rank: '0',
                      parents: 'Poseidon, Thoosa',
                      desc:
                        'A man-eating Cyclops who was blinded by the hero Odysseus',
                    },
                    {
                      label: 'The 7 Heliadae',
                    },
                  ],
                },
                {
                  label: 'Zeus',
                  i: 'zeus',
                  rank: '2',
                  parents: 'Cronus, Rheia',
                  desc:
                    'The King of the Gods, greatest of the twelve Olympians. He was the god of the heavens, weather, fate, and kings. His weapon was the fiery thunderbolt.',
                  children: [
                    {
                      label: 'Aeacus',
                      i: 'aiakos',
                      alt: 'Aiakos',
                      rank: '0',
                      parents: 'Zeus, Aegina',
                      desc:
                        'One of the three Judges of the Underworld. He was a king of Aigina appointed to this position after death.',
                    },
                    {
                      label: 'Aegipan',
                      alt: 'Aigipan',
                      rank: '0',
                      parents: 'Zeus, Aega',
                      desc:
                        'The fish-goat god. When Typhon attacked Olympus Aegipan suggested the gods flee to Egypt and hide there in the form of animals. In this exodus he took the form of a goat with the tail of a fish. Later he helped to free the captured Zeus and was placed amongst the stars as the constellation Capricorn.',
                    },
                    {
                      label: 'Aethlius',
                      rank: '0',
                      parents: 'Zeus, Protogenia',
                    },
                    {
                      label: 'Apollo',
                      i: 'apollon',
                      alt: 'Apollon',
                      rank: '2',
                      parents: 'Zeus, Leto',
                      desc:
                        'The god of prophecy, music and healing and one of the twelve great Olympian gods. His arrows brought plague to men.',
                    },
                    {
                      label: 'Arcesius (w/ Chalcomedusa)',
                      children: [
                        {
                          label: 'Odysseus',
                        },
                      ],
                    },
                    {
                      label: 'Ares',
                      i: 'ares',
                      rank: '0',
                      parents: 'Zeus, Hera',
                      desc:
                        'The god of war and one of the twelve great Olympian gods.',
                      children: [
                        {
                          label: 'Deimos',
                          i: 'deimos',
                          alt: 'Deimus',
                          rank: '0',
                          parents: 'Ares, Aphrodite',
                          desc: 'The god of terror and an attendant of Ares.',
                        },
                        {
                          label: 'The Erotes',
                          rank: '0',
                          parents: 'Ares, Aphrodite',
                          desc:
                            'Gods and goddesses of the various aspects of erotic love.',
                          children: [
                            {
                              label: 'Anteros',
                              i: 'anteros',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                              desc: 'The god of returned or mutual love. ',
                            },
                            {
                              label: 'Harmonia',
                              i: 'harmonia',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                              desc:
                                'The goddess of harmony and unity. She was married to the mortal Cadmus in a marriage ceremony attended by all the gods. After ruling Thebes for many years the two were transported to Elysium and a life of bliss.',
                            },
                            {
                              label: 'Hedylogos',
                              i: 'hedylogos',
                              alt: 'Hedylogus',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                              desc:
                                'The god of sweet-talk, one of the winged Erotes (Love-Gods).',
                            },
                            {
                              label: 'Himeros',
                              i: 'himeros',
                              alt: 'Himerus',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                              desc:
                                'The god of sexual desire, one of the winged Erotes (Love Gods). He was present at the birth of Aphrodite and became one of her constant companions.',
                            },
                            {
                              label: 'Photos',
                              i: 'photos',
                              rank: '0',
                              parents: 'Ares, Aphrodite',
                            },
                          ],
                        },
                        {
                          label: 'Hermaphroditos',
                          i: 'hermaphroditos',
                          alt: 'Hermaphroditus',
                          rank: '0',
                          parents: 'Hermes, Aphrodite',
                          desc:
                            'Loved by the nymph Salmacis, she prayed they might never be separated. The gods took her request literally and merged their forms into one - part male, part female. He was numbered amongst the winged Erotes.',
                        },
                        {
                          label: 'Phobos',
                          i: 'phobos',
                          alt: 'Phobus',
                          rank: '0',
                          parents: 'Ares, Aphrodite',
                          desc:
                            'The daemon personification of fear. He was a son and battlefield companion of the god Ares.',
                        },
                      ],
                    },
                    {
                      label: 'Artemis',
                      i: 'artemis',
                      rank: '2',
                      parents: 'Zeus, Leto',
                      desc:
                        'The goddess of hunting, wild animals, childbirth and children. She brought sudden death to women and girls with her arrows. She was one of the twelve great Olympian gods.',
                    },
                    {
                      label: 'Athene',
                      i: 'athene',
                      alt: 'Athena',
                      rank: '2',
                      parents: 'Zeus, Metis',
                      desc:
                        'Goddess of war and crafts who sprung fully grown and armed from the head of Zeus. She was one of the twelve great Olympian gods.',
                    },
                    {
                      label: 'Castor',
                      i: 'castor',
                      alt: 'Kastor',
                      rank: '0',
                      parents: 'Zeus, Leda',
                    },
                    {
                      label: 'Dardanus',
                      rank: '0',
                      parents: 'Zeus, Electra',
                      desc:
                        'Founder of the city of Dardania (the later, ill-fated city of Troy); he gave his name to the Dardanelles, once called the Hellespont',
                    },
                    {
                      label: 'Dionysos',
                      i: 'dionysos',
                      rank: '0',
                      parents: 'Zeus, Semele',
                      desc:
                        'Also known as Bacchus in both Greek and Roman mythology, he is the god of wine and the youngest of the twelve Olympians. Dionysus had an unusual birth that evokes the difficulty in fitting him into the Olympian pantheon. The goddess Hestia relinquished her position to him when he entered Olympus after spending many years wandering the world establishing his cult.',
                      children: [
                        {
                          label: 'Iakkhos',
                          i: 'iakkhos',
                          alt: 'Iacchus',
                          rank: '0',
                          parents: 'Dionysos, Aura',
                          desc:
                            'The torch-bearing god of the processions of the Eleusinian Mysteries and its ritual cry iakkhe. He was a daemon attendant of the goddess Demeter.',
                        },
                        {
                          label: 'Telete',
                          rank: '0',
                          parents: 'Dionysos, Nikaia',
                          desc:
                            'The female personification of the Dionysian mystery rites, and initiation into the orgiastic cult.',
                        },
                        {
                          label: 'Komos',
                          i: 'komos',
                          alt: 'Comus',
                          rank: '0',
                          parents: 'Dionysos, Kirke',
                          desc:
                            'The god of banquets and festivity, he was a son of Hermes and Circe. Komos could change the faces of men to beasts in the festivities.',
                        },
                        {
                          label: 'Priapos',
                          i: 'priapos',
                          alt: 'Priapus',
                          rank: '0',
                          parents:
                            'Dionysos, AphroditeThe rustic god of garden fertility. He was an ugly little satyr with enormous genitals.',
                        },
                      ],
                    },
                    {
                      label: 'The Dryads',
                      rank: '0',
                      parents: 'Zeus, Gaia',
                      desc:
                        'Female spirits of nature (nymphs), who preside over the groves and forests',
                    },
                    {
                      label: 'Elleithyia',
                      rank: '0',
                      parents: 'Zeus, Hera',
                    },
                    {
                      label: 'The Graces',
                      i: 'graces',
                      alt: 'Aglaia',
                      rank: '0',
                      parents: 'Zeus, Eurynome',
                      desc:
                        'Also called the three Charites, the goddesses who bestowed beauty and charm and who were themselves the embodiment of both',
                      children: [
                        {
                          label: 'Thalia',
                          i: 'thalia',
                          alt: 'Thaleia',
                          rank: '0',
                          parents: 'Zeus, Euronyme',
                          desc:
                            'One of the three Graces (or Charities), "good cheer"',
                        },
                        {
                          label: 'Euphrosyne',
                          i: 'euphrosyne',
                          rank: '0',
                          parents: 'Zeus, Euronyme',
                          desc:
                            'The goddess of mirth and merriment, one of the three Charites',
                        },
                        {
                          label: 'Aglaea',
                          i: 'aglaea',
                          alt: 'Aglaia',
                          rank: '0',
                          parents: 'Zeus, Eurynome',
                          desc:
                            'Goddess of beauty and one of the three Charites. She was married to Hephaestus ',
                        },
                      ],
                    },
                    {
                      label: 'The Hamadryads',
                      rank: '0',
                      parents: 'Zeus, Gaia',
                      desc:
                        'Tree nymphs who lived and died with the tree they inhabited',
                    },
                    {
                      label: 'Hebe',
                      i: 'hebe',
                      rank: '0',
                      parents: 'Zeus, Hera',
                      desc:
                        'The goddess of youth and the wife of Herakles after his ascension to Olympus.',
                    },
                    {
                      label: 'Helen of Troy',
                      rank: '0',
                      parents: 'Zeus, Leda',
                    },
                    {
                      label: 'Hephaestus',
                      i: 'hephaistos',
                      alt: 'Hephaistos',
                      rank: '0',
                      parents: 'Zeus, Hera',
                      desc:
                        'The god of fire, volcanism, smiths and craftsmen. He was one of the twelve great Olympian gods.',
                    },
                    {
                      label: 'Herakles',
                      i: 'herakles',
                      alt: 'Heracles',
                      rank: '0',
                      parents: 'Zeus, Alcmene',
                      desc:
                        'The greatest of the Greek heroes, famed for his twelve labours. On his funeral pyre he was consumed by lightning and apotheosized by Zeus into a god on Olympus. He there married Hebe, goddess of youth.',
                    },
                    {
                      label: 'Hermes',
                      i: 'hermes',
                      rank: '2',
                      parents: 'Zeus, Maia',
                      desc:
                        'The god of animal husbandry and fertility, trade, messengers, and travel. He was one of the twelve great Olympian gods and the messenger of Zeus, King of the Gods.',
                      children: [
                        {
                          label: 'Hermaphroditos',
                          i: 'hermaphroditos',
                          alt: 'Hermaphroditus',
                          rank: '0',
                          parents: 'Hermes, Aphrodite',
                          desc:
                            'Loved by the nymph Salmacis, she prayed they might never be separated. The gods took her request literally and merged their forms into one - part male, part female. He was numbered amongst the winged Erotes.',
                        },
                      ],
                    },
                    {
                      label: 'The Horai',
                      i: 'horai',
                      parents: 'Zeus, Themis',
                      desc:
                        'The Horae (the Hours) are the goddesses of the seasons (the Greek had only three seasons; spring, summer and winter). They are called Thallo, Auxo and Carpo, names which denote budding, growth and ripening.  The twelve Horai, who were daughters of Helios, were not always clearly distinguishable from the three Horai of the seasons, who were also described as overseeing the paths of the sun.',
                      children: [
                        {
                          label: 'Dike',
                          i: 'dike',
                          alt: 'Dice',
                          rank: '0',
                          parents: 'Zeus, Themis',
                          desc:
                            'The goddess of justice. She was one of the three Horae (Seasons)',
                        },
                        {
                          label: 'Eirene',
                          rank: '0',
                          parents: 'Zeus, Themis',
                          desc:
                            'One of the three Horae, the goddess of peace and spring',
                        },
                        {
                          label: 'Eunomia',
                          rank: '0',
                          parents: 'Zeus, Themis',
                          desc:
                            'The goddess of good order and spring pastures. She was one of the three Horae (Seasons) and an attendant of the goddess Aphrodite',
                        },
                      ],
                    },
                    {
                      label: 'Iasion',
                      rank: '0',
                      parents: 'Zeus, Electra',
                      desc:
                        'A springtime consort of the goddess Demeter and patron-god of her Samothracian Mysteries.',
                    },
                    {
                      label: 'Lacedaemon',
                      rank: '0',
                      parents: 'Zeus, Taygete',
                      desc:
                        'Born when Zeus took advantage of Taygete when she was unconscious ',
                    },
                    {
                      label: 'Minos',
                      i: 'minos',
                      rank: '0',
                      parents: 'Zeus, Europa',
                      desc:
                        'A lawmaking King of Crete who was appointed a judge of the dead in the underworld.',
                    },
                    {
                      label: 'Moirae (Fates)',
                      i: 'moirae',
                      alt: 'Moirai',
                      rank: '0',
                      parents: 'Zeus, Themis',
                      desc: 'The female deities who supervised fate',
                      children: [
                        {
                          label: 'Atropos',
                          alt: 'Atropus',
                          rank: '0',
                          parents: 'Zeus, Themis',
                          desc:
                            'Atropos was one of the three Moirae, the Fates, who cut the thread or web of life',
                        },
                        {
                          label: 'Klotho',
                          alt: 'Clotho',
                          rank: '0',
                          parents: 'Zeus, Themis',
                          desc:
                            'The youngest of the three Fates, who spins the thread of human life',
                        },
                        {
                          label: 'Lakhesis',
                          alt: 'Lachesis',
                          rank: '0',
                          parents: 'Zeus, Themis',
                          desc:
                            'One of the three Fates (Moirae), the :Disposer"; he measures the length of the thread of human life spun by Klotho and determines its destiny',
                        },
                      ],
                    },
                    {
                      label: 'The Muses',
                      i: 'muses',
                      alt: 'Terpsikhore',
                      rank: '0',
                      parents: 'Zeus, Mnemosyne',
                      desc: 'The Muse of choral dance and song',
                      children: [
                        {
                          label: 'Calliope',
                          i: 'kalliope',
                          alt: 'Kalliope',
                          rank: '0',
                          parents: 'Zeus, Mnemosyne',
                          desc:
                            'The eldest of the Muses. She was muse of epic poetry',
                        },
                        {
                          label: 'Clio',
                          alt: 'Kleio',
                          rank: '0',
                          parents: 'Zeus, Mnemosyne',
                          desc: 'The muse of history',
                        },
                        {
                          label: 'Erato',
                          rank: '0',
                          parents: 'Zeus, Mnemosyne',
                          desc: 'The Muse of lyric love poetry.',
                        },
                        {
                          label: 'Euterpe',
                          rank: '0',
                          parents: 'Zeus, Mnemosyne',
                          desc: 'The Muse of lyric poetry',
                        },
                        {
                          label: 'Melpomene',
                          rank: '0',
                          parents: 'Zeus, Mnemosyne',
                          desc: 'The Muse of tragedy',
                        },
                        {
                          label: 'Polyhymnia',
                          i: 'polyhymnia',
                          alt: 'Polyhymnia',
                          rank: '0',
                          parents: 'Zeus, Mnemosyne',
                          desc: 'The Muse of hymns',
                        },
                        {
                          label: 'Terpsichore',
                          i: 'terpsikhore',
                          alt: 'Terpsikhore',
                          rank: '0',
                          parents: 'Zeus, Mnemosyne',
                          desc: 'The Muse of choral dance and song',
                        },
                        {
                          label: 'Thalia 1',
                          i: 'thalia',
                          alt: 'Thaleia',
                          rank: '0',
                          parents: 'Zeus, Mnemosyne',
                          desc: 'The Muse of comedy and pastoral poetry',
                        },
                        {
                          label: 'Urania',
                          alt: 'Ourania',
                          rank: '0',
                          parents: 'Zeus, Mnemosyne',
                          desc: 'The Muse of astronomy',
                        },
                      ],
                    },
                    {
                      label: 'Myrmidon',
                      rank: '0',
                      parents: 'Zeus, Eurymedusa',
                    },
                    {
                      label: 'The Oreads',
                      rank: '0',
                      parents: 'Zeus, Gaia',
                      desc:
                        'The Greek nymphs of mountains and grottoes (from the Greek oros "mountain"). They belong to the retinue of Aphrodite',
                    },
                    {
                      label: 'Pandia',
                      alt: 'Pandeia',
                      rank: '0',
                      parents: 'Zeus, Selene',
                      desc:
                        'The goddess of brightness; a minor goddess whose name means "all bright"',
                    },
                    {
                      label: 'Persephone',
                      i: 'persephone',
                      rank: '0',
                      parents: 'Zeus, Demeter',
                      desc:
                        'The Queen of the underworld. She was a spring-time goddess, the only daughter of Demeter, who was abducted to the underworld by Hades. Her mother brought famineto the world until Zeus agreed to let her return for part of the year.',
                      children: [
                        {
                          label: 'Zagreus',
                          alt: 'Zagreos',
                          rank: '0',
                          parents: 'Zeus, Persephone',
                          desc:
                            'The first-born son of Zeus who the god seated on the throne of heaven armed with thunderbolts when he was but a babe. The Titan gods stole into Olympus, distracted the child, and dismembered him with their bloody knives. Athena recovered his heart, and the god was reborn through Semele as Dionysus.',
                        },
                      ],
                    },
                    {
                      label: 'Perseus',
                      i: 'perseus',
                      rank: '0',
                      parents: 'Zeus, Danae',
                    },
                    {
                      label: 'Polydeuces',
                      i: 'polydeuces',
                      rank: '0',
                      parents: 'Zeus, Leda',
                    },
                    {
                      label: 'Rhadamanthys',
                      i: 'rhadamanthys',
                      rank: '0',
                      parents: 'Zeus, Europa',
                      desc:
                        'One of the three judges of the dead in the underworld and the Lord of the Islands of the Blessed.',
                    },
                    {
                      label: 'Sarpedon',
                      i: 'sarpedon',
                      rank: '0',
                      parents: 'Zeus, Europa',
                    },
                    {
                      label: 'Tantalus',
                      rank: '0',
                      parents: 'Zeus, Plouto',
                    },
                    {
                      label: 'Thriae',
                      rank: '0',
                      parents: 'Zeus, Themis',
                      desc:
                        'Lesser goddesses of nature who can foresee the future or foretell the unknown by inspiration, magic, signs, or omens.  The word Thriae means "pebbles," because the future was foretold by tossing pebbles',
                    },
                    {
                      label: 'Zagreus',
                      alt: 'Zagreos',
                      rank: '0',
                      parents: 'Zeus, Persephone',
                      desc:
                        'The first-born son of Zeus who the god seated on the throne of heaven armed with thunderbolts when he was but a babe. The Titan gods stole into Olympus, distracted the child, and dismembered him with their bloody knives. Athena recovered his heart, and the god was reborn through Semele as Dionysus.',
                    },
                  ],
                },
              ],
            },
            {
              label: 'Tethys',
              i: 'tethys',
              rank: '1',
              parents: 'Ouranos, Gaia',
              desc:
                'The Titan goddess of the subterranean sources of fresh-water and the nursing of the young. She was the wife of the Titan Okeanus and bore him three-thousand fresh-water Nymphs and innumerable Rivers. ',
              children: [
                {
                  label: 'Okeanides',
                  i: 'okeanides',
                  alt: 'Oceanides',
                  rank: '0',
                  parents: 'Okeanos, Tethys',
                  desc:
                    'Nymphs of the ocean. There were also nymphs of springs and rivers (Naiads), clouds (Nephelai), cool breezes (Aurai), meadows (Limoniads) and groves (Alseides). The eldest of them were lower ranked Titan goddesses.',
                  children: [
                    {
                      label: 'Admete',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'An Okeanis whose name means "the unbroken" or "unwedded". She may have been the Naias Nymphe of a wild mountain stream, or the Nephele of wild clouds and rain. Admete was perhaps a goddess of unwedded maidens, her sister Zeuxo, representing the yoke of marriage',
                    },
                    {
                      label: 'Akaste',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'An Okeanis whose name means "unstable" or "irregular". She may have been the Naias Nymphe of an erratically flowing spring or stream, or a Nephele of unpredictable rainfall. Akaste might also have been a gooddess of unpredictable behavior',
                    },
                    {
                      label: 'Amphiro',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'An Okeanis named "the surrounding flow". She may have been a Naias of a stream of Nephele of rain',
                    },
                    {
                      label: 'Amphitrite',
                      i: 'amphitrite',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis goddess of the sea. (She was usually numbered amongst the Nereides rather than Okeanides)',
                    },
                    {
                      label: 'Asia (Continent Asia)',
                      alt: 'Asie',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis Nymphe of the region of Asia (or rather Anatolian peninsular). She was the wife or mother of the Titan Prometheus. Her sister was Europe',
                      children: [
                        {
                          label: 'Calypso',
                          alt: 'Kalypso',
                          rank: '0',
                          parents: 'Atlas, Asia',
                          desc:
                            'A goddess-nymph of the island Ogygia. She detained the hero Odysseus on her island for many years.',
                        },
                        {
                          label: 'Maera',
                          alt: 'Maira',
                          rank: '0',
                          parents: 'Atlas, Asia',
                          desc:
                            'A star-nymph daughter of the Titan Atlas, and wife of the Arcadian King Tegeates. She was the goddess of the scorching dog-star Sirios.',
                        },
                      ],
                    },
                    {
                      label: 'Asterope',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc: 'The "starry-eyed"; an Oceanid loved by Zeus',
                    },
                    {
                      label: 'Beroe',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis Nymphe of the city of Beroe (Beruit) in Lebanon',
                    },
                    {
                      label: 'Daeira (Knowledge)',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'An Okeanis Nymphe named "the knowing" or "learned". She was a goddess of the town of Eleusis, perhaps the Naias of the sacred town well',
                    },
                    {
                      label: 'Dione',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis Nymphe "heavenly" or "divine" was a goddess of the oracle of Dodona in Thesprotia.  Some say she was the mother of the goddess Aphrodite by Zeus.  Dione was probably the same as the Okeanis Dodone, an eponymous goddess of the shrine',
                    },
                    {
                      label: 'Dodone',
                      alt: 'Dodona',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis Nymphe of Dodona in Thesprotia. She may have been the Naias of a local spring or well, and was perhaps the same as the Okeanis Dione',
                    },
                    {
                      label: 'Doris',
                      i: 'doris',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Oceanid goddess of the mingling of fresh water with the brine. She was the wife of the sea-god Nereus, her half-brother, and mother of the fifty Nereides.',
                      children: [
                        {
                          label: 'The Nereides',
                          i: 'nereides',
                          rank: '0',
                          parents: 'Nereus, Doris',
                          desc:
                            'The fifty daughters who dwell in the Mediterranean Sea, these beautiful women were always friendly and helpful towards sailors fighting perilous storms. They are believed to be able to prophesize. They belong to the retinue of Poseidon',
                        },
                      ],
                    },
                    {
                      label: 'Eidyia',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "seeing" or "knowing" was the wife of King Aeetes of Kolkhis. She was apparently a goddess connected with the power of witchcraft',
                    },
                    {
                      label: 'Elektra (Amber-colour)',
                      shortlabel: 'Elektra',
                      alt: 'Electra',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Oceanid of amber-light. She was married to the wondrous sea-god Thaumas and bore him Iris, the rainbow, and the whirlwind Harpies.',
                    },
                    {
                      label: 'Ephyra',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The eponymous Oceanid nymph of the town of Ephyra (Corinth)',
                    },
                    {
                      label: 'Eudora',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "good-gifts" was perhaps a Nephele of good downfalls of rain or the Naias of a generously flowing spring',
                    },
                    {
                      label: 'Europe (Continent Europe)',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis Nymphe of the continent of Europe. Her sister was Asia',
                    },
                    {
                      label: 'Eurynome 1',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis Nymphe of "broad-pastures". She was the mother of the Kharites by Zeus. Eurynome was perhaps one of the Epimelides, Nymphai of grazing pasture',
                    },
                    {
                      label: 'Eurynome 2',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis Nymphe of "wide-rulership". She was the wife of the Titan Ophion',
                    },
                    {
                      label: 'Galaxaura',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis Nymphe "milky breeze" was probably the Aura or Nephele of the mist-clearing breeze',
                    },
                    {
                      label: 'Hagno',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "holy" was one of the nurses of the infant god Zeus. She was the Naias of the Arkan spring Hagno, whose waters generated the clouds of a Nephele',
                    },
                    {
                      label: 'Hesione',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "knowing" or "foresight" was a goddess of foreknowledge. She was the wife of the Titan Prometheus (forethought). Hesione was also known as Pronoia',
                    },
                    {
                      label: 'Hippo',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis Nymphe "horse" was the Naias of a stream or Aura of breezes - both winds and waters were often likened to horses',
                    },
                    {
                      label: 'Hyale',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "crystal" or "clear like crystal" was a Nephele of rain. She was on the attendant Nymphs of Artemis',
                    },
                    {
                      label: 'Iakhe',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis of the ritual cry of joy "iakhe". She was a goddess of the Eleusinian Mysteries',
                    },
                    {
                      label: 'Ianeira',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'An Okeanis Nymphe, perhaps the goddess of the Ionian tribe of Greeks. Her sister Doris presided over the Dorians',
                    },
                    {
                      label: 'Ianthe (Violet-colour)',
                      shortlabel: 'Ianthe',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis of "violet flowers" or the colour "violet". She may have been a Nephele of the violet tinged clouds of dawn, or an Anthousa (flower-nymph) of violets',
                    },
                    {
                      label: 'Kallirhoe',
                      i: 'kallirhoe',
                      alt: 'Callirhoe',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "fair-flowing" was either the Naias of a good flowing spring or Nephele (Cloud) of good downpours. She was the mother of the Erythian (Spanish) giant Geryon.',
                    },
                    {
                      label: 'Kalypso',
                      alt: 'Calypso',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'An Okeanis whose name means "hidden", "covered"or "veiled". She may have been the Naias of a covered or hidden spring or the Aura of invisible breezes',
                    },
                    {
                      label: 'Kamarina',
                      alt: 'Camarina',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis Nymphe of the city of Kamarina in Sicily. She was probably the Naias of the town fountain or well',
                    },
                    {
                      label: 'Kapheira',
                      alt: 'Capheira',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "storm-breath" was probably the Aura of strong winds. She was a nurse of the god Poseidon',
                    },
                    {
                      label: 'Kerkeis',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc: 'One of the Okeanides',
                    },
                    {
                      label: 'Keto',
                      alt: 'Ceto',
                      rank: '0',
                      parents: 'Pontos, Gaia',
                      desc:
                        'An ancient Sea-Goddess. She personified the dangers of the sea. Most of the monsters of mythology were descended from her.',
                      children: [
                        {
                          label: 'Echidna',
                          alt: 'Ekhidna',
                          rank: '0',
                          parents: 'Keto alone.',
                          desc:
                            'A deadly she-dragon with the upper body of a beautiful nymph, and the tail of a serpent in place of legs. The immortal Echidna married the hundred-headed giant Typhon and spawned a brood of terrible monsters.',
                        },
                        {
                          label: 'The Gorgons',
                          rank: '0',
                          parents: 'Phorkys, Keto',
                          desc:
                            'A monstrous feminine creature whose appearance would turn anyone who laid eyes upon it to stone. Later there were three of them: Euryale ("far-roaming"), Sthenno ("forceful"), and Medusa ("ruler"), the only one of them who was mortal. ',
                          children: [
                            {
                              label: 'Euryale',
                              rank: '0',
                              desc: 'One of the two immortal Gorgons.',
                            },
                            {
                              label: 'Medusa',
                              i: 'medousa',
                              alt: 'Medousa',
                              rank: '0',
                              desc:
                                'A serpent-haired Gorgon who was slain by the hero Perseus. When she was beheaded her two children by Poseidon were born from her bloody neck.',
                              children: [
                                {
                                  label: 'Pegasus',
                                  i: 'pegasos',
                                  alt: 'Pegasos',
                                  rank: '0',
                                  parents: 'Poseidon, Medusa',
                                  desc:
                                    'A winged horse which sprung from the neck of Medusa after her decapitation. He was tamed by the hero Bellerophon who rode him into battle against the Amazons and the monster Chimera.',
                                },
                                {
                                  label: 'Chrysaor',
                                  alt: 'Khrysaor',
                                  rank: '0',
                                  parents: 'Poseidon, Medusa',
                                  desc: 'A giant, "Golden Falchion".',
                                  children: [
                                    {
                                      label: 'Echidna',
                                      alt: 'Ekhidna',
                                      rank: '0',
                                      parents: 'Keto alone.',
                                      desc:
                                        'A deadly she-dragon with the upper body of a beautiful nymph, and the tail of a serpent in place of legs. The immortal Echidna married the hundred-headed giant Typhon and spawned a brood of terrible monsters.',
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              label: 'Sthenno',
                              rank: '0',
                            },
                          ],
                        },
                        {
                          label: 'Graeae',
                          i: 'graeae',
                          rank: '0',
                          desc:
                            'The three "old women" or "gray ones," they were gray-haired from birth and have only one eye and one tooth, which they share among them. They are Enyo ("horror"), Deino ("dread") and Pemphredo ("alarm")',
                          children: [
                            {
                              label: 'Deino',
                              rank: '0',
                              parents: 'Phorkys, Keto',
                              desc: 'One of the old hag Graeae.',
                            },
                            {
                              label: 'Enyo',
                              rank: '0',
                              parents: 'Phorkys, Keto',
                              desc:
                                'The goddess of war, a battlefield companion of Ares.',
                            },
                            {
                              label: 'Pemphredo',
                              rank: '0',
                              parents: 'Phorkys, Keto',
                              desc: 'One of old hag Graeae.',
                            },
                          ],
                        },
                        {
                          label: 'Thoosa',
                          rank: '0',
                          parents: 'Porchys, Keto',
                          desc:
                            'A sea nymph loved by the god Poseidon. She was the mother of the Cyclops Polyphemus.',
                          children: [
                            {
                              label: 'Polyphemos',
                              i: 'polyphemos',
                              alt: 'Polyphemus',
                              rank: '0',
                              parents: 'Poseidon, Thoosa',
                              desc:
                                'A man-eating Cyclops who was blinded by the hero Odysseus',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      label: 'Khariklo',
                      i: 'khariklo',
                      alt: 'Chariklo',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'A Okeanis Nymphe of Mount Pelion in Thessalia. She was the wife of the wise kentauros (centaur) Kheiron',
                    },
                    {
                      label: 'Khryseis (Gold-colour)',
                      shortlabel: 'Khryseis',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "golden" or "golden-yellow" was probably either a Nephele of the golden-tinged clouds of sunset, or the Naias of a gold-producing mountain-spring',
                    },
                    {
                      label: 'Klymene 1',
                      i: 'klymene',
                      alt: 'Clymene',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis goddess of fame and infamy was the wife of the Titan Iapetos',
                      children: [
                        {
                          label: 'Atlas',
                          i: 'atlas',
                          rank: '1',
                          desc:
                            'The Titan-god of daring. He led the Titan-army in the war against the gods and as punishment was condemned to bear the heavens upon his shoulders.',
                          children: [
                            {
                              label: 'Calypso',
                              alt: 'Kalypso',
                              rank: '0',
                              parents: 'Atlas, Asia',
                              desc:
                                'A goddess-nymph of the island Ogygia. She detained the hero Odysseus on her island for many years.',
                            },
                            {
                              label: 'The Hesperides',
                              rank: '0',
                              parents: 'Atlas, Hesperius',
                              desc:
                                'The Hesperides are Aegle, Arethusa, Erytheia and Hesperia, nymphs who live in a beautiful garden.  The Hesperides are Aegle, Arethusa, Erytheia and Hesperia',
                              i: 'hesperides',
                            },
                            {
                              label: 'The Hyades',
                              rank: '0',
                              parents: 'Atlas, Aethra',
                              desc:
                                'The sisters of the Pleiades.  In some traditions they were regarded as the nurses of either Dionysus or the infant Zeus. As a reward, they were placed in the sky as a constellation',
                              children: [
                                {
                                  label: 'Ambrosia',
                                  rank: '0',
                                  parents: 'Atlas, Aethra',
                                  desc: 'One of the Hyades',
                                },
                                {
                                  label: 'Cleeia',
                                  rank: '0',
                                  parents: 'Atlas, Aethra',
                                  desc: 'One of the Hyades',
                                },
                                {
                                  label: 'Coronis',
                                  alt: 'Koronis',
                                  rank: '0',
                                  parents: 'Atlas, Aethra',
                                  desc: 'One of the starry Hyades.',
                                },
                                {
                                  label: 'Eudora',
                                  rank: '0',
                                  parents: 'Atlas, Aethra',
                                  desc: 'One of the starry Hyades',
                                },
                                {
                                  label: 'Pedile',
                                  rank: '0',
                                  parents: 'Atlas, Aethra',
                                  desc: 'One of the Hyades',
                                },
                                {
                                  label: 'Phaeo',
                                  rank: '0',
                                  parents: 'Atlas, Aethra',
                                  desc: 'One of the Hyades',
                                },
                                {
                                  label: 'Phaesla',
                                  rank: '0',
                                  parents: 'Atlas, Aethra',
                                  desc: 'One of the Hyades',
                                },
                                {
                                  label: 'Phyto',
                                  rank: '0',
                                  parents: 'Atlas, Aethra',
                                  desc: 'One of the Hyades',
                                },
                                {
                                  label: 'Polyxo',
                                  rank: '0',
                                  parents: 'Atlas, Aethra',
                                  desc: 'One of the Hyades',
                                },
                                {
                                  label: 'Theone',
                                  rank: '0',
                                  parents: 'Atlas, Aethra',
                                  desc: 'One of the Hyades',
                                },
                              ],
                            },
                            {
                              label: 'Hyas',
                              rank: '0',
                              parents: 'Atlas, Aethra',
                              desc:
                                'The water-bearing son of the Titan Atlas who was killed by a lion and placed amongst the stars as the constellation Aquarius.',
                            },
                            {
                              label: 'Maera',
                              alt: 'Maira',
                              rank: '0',
                              parents: 'Atlas, Asia',
                              desc:
                                'A star-nymph daughter of the Titan Atlas, and wife of the Arcadian King Tegeates. She was the goddess of the scorching dog-star Sirios.',
                            },
                            {
                              label: 'The Pleiades',
                              rank: '0',
                              parents: 'Atlas, Pleione',
                              desc:
                                'The virgin companions of Artemis. When Orion, a beautiful hunter, pursued them and their mother, they prayed to the gods for rescue. The gods answered they prayer and they were changed into doves, and later into stars. Zeus placed them in the sky where they formed a part of the constellation of Taurus',
                              children: [
                                {
                                  label: 'Alcyone',
                                  alt: 'Alkyone',
                                  rank: '0',
                                  desc:
                                    'One of the Pleiades. She was loved by Poseidon.',
                                },
                                {
                                  label: 'Celaeno',
                                  alt: 'Kelaino',
                                  rank: '0',
                                  desc:
                                    'One of the starry Pleiad nymphs. She was loved by the god Poseidon.',
                                },
                                {
                                  label: 'Maia',
                                  i: 'maia',
                                  rank: '0',
                                  desc:
                                    'A Pleiad star-nymph of Mount Cyllene in Arcadia. She was the mother of the god Hermes by Zeus.',
                                },
                                {
                                  label: 'Merope',
                                  rank: '0',
                                  desc:
                                    'One of the Pleiad star-nymphs, the wife of the impious Corinthian King Sisyphos. Blushing in shame for her husband"s crimes, her star shone only faintly.',
                                },
                                {
                                  label: 'Sterope',
                                  rank: '0',
                                  desc:
                                    'One of the starry Pleiad nymphs. She was loved by the god Ares.',
                                },
                                {
                                  label: 'Taygete',
                                  rank: '0',
                                  desc:
                                    'The starry Pleiad nymph of Mount Taygetus who was loved by Zeus. She was the ancestress of the kings of Sparta.',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          label: 'Epimethus',
                          i: 'epimethus',
                          rank: '0',
                          parents: 'Iapetus, Clymene',
                          desc:
                            'Epimetheus ("afterthought") foolishly ignored his brother Prometheus\' warnings to beware of any gifts from Zeus. He accepted Pandora as his wife, thereby bringing ills and sorrows to the world. Epimetheus was made up by the Greeks as the antipode of his brother Prometheus ("forethought").',
                        },
                        {
                          label: 'Menoetius',
                          alt: 'Menoitios',
                          rank: '0',
                          parents: 'Iapetus, Clymene ',
                          desc:
                            'The Titan god of rash anger. He was blasted into Erebus with a thunderbolt by Zeus.',
                        },
                        {
                          label: 'Prometheus',
                          i: 'prometheus',
                          rank: '0',
                          parents: 'Iapetus, Clymene',
                          desc:
                            'The Titan god of forethought and the creator of mankind. He cheated the gods on several occasions on behalf of man, including the theft of fire. As punishment Zeus chained him to the Caucasus mountains and sent an eagle to prey on his ever-regenerating liver. He was later freed by Heracles.',
                        },
                      ],
                    },
                    {
                      label: 'Klymene',
                      i: 'klymene',
                      alt: 'Clymene',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis of fame was the mother of the Phaethon by Helios the sun. She was probably one of the Nephelai. She may be the same as Klytia',
                      children: [
                        {
                          label: 'Phaeton',
                          rank: '0',
                          parents: 'Helios, Clymene',
                          desc:
                            'The son of the sun-god Helios. He induced his father to allow him to drive the chariot of the sun across the heavens for one day. The horses ran wildly out of their course and came close to the earth, threatening to burn it. Zeus noticed the danger and with a thunderbolt he destroyed Phaeton. ',
                        },
                      ],
                    },
                    {
                      label: 'Klytia',
                      alt: 'Clytia',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'One of the Oceanides who fell in love with the sun-god Helius. When he abandoned her she wasted away and was transformed into the sun-gazing heliotrope flower.  She may have been the same as Klymene 2',
                    },
                    {
                      label: 'Krokale',
                      alt: 'Crocale',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "sea-shore" was a Naias Nymphe companion of the goddess Artemis',
                    },
                    {
                      label: 'Leuke',
                      alt: 'Leuce',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'An Okeanis named "the white" who was loved by Haides god of the underworld. She was transformed into the white poplar tree of the nlessed Elysian Fields',
                    },
                    {
                      label: 'Leukippe',
                      alt: 'Leucippides',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "White-Horse" was probably the Nephele or Aura of fast moving clouds, or the Naias of a frothy white spring or mountain stream. Winds and waters were often compared to horses',
                    },
                    {
                      label: 'Libya (Continent Africa)',
                      alt: 'Libye',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Oceanid nymph who gave her name to the continent of Libya (Africa).  She was a sister of Europe and Asia',
                    },
                    {
                      label: 'Melia',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Oceanid nymph wife of the Argive river-god Inachus.  She was probably the Naias of a sweet-water spring, perhaps the same as Melia 2, who was loved by the god Apollon and was the Naias of the Theban spring Ismene',
                    },
                    {
                      label: 'Meliboea 1',
                      alt: 'Meliboia',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "sweet-cattle" was the wife of the early Arkadian King Pelasgos. She was probably either the Naias nymphe of an Arkadian spring or the Epimelis of cattle-grazing pastures',
                    },
                    {
                      label: 'Meliboea 2',
                      alt: 'Meliboia',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc: 'An Okeanis loved by the Syrian River-God Orontes',
                    },
                    {
                      label: 'Melite',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "honey-sweet" was probably the Nymphe of sweet-water spring',
                    },
                    {
                      label: 'Melobosis',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "food of fruit" or "sheep-feeder" was probably one of the Epimelides, Nymphai of grassy pastures or fruit trees',
                    },
                    {
                      label: 'Menestho',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "swift-force" or "strong and fast" was probably the Naias of a full flowing stream, or the Aura of strongly blowing breezes',
                    },
                    {
                      label: 'Merope',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "with face turned" was the mother of Phaethon by the god Helios. She was probably the same as Klymene 2',
                    },
                    {
                      label: 'Metis (Counsel)',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis goddess of wisdom and good-counsel. She was loved by Zeus, who swallowed her to avoid the prophecy that her son would dethrone him. She was probably one of the Nephelai',
                      children: [
                        {
                          label: 'Athene',
                          i: 'athene',
                          alt: 'Athena',
                          rank: '2',
                          parents: 'Zeus, Metis',
                          desc:
                            'Goddess of war and crafts who sprung fully grown and armed from the head of Zeus. She was one of the twelve great Olympian gods.',
                        },
                      ],
                    },
                    {
                      label: 'Neda',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis goddess of the Arkadian River Neda. She was an Arkadian nurse of the infant god Zeus',
                    },
                    {
                      label: 'Nemesis',
                      i: 'nemesis',
                      rank: '0',
                      parents: 'Nyx alone; or Okeanus and Tethys',
                      desc:
                        'The Okeanis goddess of indignation and retribution for hybristic behaviour and undeserved good fortune. After being seduced by Zeus in the form of a swan, she lay the egg from which Helen was hatched. She a daughter of Nyx, but was also called a daughter of Nyx or Zeus.',
                    },
                    {
                      label: 'Nephele 1',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'A Nymphe "cloud" who was the wife of the mortal King Athamas. She rescued her two children from sacrifice by sending a flying golden-fleeced Ram to their aide (a creature reminiscent of a golden cloud)',
                    },
                    {
                      label: 'Nephele 2',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'A Nymphe formed by Zeus in the shape of Hera out of the clouds. She was raped by the criminal Ixion, and bore him the Kentauroi (Centaurs)',
                      children: [
                        {
                          label: 'Nessos',
                          i: 'nessos',
                          alt: 'Nessus',
                          rank: '0',
                          desc:
                            'A centaur ferryman who tried to rape the wife of Heracles, Deianeira, as he was carrying her across his river. Heracles heard her screams and shot him dead with poisoned arrows. The dying centaur tricked the girl into taking a sample of his poisoned blood to use as an aphrodisiac should her husband ever prove unfaithful.',
                        },
                        {
                          label: 'Eurytion',
                          i: 'eurytion',
                          rank: '0',
                          desc:
                            'A Thessalian centaur who attempted to abduct the bride of the Lapith King Peirithous on her wedding day. Most of the centaurs were slain in the battle which ensued.',
                        },
                        {
                          label: 'Hylonome',
                          rank: '0',
                          desc:
                            'A female centaur. She killed herself when her husband the centaur Cyllarus was slain in the battle with the Lapiths.',
                        },
                        {
                          label: 'Petraios',
                          i: 'petraios',
                          rank: '0',
                        },
                        {
                          label: 'Asbolos',
                          i: 'asbolos',
                          rank: '0',
                        },
                        {
                          label: 'Arktos',
                          rank: '0',
                        },
                        {
                          label: 'Oureios',
                          rank: '0',
                        },
                        {
                          label: 'Mimas',
                          rank: '0',
                          desc:
                            'One of the Gigantes who slain in the giant-war by Hephaestus with barage of red-hot metal.',
                        },
                        {
                          label: 'Peukeus',
                          rank: '0',
                        },
                        {
                          label: 'Perimedes',
                          rank: '0',
                        },
                        {
                          label: 'Dryalos',
                          rank: '0',
                        },
                        {
                          label: 'Rhoikos',
                          rank: '0',
                          parents: 'Ouranos, Gaia',
                          desc: 'One of the Gigantes',
                        },
                        {
                          label: 'Hylaios',
                          i: 'hylaios',
                          rank: '0',
                        },
                      ],
                    },
                    {
                      label: 'Nephele 3',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis Nymphe "cloud" was one of the virgin Nephelai attendants of the goddess Artemis',
                    },
                    {
                      label: 'Nymphai Artemis',
                      i: 'artemis',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The fifty youngest Okeanides were handmaidens of the goddess Artemis',
                    },
                    {
                      label: 'The 5 Nysiades',
                      i: 'nysiades',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'Five Okeanides of Mt Nysa in Phoinikia who nursed the god Dionysos and became the first of his Bakkhantes',
                    },
                    {
                      label: 'Okyrhoe',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "swift-flowing" was either a Naias of fast flowing spring, or Nephele of falling rain',
                    },
                    {
                      label: 'Ourania',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The "heavenly-one" was probably an Okeanis Nephele (of the clouds)',
                    },
                    {
                      label: 'Paregoron',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis goddess of consolation and soothing words. She was an attendant of the goddess Aphrodite',
                    },
                    {
                      label: 'Pasithoe',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'An Okeanis whose name means "all-swift". She was probably either the Naias of a fast-flowing spring or an Aura of the swift breeze',
                    },
                    {
                      label: 'Periboia',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "surrounded by cattle" was the wife of the Titan Lelantos. She was probably the Naias of a pasture-feeding stream',
                    },
                    {
                      label: 'Peitho (Persuasion)',
                      i: 'peitho',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Oceanid goddess of persuasion and seductive words. She was the nurse and close companionof the goddess Aphrodite.',
                    },
                    {
                      label: 'Perseis',
                      alt: 'Perse',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'An Okeanis-eponym of Persia and mother by Helios of the eastern despots Aeetes and Perses, and the witches Pasiphae and Kirke. Her name also means "destroyer" who probably was a goddess of the destructive power of witches',
                      children: [
                        {
                          label: 'Aegea',
                          rank: '0',
                          parents: 'Helios, Perse',
                          desc:
                            'Sister to Circe and Pasiphae, and daughter of the sun. When the Titans attacked the gods of Olympus, Gaia placed Aega in a cave to hide her shining loveliness',
                        },
                        {
                          label: 'Aetes',
                          rank: '0',
                          parents: 'Helios, Perse',
                          desc:
                            'King of Colchis;  Aetes is the father of the sorceress Medea.',
                        },
                        {
                          label: 'Circe',
                          i: 'kirke',
                          alt: 'Kirke',
                          rank: '0',
                          parents: 'Helios, Perse',
                          desc:
                            'An immortal witch who dwelt on the island of Aeaea. She turned travellers into beasts with her potions.',
                        },
                        {
                          label: 'Pasiphae',
                          i: 'pasiphae',
                          rank: '0',
                          parents: 'Helios, Perse',
                          desc:
                            'A goddess-witch of the island of Crete, the wife of King Minos. She was filled with an unnatural desire for the Cretan Bull and after mating it conceived the bull-headed Minotaur.',
                        },
                        {
                          label: 'Perses',
                          shortlabel: 'Perses',
                          parents: 'Helios, Perse',
                          rank: '0',
                          desc:
                            'The Titan god of destruction and laying waste.',
                          children: [
                            {
                              label: 'Hecate',
                              i: 'hekate',
                              alt: 'Hekate',
                              parents: 'Perses, Asteria',
                              rank: '0',
                              desc:
                                'The Titan goddess of witchcraft, ghosts and necromancy. She assisted Demeter in her search for Persephone, and became her minister in Hades.',
                            },
                          ],
                        },
                        {
                          label: 'Phaethusa',
                          alt: 'Paethousa',
                          rank: '0',
                          parents: 'Helios, Perse',
                          desc:
                            'A nymph daughter of the sun-god Helios, and the shepherdess of his flocks on the island of Thrinacie.',
                        },
                      ],
                    },
                    {
                      label: 'Petraie (Stoney-grey-colour)',
                      shortlabel: 'Petraie',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "of the rocks" or "stone-grey" was probably the Naias of a rocky spring, or Nephele of dark grey clouds',
                    },
                    {
                      label: 'Phaino',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "appearing" or "shining" was perhaps the Nephele of the appearance of cloud, or the Naias of a bright spring',
                    },
                    {
                      label: 'Phiale',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "water-pitcher" was one of the companions of the goddess Artemis. She was either a spring Naias or rain-pouring Nephele',
                    },
                    {
                      label: 'Philyre',
                      alt: 'Philyra',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'An Oceanid nymph, daughter of Oceanus and Tethys, loved by the Titan Cronus. When Rhea discovered their rendezvous, he transformed himself into a stallion. From their union, the centaur Chiron was born. When Philyra saw her son, she asked Zeus to transform her into another form, and became a linden tree. Goddess of beauty, perfume, healing, and writing, and the inventor of paper.',
                      children: [
                        {
                          label: 'Chiron',
                          i: 'chiron',
                          alt: 'Kheiron',
                          rank: '0',
                          parents: 'Cronus, Philyra',
                          desc:
                            'An immortal Centaur son of Cronus. He was famed for his wisdom and dwelt in a cave on Mt Pelion where he fostered and trained many of the great heroes.',
                          children: [
                            {
                              label: 'Ocyrhoe',
                              alt: 'Okyrhoe',
                              rank: '0',
                              parents: 'Chiron, Chariclo',
                              desc:
                                'A Naiad nymph of the island of Samos who was pursued by the god Apollon. When she attempted to flee the island by ship he turned the vessel to stone and transformed the pilot into a porpoise.',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      label: 'Pleione (Many)',
                      shortlabel: 'Pleione',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Oceanid nymph wife of the Titan Atlas. She and her seven daughters, the Pleiades, were pursued by the lusty giant Orion for seven years before the gods placed them amongst the stars.',
                      children: [
                        {
                          label: 'The Pleiades',
                          rank: '0',
                          parents: 'Atlas, Pleione',
                          desc:
                            'The virgin companions of Artemis. When Orion, a beautiful hunter, pursued them and their mother, they prayed to the gods for rescue. The gods answered they prayer and they were changed into doves, and later into stars. Zeus placed them in the sky where they formed a part of the constellation of Taurus',
                          children: [
                            {
                              label: 'Alcyone',
                              alt: 'Alkyone',
                              rank: '0',
                              desc:
                                'One of the Pleiades. She was loved by Poseidon.',
                            },
                            {
                              label: 'Celaeno',
                              alt: 'Kelaino',
                              rank: '0',
                              desc:
                                'One of the starry Pleiad nymphs. She was loved by the god Poseidon.',
                            },
                            {
                              label: 'Maia',
                              i: 'maia',
                              rank: '0',
                              desc:
                                'A Pleiad star-nymph of Mount Cyllene in Arcadia. She was the mother of the god Hermes by Zeus.',
                            },
                            {
                              label: 'Merope',
                              rank: '0',
                              desc:
                                'One of the Pleiad star-nymphs, the wife of the impious Corinthian King Sisyphos. Blushing in shame for her husband"s crimes, her star shone only faintly.',
                            },
                            {
                              label: 'Sterope',
                              rank: '0',
                              desc:
                                'One of the starry Pleiad nymphs. She was loved by the god Ares.',
                            },
                            {
                              label: 'Taygete',
                              rank: '0',
                              desc:
                                'The starry Pleiad nymph of Mount Taygetus who was loved by Zeus. She was the ancestress of the kings of Sparta.',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      label: 'Plexaure',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis of the "weaving breeze" was likely one of the Aurai',
                    },
                    {
                      label: 'Plouto (Wealth)',
                      alt: 'Pluto',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis goddess of wealth was probably a Nephele of fertile rains, prospering the agricultural crop',
                    },
                    {
                      label: 'Polydora',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "many gifts" might have been the Nephele of generous downfalls',
                    },
                    {
                      label: 'Pronoia',
                      alt: 'Pronoea',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Nymphe named "foresight" was the wife of the Titan Prometheus. She was a goddess of the shrine of Delphoi, and probably the same as the Okeanis Hesione',
                    },
                    {
                      label: 'Prymno',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "root" or "undermost" was probably the Naias Nymphe of groundwater, or the waters of a deep well',
                    },
                    {
                      label: 'Psekas',
                      alt: 'Psecas',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "rain-shower" was a Nephele companion of the goddess Artemis',
                    },
                    {
                      label: 'Rhanis',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'An Okeanis named "rain-drop". She was one of the Nephelai attendants of the goddess Artemis',
                    },
                    {
                      label: 'Rhodeia (Rose-colour)',
                      shortlabel: 'Rhodeia',
                      alt: 'Rhode',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis named "of the roses" or "rose-coloured" was either an Anthousa flower-nymphe, Naias of a rose-draped spring, or Nephele of the rose-tinged clouds of dawn',
                      children: [
                        {
                          label: 'The 7 Heliadae',
                          rank: '0',
                          parents: 'Helios, Clymene, Rhode',
                          desc:
                            'The Heliadae were the seven sons of Helios, the sun god and the nymph Rhodus, daughter of Poseidon. The names of the seven sons were Ochimus, Cercaphus, Macareus ( or Macar), Actis, Tenages, Triopas, and Candalus. ',
                        },
                      ],
                    },
                    {
                      label: 'Rhodope',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "rosey-eyed" was probably either an Anthousa flower-nymphe of Nephele of the rose-coloured clouds of dawn. A Naiad nymph daughter of the Thracian river-god Strymon. When she and her husband Haemus impersonated Zeus and Hera, the angry gods transformed them into mountains.',
                    },
                    {
                      label: 'Styx (hate)',
                      alt: 'Pallas',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The goddess of the underworld river Styx, eldest of the Oceanids. She brought her children to side with Zeus in the Titan-War, and as reward he made her waters the inviolate oath of the gods.',
                      children: [
                        {
                          label: 'Bia',
                          rank: '0',
                          parents: 'Pallas, Styx',
                          desc:
                            'The goddess of force. She sided with Zeus in the Titan-War and became one of his chief attendants.',
                        },
                        {
                          label: 'Nike',
                          i: 'nike',
                          parents: 'Pallas, Styx',
                          rank: '0',
                          desc:
                            'The goddess of victory who sided with Zeus in the Titan-War and became his constant companion.',
                        },
                        {
                          label: 'Cratos',
                          rank: '0',
                          parents: 'Pallas, Styx',
                          desc: 'The personification of strength and power.',
                        },
                        {
                          label: 'Zelus',
                          alt: 'Zelos',
                          parents: 'Pallas, Styx',
                          rank: '0',
                          desc:
                            'The personification of rivalry. He and his three siblings were daemon attendants of the god Zeus.',
                        },
                      ],
                    },
                    {
                      label: 'Telesto (Success)',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis goddess of success and accomplishment. She was probably one of the Nephelai, an ethereal goddess',
                    },
                    {
                      label: 'Theiosa',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc: 'An Okeanis nurse of the infant Zeus in Arkadia',
                    },
                    {
                      label: 'Thoe',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis "swift" might have been a Naias, Nephele or Aura Nymphe',
                    },
                    {
                      label: 'Tykhe (Fortune)',
                      i: 'tykhe',
                      alt: 'Tyche',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'The Okeanis goddess of fortune or chance was probably one of the heavenly Nephelai',
                    },
                    {
                      label: 'Xanthe (Yellow-colour)',
                      rank: '0',
                      parents: 'Okeanus, Thetys',
                      desc:
                        'The Okeanis "yellow" or "yellow-brown" was probably either a Naias of a muddy flowing stream, or the Nephele of the yellowed clouds of dawn and dusk',
                    },
                    {
                      label: 'Zeuxos',
                      rank: '0',
                      parents: 'Okeanus, Tethys',
                      desc:
                        'An Okeanis named "the yoked" was probably a goddess of marriage, brides being yoked in marriage. She may have been a Naias or Nephele Nymphe, in the sense of a yoked or tamed horse',
                    },
                  ],
                },
                {
                  label: 'Potamoi',
                  rank: '0',
                  parents: 'Okeanus, Tethys',
                  desc:
                    'The River god sons of Oceanus. Each river had its own god. They were manlike from the chest upwards, but below were bodied with the serpentine tail of a fish.',
                  children: [
                    {
                      label: 'Aigaios (River of Skheria)',
                      alt: 'Aegaeus',
                      rank: '0',
                      desc:
                        'A river of Scheria (island of the Phaeacians) and its god.',
                    },
                    {
                      label: 'Aisepos (River of Troad)',
                      rank: '0',
                    },
                    {
                      label: 'Akheloios (River of Aitolia)',
                      i: 'akheloios',
                      alt: 'Achelous',
                      rank: '0',
                      desc:
                        'A river of Aetolia and its god. He wrestled Heracles for the hand of Deianeira but lost the contest and with it his horn.',
                    },
                    {
                      label: 'Alpheios (River of Arkadia and Elis)',
                      alt: 'Alpheius',
                      rank: '0',
                      desc:
                        'A river of Elis and its god. He fell in love with the nymph Arethusa and pursued her all the way to the island Ortygia. Artemis then transformed her into a spring to escape him but Alpheius guided his stream under the sea to Sicily so he could forever mingle his waters with hers.',
                    },
                    {
                      label: 'Amnisos (River of Krete)',
                      alt: 'Amnisus',
                      rank: '0',
                      desc: 'A river of Crete and its god.',
                    },
                    {
                      label: 'Anigros (River of Elis)',
                      alt: 'Anigrus',
                      rank: '0',
                      desc: 'A river of Elis and its god.',
                      children: [
                        {
                          label: 'The Anigrides',
                          rank: '0',
                        },
                      ],
                    },
                    {
                      label: 'Askanios (River of Mysia)',
                      alt: 'Ascanius',
                      rank: '0',
                      desc: 'A River of Mysia and its god.',
                    },
                    {
                      label: 'Asopos (River of Argos and Boiotia) (w/ Metope)',
                      shortlabel: 'Asopos',
                      alt: 'Asopus',
                      rank: '0',
                      desc:
                        'A river of Boeotia and Argos and its god. He had twenty beautiful daughters, most of whom were carried off by the gods. Asopus pursued Zeus when he abducted Aegina but was driven back by the god"s thunderbolts.',
                      children: [
                        {
                          label: 'Aigina',
                          i: 'aigina',
                          alt: 'Aegina',
                          rank: '0',
                          desc:
                            'A naiad daughter of the river Asopus. She was loved by Zeus who carried her off to the island of Aegina. When her father pursued them Zeus struck him with a thunderbolt.',
                        },
                        {
                          label: 'Salamis',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the river Asopus who was abducted to the island of the same name by the god Poseidon.',
                        },
                        {
                          label: 'Nemea',
                          rank: '0',
                          desc:
                            'The Naiad nymph of the town of Nemea. She was a daughter of either Zeus and Selene or the river Asopus.',
                        },
                        {
                          label: 'Harpina',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the river Asopus who was abducted to Elis by Ares.',
                        },
                        {
                          label: 'Thebe',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the river Asopus abducted to the town of Thebes by Zeus..',
                        },
                        {
                          label: 'Antiope',
                          rank: '0',
                        },
                        {
                          label: 'Plataia',
                          alt: 'Plataea',
                          rank: '0',
                          desc:
                            'The Naiad nymph of the Boeotian town of Plataea loved by Zeus. The god pretended to be taking her for his bride when Hera abandoned their marriage.',
                        },
                        {
                          label: 'Thespia',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the river Asopus. She was carried off to Boeotia by the god Apollo.',
                        },
                        {
                          label: 'Tanagra',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the river Asopus. The gods Ares and Hermes competed a boxing match to win her love.',
                        },
                        {
                          label: 'Oeroe',
                          rank: '0',
                        },
                        {
                          label: 'Euboia',
                          alt: 'Euboea',
                          rank: '0',
                          desc:
                            'A Naiad daughter of the river Asopus carried off by Poseidon to the island of Euboea.',
                        },
                        {
                          label: 'Korkyra',
                          alt: 'Corcyra',
                          rank: '0',
                          desc:
                            'A Naiad daughter of the river Asopus. She was loved by Poseidon who carried her off to the island of Corcyra.',
                        },
                        {
                          label: 'Sinope',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the river Asopus who was abducted tot he town of Sinope on the Black Sea by Apollo. She made him swear to respect her virginity.',
                        },
                        {
                          label: 'Peirene',
                          rank: '0',
                          desc:
                            'The weeping Naiad nymph of the fountain of the town of Corinth. She was loved by Poseidon.',
                        },
                        {
                          label: 'Kleone',
                          alt: 'Cleone',
                          rank: '0',
                          desc:
                            'The Naiad nymph of the town of Cleonae in Argos.',
                        },
                        {
                          label: 'Ismene',
                          i: 'ismene',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the River Asopus, and the wife of King Argus.',
                        },
                        {
                          label: 'Asopis',
                          rank: '0',
                          desc: 'A Naiad daughter of the river Asopus.',
                        },
                        {
                          label: 'Ornia',
                          rank: '0',
                        },
                        {
                          label: 'Khalkis',
                          alt: 'Chalcis',
                          rank: '0',
                          desc:
                            'A Naiad daughter of Asopus. The town of Chalcis in Euboea was named after her.',
                        },
                      ],
                    },
                    {
                      label: 'Asterion (River of Argos)',
                      rank: '0',
                      desc: 'A river of Mycenae and its god.',
                      children: [
                        {
                          label: 'Akraia',
                          alt: 'Acraea',
                          rank: '0',
                          desc:
                            'A naiad daughter of the river Asterion. With her sisters Euboea and Prosymna she nursed Hera as a child.',
                        },
                        {
                          label: 'Prosymna',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the river Asterion. She and her sisters Euboea and Acraea were nurses of the goddess Hera.',
                        },
                        {
                          label: 'Euboia',
                          alt: 'Euboea',
                          rank: '0',
                          desc:
                            'A Naiad daughter of the river Asopus carried off by Poseidon to the island of Euboea.',
                        },
                      ],
                    },
                    {
                      label: 'Axios (River of Paionia)',
                      alt: 'Axius',
                      rank: '0',
                      desc: 'A river of Paeonia and its god.',
                    },
                    {
                      label: 'Caanthus',
                      alt: 'Kaanthos',
                      rank: '0',
                      parents: 'Oceanus, Tethys',
                      desc:
                        'A River-god son of the Titan Oceanus who was slain by Apollo in their rivalry for the love of the Nymph Melia.',
                    },
                    {
                      label: 'Enipeus (River of Thessalia)',
                      rank: '0',
                    },
                    {
                      label: 'Erasinos (River of Argos)',
                      alt: 'Erasinus',
                      rank: '0',
                      desc: 'A river of Argos and its god.',
                      children: [
                        {
                          label: 'Ankhinoe',
                          alt: 'Anchinoe',
                          rank: '0',
                          desc: 'An Egyptian Naiad.',
                        },
                        {
                          label: 'Byze',
                          rank: '0',
                          desc:
                            'A Naiad daughter of the river Erasinus. With her sisters she was an attendant of Britomartis.',
                        },
                        {
                          label: 'Melite',
                          rank: '0',
                          desc:
                            'A Naiad nymph of the island of the Phaeacians. She was seduced by Heracles.',
                        },
                        {
                          label: 'Moira',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the river Erasinus who, with her sisters, was an attendant of the goddess Britomartis.',
                        },
                      ],
                    },
                    {
                      label: 'Eridanos (River of N. Europe)',
                      alt: 'Eridanus',
                      rank: '0',
                      desc: 'A river of northern Europe or Italy and its god.',
                    },
                    {
                      label: 'Erymanthos (River of Arkadia)',
                      rank: '0',
                    },
                    {
                      label: 'Euenos (River of Aitolia)',
                      alt: 'Evenus',
                      rank: '0',
                      desc: 'A river of Aetolia and its god.',
                    },
                    {
                      label: 'Eurotas (River of Lakonia)',
                      rank: '0',
                      desc:
                        'A river in Laconia and its god. He was the first King of Sparta.',
                    },
                    {
                      label: 'Grenikos (River of Troad)',
                      alt: 'Grenicus',
                      rank: '0',
                      desc: 'A river of Troy and its god.',
                      children: [
                        {
                          label: 'Alexirhoe',
                          alt: 'Alexiroe',
                          rank: '0',
                          desc:
                            'A naiad daughter of the river Grenicus of Troy.',
                        },
                        {
                          label: 'Pegasis',
                          rank: '0',
                          desc: 'A Trojan Naiad nymph.',
                        },
                      ],
                    },
                    {
                      label: 'Gyge (Lake of Lydia)',
                      alt: 'Gygaie',
                      rank: '0',
                      desc: 'A lake of Lydia and its god.',
                    },
                    {
                      label: 'Haliakmon (River of Makedonia)',
                      rank: '0',
                    },
                    {
                      label: 'Hebros (River of Thrake)',
                      alt: 'Hebrus',
                      rank: '0',
                      desc: 'A river of Thrace and its god.',
                    },
                    {
                      label: 'Heptaporos (River of Troad)',
                      rank: '0',
                    },
                    {
                      label: 'Hermos (River of Lydia)',
                      alt: 'Hermus',
                      rank: '0',
                      desc: 'A river of Lydia and its god.',
                    },
                    {
                      label: 'Hydaspes (River of India)',
                      rank: '0',
                      desc:
                        'An Indian River-God who fought and was defeated by Dionysus in the Indian Wars.',
                    },
                    {
                      label: 'Imbrasos (River of Samos)',
                      alt: 'Imbrasus',
                      rank: '0',
                      desc: 'A river of the island of Samos and its god.',
                    },
                    {
                      label: 'Ilissos (River of Attika)',
                      alt: 'Ilissus',
                      rank: '0',
                      desc: 'A river of Athens and its god.',
                      children: [
                        {
                          label: 'Pharmakeia',
                          alt: 'Pharmacea',
                          rank: '0',
                          desc:
                            'The Naiad nymph of a poisonous spring near the town of Athens.',
                        },
                      ],
                    },
                    {
                      label: 'Inakhos (River of Argos)',
                      alt: 'Inachus',
                      rank: '0',
                      desc:
                        'A river of Argos and its god. When Poseidon and Hera were contesting for dominion of Argos, he ruled in favour of Hera. Poseidon in anger caused his stream to run dry.',
                      children: [
                        {
                          label: 'Mykene',
                          alt: 'Mycene',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the river Inachus after whom the city of Mycenae was named.',
                        },
                        {
                          label: 'Kallithyia',
                          alt: 'Callithyia',
                          rank: '0',
                          desc:
                            'A Naiad daughter of the river Inachus who founded the ancient cult of Hera in Argos.',
                        },
                        {
                          label: 'Philodike',
                          alt: 'Philodice',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the river Inachus, the wife of a Messenian king.',
                        },
                        {
                          label: 'Io',
                          i: 'io',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the river Inachus. She was loved by Zeus who transformed her into a cow to hide her from the jealous gaze of Hera. The goddess was not fooled and sent a maddening gladfly to torment her. It drove her to wander all the way to Egypt, where she gave birth to Epaphus, ancestor of the Pharaohs.',
                        },
                        {
                          label: 'Amymone',
                          rank: '0',
                          desc:
                            'The Naiad of an Argive spring who was loved by the god Poseidon.',
                        },
                        {
                          label: 'Messeis',
                          rank: '0',
                          desc:
                            'The Naiad nymph of an Argive spring, a daughter of the River Inachus.',
                        },
                        {
                          label: 'Hypereia',
                          alt: 'Hyperia',
                          rank: '0',
                          desc:
                            'The Naiad nymph daughter of the River-god Inachus.',
                        },
                      ],
                    },
                    {
                      label: 'Inopos (River of Delos)',
                      rank: '0',
                    },
                    {
                      label: 'Ismenos (River of Boiotia)',
                      alt: 'Ismenus',
                      rank: '0',
                      desc: 'A River of Boeotia and its god.',
                      children: [
                        {
                          label: 'Dirke',
                          alt: 'Dirce',
                          rank: '0',
                          desc:
                            'The Naiad nymph of the sacred fountain of Dionysus on Mount Cithaeron.',
                        },
                        {
                          label: 'Strophia',
                          rank: '0',
                          desc:
                            'The Naiad nymph of a spring on Mount Cithaeron.',
                        },
                        {
                          label: 'Ismenis',
                          rank: '0',
                          desc:
                            'A Naiad daughter of the River Ismenos loved by the god Faunus.',
                        },
                      ],
                    },
                    {
                      label: 'Istros (River of Skythia)',
                      alt: 'Istrus',
                      rank: '0',
                      desc: 'A god of the river Danube in Scythia.',
                    },
                    {
                      label: 'Kaikos (River of Teuthrania)',
                      alt: 'Caecus',
                      rank: '0',
                      desc: 'A river of Teuthrania and its god.',
                      children: [
                        {
                          label: 'Okyrrhoe',
                          rank: '0',
                        },
                      ],
                    },
                    {
                      label: 'Kaystros (River of Lydia)',
                      alt: 'Caystera',
                      rank: '0',
                      desc: 'river of Lydia and its god.',
                    },
                    {
                      label: 'Kebren (River of Troad)',
                      alt: 'Cebren',
                      rank: '0',
                      desc: 'A river of Troy and its god.',
                      children: [
                        {
                          label: 'Oinone',
                          alt: 'Oenone',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the river Cebren of Troy. She was the first wife of Prince Paris who refused to heal him when he later returned to her seeking a cure for his mortal arrow-wound. She refused, and when he died she hung herself in remorse.',
                        },
                        {
                          label: 'Hesperia',
                          rank: '0',
                          desc: 'A naiad daughter of the river Cebren.',
                        },
                      ],
                    },
                    {
                      label: 'Kephissos (River of Phokis)',
                      rank: '0',
                      children: [
                        {
                          label: 'Lilaia',
                          alt: 'Lilaea',
                          rank: '0',
                          desc: 'A Naiad nymph daughter of the river Cephisus.',
                        },
                        {
                          label: 'Daulis',
                          rank: '0',
                          desc:
                            'A Naiad nymph after whom the Boeotian town of Daulis was named.',
                        },
                        {
                          label: 'Melaina',
                          rank: '0',
                        },
                        {
                          label: 'Thyia',
                          rank: '0',
                          desc:
                            'A Naiad nymph of Mount Parnassus loved by the god Apollo. She was the first to celebrate the orgies of Dionysus at Delphi.',
                        },
                        {
                          label: 'The Kephisides',
                          rank: '0',
                        },
                      ],
                    },
                    {
                      label: 'Kephissos (River of Attika)',
                      rank: '0',
                      children: [
                        {
                          label: 'Diogenia',
                          alt: 'Diogeneia',
                          rank: '0',
                          desc:
                            'A naiad daughter of the river Cephisus. She was the wife of an Athenian nobleman.',
                        },
                      ],
                    },
                    {
                      label: 'Khremetes (River of Libya)',
                      alt: 'Chremetes',
                      rank: '0',
                      desc: 'A river of Libya and its god.',
                      children: [
                        {
                          label: 'Ankhiroe',
                          alt: 'Anchiroe',
                          rank: '0',
                          desc: 'An Arcadian Naiad nymph.',
                        },
                      ],
                    },
                    {
                      label: 'Kladeos (River of Elis)',
                      rank: '0',
                    },
                    {
                      label: 'Kokytos (River of Hades)',
                      alt: 'Cocytus',
                      rank: '0',
                      desc: 'The underworld river of wailing and its god.',
                      children: [
                        {
                          label: 'The Kokythiai',
                          rank: '0',
                        },
                        {
                          label: 'Mintha',
                          alt: 'Minthe',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the underworld river-god Cocytus. She was transformed into a mint plant by Persephone when her affair with the god Hades was discovered.',
                        },
                      ],
                    },
                    {
                      label: 'Kydos (River of Kilikia)',
                      rank: '0',
                    },
                    {
                      label: 'Kytheros (River of Elis)',
                      alt: 'Cytherus',
                      rank: '0',
                      desc: 'A river of Elis and its god.',
                      children: [
                        {
                          label: 'The 4 Ionides',
                          rank: '0',
                        },
                      ],
                    },
                    {
                      label: 'Ladon (River of Arkadia)',
                      rank: '0',
                      desc:
                        'A hundred-headed dragon which guarded the golden apples of the Hesperides. It was slain by Heracles.',
                      children: [
                        {
                          label: 'Metope',
                          rank: '0',
                          desc:
                            'The Naiad nymph wife of the Argive river-god Asopus.',
                        },
                        {
                          label: 'Thelpousa',
                          alt: 'Thelpusa',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the Arcadian river Ladon.',
                        },
                        {
                          label: 'Themis',
                          i: 'themis',
                          rank: '0',
                          parents: 'Ouranos, Gaia',
                          desc:
                            'The Titan goddess of divine law, natural order and the oracles of the earth. She was the mother of the goddess Fates and Seasons by Zeus.',
                          children: [
                            {
                              label: 'Thriae',
                              rank: '0',
                              parents: 'Zeus, Themis',
                              desc:
                                'Lesser goddesses of nature who can foresee the future or foretell the unknown by inspiration, magic, signs, or omens.  The word Thriae means "pebbles," because the future was foretold by tossing pebbles',
                            },
                            {
                              label: 'The Horai',
                              i: 'horai',
                              parents: 'Zeus, Themis',
                              desc:
                                'The Horae (the Hours) are the goddesses of the seasons (the Greek had only three seasons; spring, summer and winter). They are called Thallo, Auxo and Carpo, names which denote budding, growth and ripening.  The twelve Horai, who were daughters of Helios, were not always clearly distinguishable from the three Horai of the seasons, who were also described as overseeing the paths of the sun.',
                              children: [
                                {
                                  label: 'Dike',
                                  i: 'dike',
                                  alt: 'Dice',
                                  rank: '0',
                                  parents: 'Zeus, Themis',
                                  desc:
                                    'The goddess of justice. She was one of the three Horae (Seasons)',
                                },
                                {
                                  label: 'Eirene',
                                  rank: '0',
                                  parents: 'Zeus, Themis',
                                  desc:
                                    'One of the three Horae, the goddess of peace and spring',
                                },
                                {
                                  label: 'Eunomia',
                                  rank: '0',
                                  parents: 'Zeus, Themis',
                                  desc:
                                    'The goddess of good order and spring pastures. She was one of the three Horae (Seasons) and an attendant of the goddess Aphrodite',
                                },
                              ],
                            },
                            {
                              label: 'Moirae (Fates)',
                              i: 'moirae',
                              alt: 'Moirai',
                              rank: '0',
                              parents: 'Zeus, Themis',
                              desc: 'The female deities who supervised fate',
                              children: [
                                {
                                  label: 'Atropos',
                                  alt: 'Atropus',
                                  rank: '0',
                                  parents: 'Zeus, Themis',
                                  desc:
                                    'Atropos was one of the three Moirae, the Fates, who cut the thread or web of life',
                                },
                                {
                                  label: 'Klotho',
                                  alt: 'Clotho',
                                  rank: '0',
                                  parents: 'Zeus, Themis',
                                  desc:
                                    'The youngest of the three Fates, who spins the thread of human life',
                                },
                                {
                                  label: 'Lakhesis',
                                  alt: 'Lachesis',
                                  rank: '0',
                                  parents: 'Zeus, Themis',
                                  desc:
                                    'One of the three Fates (Moirae), the :Disposer"; he measures the length of the thread of human life spun by Klotho and determines its destiny',
                                },
                              ],
                            },
                          ],
                        },
                        {
                          label: 'Syrinx',
                          rank: '0',
                          desc:
                            'A Naiad nymph chased by the god Pan. She fled his embrace and was transformed by her sisters into river reeds. The god crafted his famous pan-pipes from her plant.',
                        },
                      ],
                    },
                    {
                      label: 'Lamos (River of Phoinikia)',
                      rank: '0',
                      desc:
                        'A river of Cilicia or Mount Helicon in Boeotia and its god. He and his sons and daughters were nurses of the god Dionysus.',
                    },
                    {
                      label: 'Lethe (River of Hades)',
                      rank: '0',
                      desc: 'The female personification of forgetfulness.',
                    },
                    {
                      label: 'Maiandros (River of Karia)',
                      alt: 'Maeander',
                      rank: '0',
                      desc: 'A river of Caria and its god.',
                    },
                    {
                      label: 'Meles (River of Lydia)',
                      rank: '0',
                    },
                    {
                      label: 'Neilos (River of Aigyptos) (w/ Kallirrhoe)',
                      alt: 'Nile',
                      rank: '0',
                      desc: 'The river of Egypt and its god.',
                      children: [
                        {
                          label: 'Memphis',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the River Nile. She was the wife of the very first Egyptian king Epaphus, who named his capital after her.',
                        },
                        {
                          label: 'Ankhinoe',
                          alt: 'Anchinoe',
                          rank: '0',
                          desc: 'An Egyptian Naiad.',
                        },
                        {
                          label: 'Kaliadne',
                          alt: 'Caliadne',
                          rank: '0',
                          desc: 'An Egyptian Naiad.',
                        },
                        {
                          label: 'Polyxo',
                          rank: '0',
                          desc: 'An Egyptian naiad.',
                        },
                        {
                          label: 'Anippe',
                          rank: '0',
                          desc:
                            'A Naiad daughter of the River Nile loved by Poseidon.',
                        },
                        {
                          label: 'Khione',
                          alt: 'Chione',
                          rank: '0',
                          desc:
                            'The goddess or nymph of snow. She was a daughter of the winter-god Boreas loved by the god Poseidon.',
                        },
                      ],
                    },
                    {
                      label: 'Nestos (River of Thrake)',
                      rank: '0',
                    },
                    {
                      label: 'Paktolos (River of Lydia)',
                      rank: '0',
                    },
                    {
                      label: 'Parthenios (River of Paphlagonia)',
                      rank: '0',
                    },
                    {
                      label: 'Peneios (River of Thessalia) (w/ Kreusa)',
                      alt: 'Peneus',
                      rank: '0',
                      desc: 'A river of Thessaly and its god.',
                      children: [
                        {
                          label: 'The Thessalides',
                          rank: '0',
                        },
                        {
                          label: 'Daphne',
                          i: 'daphne',
                          rank: '0',
                          desc:
                            'A naiad daughter of the river Peneius. She was loved by the god Apollo who pursued her through the woods. As he was about to capture her she prayed to Gaea and was transformed into a laurel tree.',
                        },
                        {
                          label: 'Stilbe',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the Thessalian river Peneius loved by the god Apollo.',
                        },
                        {
                          label: 'Menippe',
                          rank: '0',
                          desc: 'A Naiad nymph daughter of the river Peneius.',
                        },
                        {
                          label: 'Hypseus',
                          rank: '0',
                          children: [
                            {
                              label: 'Kyrene',
                              alt: 'Cyrene',
                              rank: '0',
                              desc:
                                'A Naiad nymph huntress of Thessaly who was loved by the god Apollo. She bore him the rustic god Aristaeus.',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      label: 'Phasis (River of Kholkis)',
                      rank: '0',
                      desc: 'A river of Colchis and its god.',
                    },
                    {
                      label: 'Pitane',
                      rank: '0',
                      desc:
                        'A Naiad nymph daughter of the Spartan river Eurotas. She was loved by Poseidon.',
                    },
                    {
                      label: 'Pleistos (River of Phokis)',
                      alt: 'Pleistus',
                      rank: '0',
                      desc: 'A river of Phocis and its god.',
                      children: [
                        {
                          label: 'The Korykiai',
                          rank: '0',
                        },
                        {
                          label: 'Korykia',
                          alt: 'Corycia',
                          rank: '0',
                          desc:
                            'One of the Corycian nymphs of Delphi loved by the god Apollo.',
                        },
                      ],
                    },
                    {
                      label: 'Pyriphlegethon (River of Hades)',
                      rank: '0',
                      desc: 'The underworld river of fire and its god.',
                    },
                    {
                      label: 'Rhesos (River of Troad)',
                      rank: '0',
                    },
                    {
                      label: 'Rhodios (River of Troad)',
                      rank: '0',
                    },
                    {
                      label: 'Saggarios (River of Phrygia) (w/ Kybele )',
                      alt: 'Sangarius',
                      rank: '0',
                      desc: 'A river of Phrygia and its god.',
                    },
                    {
                      label: 'Simoeis (River of Troad)',
                      rank: '0',
                      desc: 'A river of Troy and its god.',
                      children: [
                        {
                          label: 'The Troiades',
                          rank: '0',
                        },
                        {
                          label: 'Astyokhe',
                          alt: 'Astyoche',
                          rank: '0',
                          desc:
                            'A Naiad daughter of the Trojan river Simoeis. She married a Trojan king.',
                        },
                        {
                          label: 'Hieromneme',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the river Simoeis, and wife of the Dardanian prince Assaracus.',
                        },
                      ],
                    },
                    {
                      label: 'Skamandros (River of Troad)',
                      alt: 'Scamander',
                      rank: '0',
                      desc:
                        'A river of Troy and its god. When he attempted to drown the hero Achilles in the Trojan War, Hephaestus scorched his streams with fire.',
                      children: [
                        {
                          label: 'The Troiades',
                          rank: '0',
                        },
                        {
                          label: 'Kallirhoe',
                          i: 'kallirhoe',
                          alt: 'Callirhoe',
                          rank: '0',
                          desc:
                            'An Oceanid wife of the giant Chrysaor. She begged her son Geryon not to battle Heracles.',
                        },
                        {
                          label: 'Strymo',
                          rank: '0',
                          desc:
                            'A Naiad nymph daughter of the Trojan river Scamander.',
                        },
                        {
                          label: 'Glaukia',
                          alt: 'Glaucia',
                          rank: '0',
                          desc:
                            'A Naiad daughter of the river Scamander. She was loved by a companion of Heracles.',
                        },
                      ],
                    },
                    {
                      label: 'Sparte',
                      alt: 'Sparta',
                      rank: '0',
                      desc:
                        'The Naiad nymph wife of Lacedaemon, the first King of Sparta.',
                    },
                    {
                      label: 'Sperkheios (River of Malis)',
                      alt: 'Spercheus',
                      rank: '0',
                      desc: 'A river of Malis and its god.',
                      children: [
                        {
                          label: 'The Sperkheides',
                          rank: '0',
                        },
                        {
                          label: 'Diopatre',
                          alt: 'Diopatra',
                          rank: '0',
                          desc:
                            'A Malian Naiad nymph loved by Poseidon. The god turned her sisters into poplars while he seduced her.',
                        },
                      ],
                    },
                    {
                      label: 'Strymon (River of Thrake) (w/ Neaera )',
                      rank: '0',
                      desc: 'A river of Thrace and its god.',
                      children: [
                        {
                          label: 'Euadne',
                          alt: 'Evadne',
                          rank: '0',
                          desc:
                            'A naiad daughter of the river Strymon married to Argus king of Argos.',
                        },
                        {
                          label: 'Rhodope',
                          rank: '0',
                          parents: 'Okeanus, Tethys',
                          desc:
                            'The Okeanis "rosey-eyed" was probably either an Anthousa flower-nymphe of Nephele of the rose-coloured clouds of dawn. A Naiad nymph daughter of the Thracian river-god Strymon. When she and her husband Haemus impersonated Zeus and Hera, the angry gods transformed them into mountains.',
                        },
                        {
                          label: 'Tereine',
                          rank: '0',
                          desc: 'A Thracian Naiad nymph loved by the god Ares.',
                        },
                      ],
                    },
                    {
                      label: 'Symaithos (River of Sikelia)',
                      alt: 'Symaethus',
                      rank: '0',
                      desc: 'A Sicilian river and its god.',
                    },
                    {
                      label: 'Termessos (River of Boiotia)',
                      rank: '0',
                      children: [
                        {
                          label: 'Aganippe',
                          rank: '0',
                          desc:
                            'A naiad daughter of the river Termessus. She was the nymph of a sacred spring of the Muses whose waters had the power of inspiration.',
                        },
                      ],
                    },
                    {
                      label: 'Tiasa',
                      rank: '0',
                      desc: 'The Naiad nymph of a Spartan stream.',
                    },
                  ],
                },
              ],
            },
            {
              label: 'Theia',
              alt: 'Thea',
              rank: '1',
              parents: 'Ouranos, Gaia',
              desc:
                'The Titan goddess of sight and clear blue skies. With her brother and husband, Hyperion, she was the mother of Helios (the Sun), Eos (the Moon), and Selene (the Dawn).',
              children: [
                {
                  label: 'Eos',
                  i: 'eos',
                  rank: '0',
                  parents: 'Hyperion, Theia',
                  desc:
                    'The Titan goddess of the dawn. She was cursed by Aphrodite with an insatiable appetite for men, loving one after another - Cephalus, Tithonus, Phaethon, Orion.',
                  children: [
                    {
                      label: 'Astraea',
                      alt: 'Astraia',
                      rank: '0',
                      desc:
                        'The younger Titan-goddess of justice. Astraea left the earth at the end of the Golden Age and entered the heavens as the constellation Virgo.',
                    },
                    {
                      label: 'Boreas',
                      i: 'boreas',
                      rank: '0',
                      parents: 'Astraeus, Eos',
                      desc:
                        'The purple-haired, winged god of the North-Wind. He was also the god of winter who carried snow on his chill breath.',
                    },
                    {
                      label: 'Eosphorus',
                      i: 'eosphoros',
                      alt: 'Eosphoros',
                      rank: '0',
                      parents: 'Aestraeus, Eos',
                      desc:
                        'The god of the morning star who heralded the arrival of dawn.',
                    },
                    {
                      label: 'Eurus',
                      alt: 'Euros',
                      rank: '0',
                      parents: 'Astraeus, Eos',
                      desc:
                        'The god of the East Wind (or more specifically the South-East Wind).',
                    },
                    {
                      label: 'Hesperus',
                      alt: 'Hesperos',
                      rank: '0',
                      parents: 'Aestraeus, Eos',
                      desc: 'The god of the evening star (Venus).',
                    },
                    {
                      label: 'Notus',
                      alt: 'Notos',
                      rank: '0',
                      parents: 'Astraeus, Eos',
                      desc: 'The god of the South Wind.',
                    },
                    {
                      label: 'Zephyrus',
                      i: 'zephyros',
                      alt: 'Zephyros',
                      rank: '0',
                      parents: 'Astraeus, Eos',
                      desc:
                        'The god of the gentle West-Wind and the season of spring.',
                    },
                  ],
                },
                {
                  label: 'Selene',
                  i: 'selene',
                  parents: 'Hyperion, Theia',
                  rank: '0',
                  desc:
                    'The goddess of the moon who rode through the sky at night in a chariot drawn by winged horses, or seated side-saddle on an ass. She fell in love with the young shepherd Endymion who was granted mmortality in a state of eternal sleep.',
                },
              ],
            },
            {
              label: 'Themis',
              i: 'themis',
              rank: '0',
              parents: 'Ouranos, Gaia',
              desc:
                'The Titan goddess of divine law, natural order and the oracles of the earth. She was the mother of the goddess Fates and Seasons by Zeus.',
              children: [
                {
                  label: 'Thriae',
                  rank: '0',
                  parents: 'Zeus, Themis',
                  desc:
                    'Lesser goddesses of nature who can foresee the future or foretell the unknown by inspiration, magic, signs, or omens.  The word Thriae means "pebbles," because the future was foretold by tossing pebbles',
                },
                {
                  label: 'The Horai',
                  i: 'horai',
                  parents: 'Zeus, Themis',
                  desc:
                    'The Horae (the Hours) are the goddesses of the seasons (the Greek had only three seasons; spring, summer and winter). They are called Thallo, Auxo and Carpo, names which denote budding, growth and ripening.  The twelve Horai, who were daughters of Helios, were not always clearly distinguishable from the three Horai of the seasons, who were also described as overseeing the paths of the sun.',
                  children: [
                    {
                      label: 'Dike',
                      i: 'dike',
                      alt: 'Dice',
                      rank: '0',
                      parents: 'Zeus, Themis',
                      desc:
                        'The goddess of justice. She was one of the three Horae (Seasons)',
                    },
                    {
                      label: 'Eirene',
                      rank: '0',
                      parents: 'Zeus, Themis',
                      desc:
                        'One of the three Horae, the goddess of peace and spring',
                    },
                    {
                      label: 'Eunomia',
                      rank: '0',
                      parents: 'Zeus, Themis',
                      desc:
                        'The goddess of good order and spring pastures. She was one of the three Horae (Seasons) and an attendant of the goddess Aphrodite',
                    },
                  ],
                },
                {
                  label: 'Moirae (Fates)',
                  i: 'moirae',
                  alt: 'Moirai',
                  rank: '0',
                  parents: 'Zeus, Themis',
                  desc: 'The female deities who supervised fate',
                  children: [
                    {
                      label: 'Atropos',
                      alt: 'Atropus',
                      rank: '0',
                      parents: 'Zeus, Themis',
                      desc:
                        'Atropos was one of the three Moirae, the Fates, who cut the thread or web of life',
                    },
                    {
                      label: 'Klotho',
                      alt: 'Clotho',
                      rank: '0',
                      parents: 'Zeus, Themis',
                      desc:
                        'The youngest of the three Fates, who spins the thread of human life',
                    },
                    {
                      label: 'Lakhesis',
                      alt: 'Lachesis',
                      rank: '0',
                      parents: 'Zeus, Themis',
                      desc:
                        'One of the three Fates (Moirae), the :Disposer"; he measures the length of the thread of human life spun by Klotho and determines its destiny',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Typhon',
          i: 'typhoeus',
          alt: 'Typhoeus',
          rank: '0',
          parents: 'Tartarus, Gaia',
          desc:
            'A monstrous storm-daemon with a hundred beastly heads, serpent legs and giant wings. He attempted to dethrone Zeus, and wrestled the god of his lightning bolts, tore out his sinews and locked him in a cave. The god was restored by his sons, and struck Typhone with his thunderbolts, imprisoning him in Tartarus or beneath the volcano Etna.',
        },
      ],
    },
    {
      label: 'Khronos (Time)',
      alt: 'Chronus',
      rank: '1',
      parents: 'None',
      desc:
        'The Protogenos (primeval god of time) whose serpentine form was entwined with that of Ananke, the goddess of necessity, at the beginning of time. Together they split open the world egg.',
    },
    {
      label: 'Nyx (Night)',
      rank: '1',
      desc:
        'The Protogenos (Primeval goddess) of night. She was the mother of Light and Day by the god Erebus (Darkness). Alone she spawned a host of spirits.',
      children: [
        {
          label: 'Aether ("Upper Air")',
          shortlabel: 'Aether',
          alt: 'Aither',
          rank: '1',
          parents: 'Erebus, Nyx',
          desc:
            'Protogenos of light, the bright upper air (the shining blue of the sky).  He was the Brother of Hemera (Day), with whom he gave birth to Thalassa, the sea',
          children: [
            {
              label: 'Thalassa',
              rank: '0',
              parents: 'Aether, Hemera',
              desc:
                'The Protogenos (primeval goddess) of the sea, the female counterpart to Pontos',
            },
          ],
        },
        {
          label: 'Charon ("fierce, bright-eyed")',
          shortlabel: 'Charon',
          i: 'kharon',
          alt: 'Kharon',
          rank: '0',
          parents: 'Erebos, Nyx',
          desc:
            'A daemon of the underworld who ferried the dead across the river Acheron',
        },
        {
          label: 'Daimones (spirits)',
          rank: '0',
          parents: 'Nyx alone',
          desc:
            'Moros, male daimon of Destiny; Thanatos, male daimon of peaceful death; and the Keres, female daimones of violent death',
          children: [
            {
              label: 'Apate',
              rank: '0',
              parents: 'Nyx alone.',
              desc:
                'The female daimon (Spirit) of deceit, guile, fraud and deception.  Her male counterpart was Dolos the daimon of trickery and wiles',
            },
            {
              label: 'Eris',
              i: 'eris',
              rank: '0',
              parents: 'Nyx alone.',
              desc:
                'The goddess of strife who haunted the battlefield. She indirectly caused the Trojan War by throwing the golden apple to the fairest amongst the goddesses.  One of the two Erites with Enyo, goddes of war.',
              children: [
                {
                  label: 'Algaea',
                  rank: '0',
                  parents: 'Eris alone',
                  desc: 'Personification of pains and sorrows',
                },
                {
                  label: 'Amphillogea',
                  rank: '0',
                  parents: 'Eris alone',
                  desc: 'Goddess of disputes',
                },
                {
                  label: 'Androctasia',
                  rank: '0',
                  parents: 'Eris alone',
                  desc: '"The Killer of Men"',
                },
                {
                  label: 'Ate',
                  rank: '0',
                  parents: 'Eris alone',
                  desc:
                    'The personification of error, delusion, ruin and blind folly. She led both the gods and men to rash and inconsiderate actions. Zeus threw her physically out of heaven.',
                },
                {
                  label: 'Dysnomia',
                  rank: '0',
                  parents: 'Eris alone',
                  desc: 'The female personification of lawlessness.',
                },
                {
                  label: 'Horcos',
                  rank: '0',
                  parents: 'Eris alone',
                  desc:
                    'Deity who most troubles men upon earth when anyone wilfully swears a false oath',
                },
                {
                  label: 'Lethe',
                  rank: '0',
                  parents: 'Eris alone',
                  desc: 'The female personification of forgetfulness.',
                },
                {
                  label: 'Limos',
                  rank: '0',
                  parents: 'Eris alone',
                  desc: 'The emaciated female personification of hunger.',
                },
                {
                  label: 'Malchai',
                  rank: '0',
                  parents: 'Eris alone',
                  desc: '"Battles"',
                },
                {
                  label: 'Neicea',
                  alt: 'Neikea',
                  rank: '0',
                  parents: 'Eris alone',
                  desc: 'The female personifications of grievance and quarrel.',
                },
                {
                  label: 'Phonos',
                  rank: '0',
                  parents: 'Eris alone',
                  desc: 'Deity of murders and slaughtering',
                },
                {
                  label: 'Ponos',
                  alt: 'Ponus',
                  rank: '0',
                  parents: 'Eris alone',
                  desc: 'The personification of hard labour.',
                },
                {
                  label: 'Pseudia',
                  alt: 'Pseudea',
                  rank: '0',
                  parents: 'Eris alone',
                  desc: 'Goddess of lies and falsehoods',
                },
                {
                  label: 'Usmine',
                  alt: 'Hysminai',
                  rank: '0',
                  parents: 'Eris alone',
                  desc: 'Goddess of fighting and combat',
                },
              ],
            },
            {
              label: 'Geras',
              i: 'geras',
              rank: '0',
              parents: 'Nyx alone.',
              desc: 'The male personifaction of old age.',
            },
            {
              label: 'Hypnos',
              i: 'hypnos',
              alt: 'Hypnus',
              rank: '0',
              parents: 'Nyx alone.',
              desc: 'The winged god of sleep.',
            },
            {
              label: 'Lyssa',
              i: 'lyssa',
              rank: '0',
              parents: 'Nyx alone.',
              desc:
                'The female daimon (Spirit) of rage (particularly martial rage), fury, raging madness, frenzy, and, in animals, the madness of rabies.',
            },
            {
              label: 'Momus',
              alt: 'Momos',
              rank: '0',
              desc:
                'The male daimon (Spirit) of mockery, blame, ridicule, scorn, complaint and stinging criticism.  He was thrown out of heaven by Zeus for his scarping criticisms of the gods',
            },
            {
              label: 'Moros',
              alt: 'Morus',
              rank: '0',
              parents: 'Nyx alone.',
              desc:
                'The male daimon (or Spirit) of doom. He was the force which drove a man to his fated death',
            },
            {
              label: 'Nemesis',
              i: 'nemesis',
              rank: '0',
              parents: 'Nyx alone; or Okeanus and Tethys',
              desc:
                'The Okeanis goddess of indignation and retribution for hybristic behaviour and undeserved good fortune. After being seduced by Zeus in the form of a swan, she lay the egg from which Helen was hatched. She a daughter of Nyx, but was also called a daughter of Nyx or Zeus.',
            },
            {
              label: 'Oizys',
              rank: '0',
              parents: 'Nyx alone.',
              desc: 'The female personification of pain',
            },
            {
              label: 'Oneiroi ',
              rank: '0',
              parents: 'Nyx alone',
              desc:
                'Spirits of dreams, whose leader, Morpheus, visited kings in their sleep in the guise of men bearing messages from the gods.  Morpheus was god of prophetic dreams, who appeared in the sleep of kings as a human shaped phantasm. His two brothers, Icelus and Phantasus, assumed the forms respectively of animals and inanimate objects',
            },
            {
              label: 'Philotes',
              rank: '0',
              parents: 'Nyx alone.',
              desc:
                'The female personification of affection, friendship and perhaps also sex.  Her opposite number were the Neikea (Feuds)',
            },
            {
              label: 'Thanatos',
              i: 'thanatos',
              rank: '0',
              parents: 'Nyx alone.',
              desc: 'The Daimon (Spirit) of non-violent death',
            },
          ],
        },
        {
          label: 'Hemera (Day)',
          shortlabel: 'Hemera',
          alt: 'Hemere',
          rank: '1',
          parents: 'Erebus, Nyx',
          desc:
            'The Protogenos (Primeval goddess) of day. She was the sister of Aether (Light), with whom she gave birth to Thalassa, the sea',
          children: [
            {
              label: 'Thalassa',
              rank: '0',
              parents: 'Aether, Hemera',
              desc:
                'The Protogenos (primeval goddess) of the sea, the female counterpart to Pontos',
            },
          ],
        },
        {
          label: 'Hesperides (Evening)',
          shortlabel: 'Hesperides',
          rank: '0',
          parents: 'Nyx alone.',
          desc:
            'The three goddesses of the evening and golden sunsets (Aigle, Erytheia, Hesperethoosa)',
          i: 'hesperides',
        },
        {
          label: 'The Keres',
          rank: '0',
          parents: 'Erebos, Nyx',
          desc:
            'Female spirits of death and doom who also act as avenging spirits',
        },
      ],
    },
    {
      label: 'Tartarus (Hell)',
      alt: 'Tartaros',
      rank: '1',
      parents: 'None',
      desc:
        'The Protogenos (primeval god) of the storm-wracked pit of Tartarus, which lay beneath the flat earth. His realm was the prison of the Titan gods. Tartarus fathered the monstrous storm-daemon Typhoeus.',
      children: [
        {
          label: 'Typhon',
          i: 'typhoeus',
          alt: 'Typhoeus',
          rank: '0',
          parents: 'Tartarus, Gaia',
          desc:
            'A monstrous storm-daemon with a hundred beastly heads, serpent legs and giant wings. He attempted to dethrone Zeus, and wrestled the god of his lightning bolts, tore out his sinews and locked him in a cave. The god was restored by his sons, and struck Typhone with his thunderbolts, imprisoning him in Tartarus or beneath the volcano Etna.',
        },
      ],
    },
  ],
});
