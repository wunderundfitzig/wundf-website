# wundf website frontend

This is a [next.js](https://nextjs.org/) page that calls a [cockpit](https://getcockpit.com/) backend.

## deploy

We use the export feature from [next.js](https://nextjs.org/)
to generate static html files
that are served from a simple apache server.

There is a lsimple webhook that calls `npm run export` every time
the content in the backend changes.

If you made changes to the code here ssh into `wfweb@wunderundfitzig.de`
and go to `~/frontend` and run:

```
git pull
npm install
npm run export
```
