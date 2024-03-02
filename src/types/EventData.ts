//NOT Automatically generated, must be updated manually from the associated Schema
//See: https://www.reddit.com/r/typescript/comments/vu33ut/help_with_creating_a_json_type_that_works_with/
//For more information

export type EventData = {
    /**
	 * The current event name.
	 */
	eventName: string;
	/**
	 * The Location the event is taking place.
	 */
	eventLocation: string;
	/**
	 * The current event number.
	 */
	eventNumber: number;
    /**
	 * The next event name.
	 */
	nextEventName: string;
	/**
	 * The Location the next event is taking place.
	 */
	nextEventLocation: string;
	/**
	 * The next event number.
	 */
	nextEventNumber: number;
    /**
	 * The next event date.
	 */
	nextEventDate: string;
	/**
	 * The list of Setup and Teardown volunteers helping with the event.
	 */
	setupTeam: string[];
	/**
	 * The list of Commentators helping with the event.
	 */
	commentaryTeam: string[];
	/**
	 * The list of SquidWest TOs and Staff.
	 */
	staffTeam: string[];
	/**
	 * The list of Event TOs for this event.
	 */
	eventTeam: string[];
}