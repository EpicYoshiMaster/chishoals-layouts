# chishoals-layouts

This is a [NodeCG](http://github.com/nodecg/nodecg) bundle made for the Chi-Shoals Splatoon event, hosted by [SquidWest](https://twitter.com/SquidWest).

It includes starting soon and BRB screens, commentary lower thirds, an omnibar, intermission screens, a custom credits sequence, and a fully-featured dashboard.

The artwork for the commentary lower thirds was made by Xolo.

It works with NodeCG versions which satisfy this [semver](https://docs.npmjs.com/getting-started/semantic-versioning) range: `^2.0.0`
You will need to have an appropriate version of NodeCG installed to use it.

![Chi-Shoals Starting Soon](https://github.com/user-attachments/assets/84249ee2-6379-46c8-a509-5d23530b83f1)

![Chi-Shoals Between Matches](https://github.com/user-attachments/assets/4dd5331b-469f-410d-b9d8-1d579f6bcf14)

![Chi-Shoals Commentary](https://github.com/user-attachments/assets/3982ed79-d7cb-4048-977b-1c8e88958903)

![Chi-Shoals Credits](https://github.com/user-attachments/assets/ddc6a4bd-6bc7-492d-914d-e48eb03af2c7)

![Chi-Shoals Dashboard](https://github.com/user-attachments/assets/d78caec7-28de-47c4-91e2-a01b39dbd020)

## Developing

Use the following commands:

-   `npm run build`: Build the project once.
-   `npm run watch`: Build the project and automatically rebuild on changes.
-   `npm run dev`: Build the project, automatically rebuild on changes, launch the NodeCG server, and automatically restart the NodeCG server on changes.
    -   Only restarts the NodeCG server when server-side (i.e. extension) code changes. Changes to client-side code (i.e. dashboard panels and graphics) will not cause the server to restart, nor will they cause browser tabs to automatically refresh.


