# UI5 Flight App

This SAPUI5 application provides a simple interface for viewing and managing carriers, flights, and connections. It demonstrates how to:

- Display data in tables and lists.
- Navigate between multiple views (Carriers → Flights → Connections).
- Implement search and sort functionality.
- Add and delete data from the model.

## Features

- **Carriers Overview:**
  - Displays a list of carriers in a `sap.m.Table`.
  - Supports searching by Carrier ID or Name.
  - Provides buttons to sort carriers by ID or Name.
  - Allows adding a new carrier through a simple form.
  - Enables deleting carriers directly from the table.

- **Flights by Carrier:**
  - Selecting a carrier navigates to a Flights view that lists all flights for that carrier.

- **Connections by Flight:**
  - Selecting a flight navigates to a Connections view showing detailed connections related to that flight.

## Screenshots

**Carriers View:**
<img width="1476" alt="Screenshot 2024-12-17 at 15 19 55" src="https://github.com/user-attachments/assets/66f23328-e0b6-4ae0-a502-91c4bb44e23a" />


- Search and sorting options are available in the header.
- Each row is clickable to navigate to the corresponding flights.
- The "Add New Carrier" form below the table lets you input a new carrier’s details.
- The trash icon on the far right deletes a carrier.

**Flights View:**

<img width="1571" alt="Screenshot 2024-12-17 at 15 21 41" src="https://github.com/user-attachments/assets/3a9d8f1b-4ef8-40c6-a54d-b6e3221a4bf0" />

- Shows flights related to the previously selected carrier.
- Clicking on a flight navigates to the Connections view.

**Connections View:**
<img width="1560" alt="Screenshot 2024-12-17 at 15 21 47" src="https://github.com/user-attachments/assets/7c121f33-829b-4e36-a80b-2992cdce844b" />



- Displays details of connections related to the selected flight.

