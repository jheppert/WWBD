var storyDatabase = {
        "pages":[
            {
                "ID":0,
                "end":false,
                "scene":"city",
                "bodyText":"<p>As he approached the forest for the first time, he heard some scuffling. It sounded like a fight.</p><p>He headed toward the sound and found three mean hawks trying to trap a fluffy little kitten. “That poor kitten!” Bib thinks, but realizes he has a choice.",
                "choiceLinks":[
                    {
                        "linkText":"Bib can continue on--this is not his fight after all!",
                        "linkDestination":2,
                        "linkIcon":"run"
                    },
                    {
                        "linkText":"Help the hawks, perhaps they're the controllers of this forest and can help Bib start his new life in the forest.",
                        "linkDestination":1,
                        "linkIcon":"help"
                    },
                    {
                        "linkText":"Attack the hawks! Bib loves kittens and these hawks aren't fighting fair!",
                        "linkDestination":3,
                        "linkIcon":"attack"
                    },
                    {
                        "linkText":"Wait and see if someone else will come in and break up the fight.",
                        "linkDestination":2,
                        "linkIcon":"wait"
                    }
                ]
            },
            {
                "ID":1,
                "end":false,
                "scene":"forest",
                "bodyText":"Bib tries to help the hawks capture the kitten, but the kitten dies in the process. The hawks start squawking back and forth to each other, one of them points a feather at Bib and manages to say, “murderer!”",
                "choiceLinks":[
                    {
                        "linkText":"Bib tries to explain himself. He was trying to help!",
                        "linkDestination":4,
                        "linkIcon":"explain"
                    },
                    {
                        "linkText":"Bib turns on the hawks and tries to take them down. They made him murder an adorable kitten!",
                        "linkDestination":6,
                        "linkIcon":"attack"
                    },
                    {
                        "linkText":"Bib runs away as fast as he can.",
                        "linkDestination":7,
                        "linkIcon":"run"
                    }
                ]
            },
            {
                "ID":2,
                "end":false,
                "scene":"forest",
                "bodyText":"Another group of hawks fly in and they draw their talons. They begin to squawk back and forth to each other, but Bib doesn't speak hawk! What should Bib do?",
                "choiceLinks":[
                    {
                        "linkText":"Bib tries to explain himself. He didn't do anything wrong!",
                        "linkDestination":4,
                        "linkIcon":"explain"
                    },
                    {
                        "linkText":"Attack those hawks too, damn it. Who the f*ck do they think they are?",
                        "linkDestination":6,
                        "linkIcon":"attack"
                    },
                    {
                        "linkText":"Run for your life!",
                        "linkDestination":7,
                        "linkIcon":"run"
                    }
                ]
            },
            {
                "ID":3,
                "end":false,
                "scene":"forest",
                "bodyText":"Bib and the kitten join forces and end up killing the hawks. The kitten is surprisingly deadly with his razor sharp claws and it frightens Bib a bit. Bib becomes suspicious.",
                "choiceLinks":[
                    {
                        "linkText":"Feeing threatened, Bib attacks the kitten.",
                        "linkDestination":5,
                        "linkIcon":"attack"
                    },
                    {
                        "linkText":"Bib leaves the area, keeping an eye on the kitten at all times.",
                        "linkDestination":7,
                        "linkIcon":"run"
                    },
                    {
                        "linkText":"Bib and the kitten scramble to hide the bodies, keeping an eye on one another.",
                        "linkDestination":8,
                        "linkIcon":"eye"
                    }
                ]
            },
            {
                "ID":4,
                "end":true,
                "scene":"beach",
                "bodyText":"The hawks don't understand robot and carry Bib off into the sky. They drop him into the ocean and he is never seen again."
            },
            {
                "ID":5,
                "end":true,
                "scene":"forest",
                "bodyText":"The kitten proves Bib's suspicions. He's too fierce and kills Bib with a single, sharp kitten claw. The kitten then becomes the ruler of the forest."
            },
            {
                "ID":6,
                "end":true,
                "scene":"forest",
                "bodyText":"Bib successfully scares away the hawks for good and becomes the new leader of the forest. He lives happily ever after in nature, respected and feared by all who live in the forest."
            },
            {
                "ID":7,
                "end":true,
                "scene":"beach",
                "bodyText":"Bib luckily escapes with his life, but he still can't bring himself to go back to city life. He continues on until he reaches the ocean. Though it's not the forest, Bib is happy to live out the rest of his life in nature, beach style."
            },
            {
                "ID":8,
                "end":true,
                "scene":"beach",
                "bodyText":"Once the bodies are taken care of, Bib and the kitten realize they make a pretty good team. They take off together, heading west until they reach the ocean. They live out the rest of their days as fugitives on the beach."
            }
        ]
}