Q1 Get all the active users db.users.

[
  { //match to find the field matching for the given query
    $match: {
      isActive: true //automatically the pipeline executes
    }
  }, //first stage or pipeline
  {
    $count: 'active users' //this stage will count the ourput of first stage, consecutive stages uses the output of previous stage
  }
]

Q2 - What is the average age of the users
[
{
    $group: {
      _id: null, //grouping people (creating diff docs) based on gender or age, output - male and female, null gives all of the people in one document much more goot to find average
      averageAge:{
        $avg: "$age" //op -  29.835 operation hence using $ sign iguess
      } //generating a new field , if grouped according to gender then it gives avg age of both the groups
    }
  }
]

Q3 - List the top 5 most common favourite fruits among users

group them together and take out the count and list tope 5

[
  {
    $group: {
				_id: "$favoriteFruit", //only three docs 
      	count: {
          $sum: 1, //creating count field, this one is saying the moment you find any value related to banana or any other fruit in the respective docs just add 1 then
        }
    },
  },
  {
    $sort: {
      count : -1//we created the count field in prev pipeline, -1 ascending
    }
  },
  {
    $limit: 2 //getting out top 2 or limiting the value to 2
  }
]

Q4 - Find the total number of males and females

[{
  $group: {
    _id: "$gender",
    count: {
      $sum: 1 //sum is only used inside something like group which is kind of iterating over the doc
    }
    
  }
}]

Q5- WHich country has the highest number of registered users

[
  {
  $group: {
    _id: "$company.location.country",//but company itself is an object in databse
    userCount : {
      $sum: 1
    }
    }
    
  },
  {
    $sort: {
    userCount: -1 //field to be sorted 
  }
  },
  {
    $limit: 1
  }
]

Q6 - List all the unique eye colors present in the collection

[
  {
    $group:{ 
      _id: "$eyeColor",
    	
    }
  }
  
]

Q7 - What is the average number of tags per user

tags is stored as an array of varying size in database

[
  {   //seperating out the array
  $unwind: "$tags" //it creates seperate docs according the elements in the array
  		 //prints 10 docs with one one value in tag field
  		
  },
  {
    $group: {
      _id: "$_id",
      numberofTags: {
        $sum: 1
      }
      
    },
    
  },
//   {
//     //grouping all in one doc
//     $group: {
// _id: null,
//       averageNumberofTags: {
//         $avg: "$numberofTags"
//       }
//     }
//   }
  
]

OR

[
  {
    $addFields: {
      numberofTags: {
        $size: {$ifNull: ["$tags", []]} //check for if the tag array is empty
      }
    }
  },
  {
    $group: {
      _id: null,
      averageNumberOfTags: {
        $avg: "$numberofTags"
}
    }
  }
  
]

Q8- How many users have 'enim' as one of their tags

//using Filteration - $match

A pipeline stage specification object must contain exactly one field.   
[
  {
    $match: {
      tags: "enim"//looking for enim in the tags
      
    }
  },{
    $count: "userWithEnimtag"
  }
  
]

Q9 - What are the names and age of the user who are inactive and has velit as a tag

it wants names and age of users , hmm

[
  {
    $match: {
      isActive: false,
      tags: "velit",
    },
  },
  {
    //passes along the documents with the requested field to next stage in pipeline , it could be exist in doc or could be newly created one
    $project: {
				name: 1, //name of the field you want and put 1 
      	age: 1
    }
  }
]

Q10 - How many users have phone number starting with '+1 (940)'

[
  {
    $match: {
			"company.phone": /^\+1 \(940\)/ //writing regex , can use chat gpt to match the certain pattern //accessing object with inverted commas
    }
  },
  {
    $count: "UsersWithSpecialPhoneno"
  }
]

Q11- who has registered most recently? get four users recently registered,

sort entire collection 

[
  {
    $sort: {
      registered: -1
    }
  },
  {
    $limit: 4
  },
  {
    $project: {
			name: 1,
      registered: 1,
      favoriteFruit: 1
    }
  }
]

Q12 - Categorize users by their favorite fruit

[
  {
    $group: {
      _id: "$favoriteFruit",
      users: {
        $push: "$name" //it makes an array of all the name with their favorite fruit
      }
    }
  }
]

Q13 - How many users have 'ad' as the second tag in their list of tags


[
  {
    $match: {
      "tags.1": "ad" //accessing first position of array
    }
  },
  {
    $count: "docnumber"
  }
]

Q14 - Find users who have both"enim" and 'id' as theie tag

[
  {
    //all operator selects the document where the value of field is an array that contains all of the specified elements
    $match:{
      tags: "enim"
    			
        }
    
  },
  {
    $match: {
      tags: "id"
    }
  },

  {
    $count: "numberofsuchusers"
  }
] 

ORRRRRRRRRRRRRR

[
  {
    //all operator selects the document where the value of field is an array that contains all of the specified elements
    $match:{
      tags: {$all: ["enim", "id"]}
    			
        }
    
  },
  {
    $count: "number"
  }
  
]

Q14 - List all the companies located in the USA with their corresponding user count

  [
    {
      $match: {
        "company.location.country": "USA" // accessing object in inverted commas
        
      }
    },
    {
      $group: {
        _id: "$company.title",
        userCount: {
          $sum: 1 //sum and push are accumulators,  grouping them acc to company titles
        }
        
      }
    }
      
    ]

    Q15 - //lookup , to perform some join 
//can also export from the code in any language to run in vs code or stg or to incorporate in project 


[

  {
    $lookup: {
      from: "authors", //from which collection to lookup the data
      localField: "author_id", //current field of lookup field
      foreignField: "_id", //where this field exactly match
      as: "author_details" // what do you want to call the result as
    }
  },
  {
    $addFields: {
				author_details: {
          // $first: "$author_details" //it can go through any array and grab its first value, and the array contains only one value from prev pipeline
        $arrayElemAt: ["$author_details", 0] //alternative mostly used which element you want to access = 0
        }
    }
  }
]