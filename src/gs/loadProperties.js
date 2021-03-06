/**
 * Get userProperties for current users.
 * Get properties object from userProperties.
 * JSON.parse() and values that need parsing
 *
 * @return {object} properties JSON object with current user's properties
 */
function loadProperties() {
    var userProperties, properties, propertiesDoc;

    try {
        // Get properties from propertiesDoc.  FileID for propertiesDoc is saved in userProperties
        userProperties = PropertiesService.getUserProperties().getProperties(); // {object} properties for current user
        propertiesDoc = DocumentApp.openById(userProperties.propertiesDocId).getBody();
        properties = JSON.parse(propertiesDoc.getText());
    } catch (err) {
        throw err;
    }

    try {
        properties.map = JSON.parse(properties.map);
        properties.leftovers = JSON.parse(properties.leftovers);
        properties.remaining = JSON.parse(properties.remaining);
        properties.permissions = JSON.parse(properties.permissions);
    } catch (err) {
        throw err;
    }


    return properties;
}