# Tool for creating timelines, document tagging and explainer

## Technology

nodeJS backend, tailwind css front end

## Back End

All data should be held in a Cosmos DB in JSON, file structure should be:

File GUID > System Name > Document Name > Document Explainer > Document Comments > Document Match Date

This info will be sent off once a document is clicked from the side bar, and will have a pop up modal.

## Front End

A side bar menu will hold all available files scanned from Azure Blob Storage, upon clicking each one, a pop up modal will become visible, with Document Name, Document Explainer, Document Comments and Document Match Date as available inputs.

Once the above is filled in and saved, it should then fill in a timeline similar to this:

![image001 99](https://github.com/ojo-theaos/legaltimelinebonk/assets/172633960/8f0f94da-3322-42a2-8c54-21789bfa88bb)

