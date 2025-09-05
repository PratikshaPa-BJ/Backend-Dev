# Promise has typically 3 states

- Pending : not awaited and hence has not completed yet ( e.g. typically when you dont await an axios or db call)
- Rejected: When promise failed ( wrong url | server down etc)
- Fulfilled: Promise completed succesfully (e.g. db call has completed and returned a result succesfully)
  // - settled : referes to a combination of either rejected or fulfilled..

# What is a promise:

- layman's definition: It is something in JS that tells us whether an operation has completed or not (pending)
- technical definition: it is a JS object that represents whether an asynchronous operation(like db or axios call) is completed or not..

---

1.  Axios POST request assignment:-

    1.  Get all the memes at Postman (https://api.imgflip.com/get_memes)
    2.  Pick a memeId you want (Eg 129242436) for the POST request
    3.  Create a Post request (https://api.imgflip.com/caption_image) with only query params. Following are the params (copy username and password exactly as given below):
        template_id <meme_id>
        text0 <text you want as a caption>
        text1 <optional>
        username chewie12345
        password meme@123

    4.  Return a response with a body like this
        "data": {
        "url": "https://i.imgflip.com/5mvxax.jpg",
        "page_url": "https://imgflip.com/i/5mvxax"
        }
