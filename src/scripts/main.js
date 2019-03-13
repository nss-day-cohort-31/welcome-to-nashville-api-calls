const zomatoCall = () => {
  fetch(
    `https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating&q=${search_string}`,
    {
      headers: {
        Accept: "application/json",
        "user-key": [your_user_key]
      }
    }
  )
    .then(r => r.json())
    .then(results => console.log(results));
};

// zomatoCall();

const socrataCall = () => {
  fetch(
    `https://data.nashville.gov/resource/xbru-cfzi.json?${selected_value_from_drop_down}=Yes`
  )
    .then(r => r.json())
    .then(results => console.log(results));
};

// socrataCall();

const eventbriteCall = () => {
  fetch(
    `https://www.eventbriteapi.com/v3/events/search/?q=${search_string}&location.address=nashville&token=${your_token}`,
    {
      headers: {
        Accept: "application/json"
      }
    }
  )
    .then(r => r.json())
    .then(results => console.log(results));
};

// eventbriteCall();

const ticketmasterCall = () => {
  fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${your_api_key}&city=Nashville&countryCode=US&classificationName=${search_string}`
  )
    .then(r => r.json())
    .then(results => console.log(results));
};

// ticketmasterCall();
