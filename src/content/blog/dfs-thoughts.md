---
title: "Depth First Search Mindset & Learning"
description: "in the way of learning a thing leads to learn bunch of other things"
pubDate: "Sept 23 2023"
heroImage: "/blogs/dfs/cover.jpg"
---

## TL;DR
> in the way of learning a thing leads to learn bunch of other things.

# It was Weekend

I was curious about my CSS skills and wanted to test myself. so I went to the ***[front-end mentor](https://www.frontendmentor.io/home)*** website and picked up a QR code design challenge. [Link to my solution](https://varaprasadh.github.io/FM-QR-Code/)


After doing the challenge, it says put the git repo URL and live preview URL and I decided to use GitHub pages to deploy this static design page.

GitHub actions have been set up on the repo. and it's failing to deploy for some reason. I re-tried a couple of times and went to the internet to see if there was any solution.
and the first link which popped up was someone who had already opened a thread with the exact issue. and a bunch of people reporting and I did my part too. [link to github thread](https://github.com/orgs/community/discussions/67961)

![github thread](/blogs/dfs/github_thread.jpg)

And got to know that I'm not the only one. now the people in the thread are going crazy and waiting for a fix from GitHub (it's fixed now)

And then I randomly clicked on someone's dp and it opened up in the new tab. I see an integer as a path param to refer to the resource ID for the image in the URL (https://avatars.githubusercontent.com/u/1) and end up writing a script to download 15000 user profile pics and the resource ID is sequential, we can just iterate. 

```javascript
const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function fetchAndSaveImage(index) {
    const imageUrl = `https://avatars.githubusercontent.com/u/${index}`;
    const outputPath = path.join(__dirname, 'pictures', `image-${index}.jpg`);
  try {
    const response = await axios.get(imageUrl, { responseType: 'stream' });
    const writer = fs.createWriteStream(outputPath);
    response.data.pipe(writer);
    await new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
    console.log('Image downloaded and saved successfully to:', outputPath);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

for (let i = 1; i <= 92420867; i+=1) {
    fetchAndSaveImage(i);
}
```
And ended up scraping github profile pictures of 15000 accounts.

![github avatars](/blogs/dfs/github_avatars.jpeg)

and next thought was that we should not be using sequential IDs for data security when the data is crucial. in this case, GitHub profile pictures may not be private. if we use UUIDs, we cannot iterate over and access resources randomly unless we have a reference to the actual resource.

If you would like know more about UUID ***[See this Wiki](https://en.wikipedia.org/wiki/Universally_unique_identifier)***

![unique key meme](/blogs/dfs/unique_meme.jpeg)

## Thank you reading ❤️
