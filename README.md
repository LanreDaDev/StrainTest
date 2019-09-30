# Strain Test

Web Business Essentials Class _Weed Strain Quiz_

With the on going legalization of weed in developed countries. We are seeing more strains with higher thc and cbd percentages. These days Indica and Sativa don't really mean much because most strains have some mixture of both. Take our Weed Strain Quiz to get the exact strain that would be ideal for your particular need.

To take the weed strain quiz you must first verify that you are of legal age {Link}

Understanding which strain is best for you doesnt have to be a trial and error activity. Save the time and money necessary to find the perfect strain. The Quiz has 3 categories, the first category focuses on the physical and mental effects you would want. The second category focuses on the Medical Effects you would want. While the third category focus on side effects you would like to avoid.

At the end of each category a strain will be recommended to you based each category and a location where you could buy the strain.

At the end of the quiz, our algorithm will attempt to find you a specific strain that meets all your needs. If the algorithm could not find your perfect strain, do not worry! we will keep an eye out for a perfect strain and send you an email when it becomes available.

## Algorithm for creating the personality test

- We get choice from "data-number" an html attribute of the choice on personality.html
- Make each choice correlate to a tag.
- There will be a strain.json file that contains all the strains and there info

```JSON
{
   "Strains": [

      {
         "id": "01",
         "Name": "King Kong",
         "pro": {
             "relaxed": 100,
             "happy": 84,
             "sleepy": 74,
             "uplifted": 68,
             "hungry": 63,
             "insomnia": 100,
             "pain": 47
         },
         "con": {
             "dryEyes": 100,
             "dry Mouth": 96,
             "headaches": 79,
             "paranoid": 68,
             "hungry": 63
         },
         "pointCounter":0

      },

           {
         "id": "02",
         "Name": "Ice Wreck",
         "pro": {
            "relaxed": 100,
             "happy": 84.678,
             "sleepy": 74.333,
             "uplifted": 68.423,
             "hungry": 63.332,
             "insomnia": 100,
             "pain": 47.23323
         },
         "con": {
            "dryEyes": 100,
             "dry Mouth": 96.32423,
             "headaches": 79.54646764,
             "paranoid": 68.3543645,
             "hungry": 63.534242
         },
         "pointCounter":0


      }

   ]
}
```

Each question choice would have one or more of the tags from the pro and con objects associated with it. Each strain would then be compared to each other based on their score on the tag. The first 5 strains with the highest number would be assign a score

```
1st : 10
2nd : 8
3rd : 6
4th : 4
5th : 2

```

The con section scoring high means the opposite when it comes to scoring.

```
1st : -10
2nd : -8
3rd : -6
4th : -4
5th : -2

```

If 2 strains have the same scores they both get a the same score.

At the end of either each section or of the quiz the strain with the highest in all the sections will be reccommended

Decided not to give answer in sections, it would be to much work for little utility. But will break the Questions down into questions for user experience purposes.

Considering adding two other properties into the json file. This property would contain an array of words that users have used to describe the strain. As with the earlier property they will be a pro and a con version and depending on with section they would be assigned either a +5 or a _-5_

Perhaps it would be a page with a list of effects, medical and negative word and the user will be told to pick a limited amount of words that correlate to the desired effect that they are looking for or trying to avoid.

### What a typical question object looks like

```JS
 {question: "What kind of high do you prefer?",
        choice1: "energetic & talkative",
        choice2: "Calm & Relaxing",
        choice3: "a healthy mix of the choice 1 and 2",
        choice4: "Therapeutic sort of high",
        tags: {
            hungry: 1,
            happy: 2,
            pain: 3,
            relaxed: 4
        },
        type: "general"
        }
```
