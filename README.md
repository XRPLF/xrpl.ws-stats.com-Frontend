# XRPL.ws Stats Frontend [![Netlify Status](https://api.netlify.com/api/v1/badges/f38a7cb0-aa7e-4737-ba58-6b7f37c0db74/deploy-status)](https://app.netlify.com/sites/xrpl-ws-stats-frontend/deploys)

This repo is a frontend [ws-stats.com](https://ws-stats.com) to visualize the data generated from the [XRPL.ws](https://xrpl.ws) cluster. The JSON data used to power this page can be found at [xrpl.ws-stats.com](https://xrpl.ws-stats.com).

## To build this repo yourself
1. `# yarn`
2. `# yarn run build:dev`
3. Point your webserver to the  `dist` directory.

## Managing status messages
Status messages are shown at the top of the page in green/orange/red and are used to share the operational health of the XRPL.ws cluster.
* Green = success (operating as expected)
* Orange = partial service disruption (the vast majority of clients are not impacted)
* Red = cluster is non-operational (the cluster cannot process the majority of the requests it receives)

The JSON file that powers the status messages (current & past) is located in `src/assets/api/status-message.json`. There are two major sections to the file, `active` and `past`. The `active` section is intended to be used for current and upcoming events. The `past` section is intended to hold past messages in reverse-chronological order. The UI will only show the last four messages from the `past` section.

### Active section format
The `active` section is an array of objects. Each object has to contain a `status` (allowed values are `success`, `warn` or `fail`) and `title` property at a minimum. Optional properties are `subMessage` (the messsage shown below the main status message of each) and `date`. If a `date` property is specified (format `YYYY-MM-DDTHH:mm:ssZ`) and there is a `{date}` token in the `subMessage` string the token will be replaced with the date formatted is the user's timezone.

### Past section format
The `past` section is an array of objects. Each object has to contain a `status`, `title`, `start`, and `end` property. Both the `start` and `end` times should be specied in the format `YYYY-MM-DDTHH:mm:ssZ`.
