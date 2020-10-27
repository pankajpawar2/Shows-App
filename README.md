# Shows-App - Using Node.js, Express and Supertest

## This is a basic app, with following functionalities:

#### 1. From the list of shows in the request payload, returna the ones with DRM enabled (drm: true) and at least one episode (episodeCount > 0).

#### 2. The returned JSON has a response key with an array of shows. Each element has the following fields from the request:
       * image - corresponding to image/showImage from the request payload
       * slug
       * title

## Error Handling
If we send invalid JSON, the app returns a JSON response with HTTP status 400 Bad Request, and with a `error` key containing the string Could not decode request.
{
    "error": "Could not decode request: JSON parsing failed"
}
