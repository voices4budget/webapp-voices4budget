# Voices4Budget

Voices4Budget is a digital empowerment initiative, supported by Accountability Lab and Development Gateway. This project is currently piloted in Nupabomba Village, Indonesia, and Ban Jamrung, Thailand. The program is designed to advance transparency and accountability in the management of village funds by offering accessible budgetary information, encouraging active community engagement, reinforcing oversight mechanisms, and enhancing digital literacy. By implementing these measures, Voices4Budget aims to ensure the efficient and equitable utilization of village resources, thereby promoting sustainable development and improving the quality of life within local communities.

## Installation

To install and run Voices4Budget locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Create a `.env` file**:
   Adjust the necessary environment variables, especially the database configuration.

3. **Install dependencies**:
   ```bash
   composer install
   ```

4. **Run migrations**:
   ```bash
   php artisan october:migrate
   ```

## Usage

1. **Login as Administrator**: Use your admin credentials to access the back office.
2. **Set Up Locations**: Add details such as countries, area types, areas, and stakeholders.
3. **Create Voting Sessions**: Set up voting sessions along with categories, subcategories, and programs.
4. **Set up Google OAuth 2.0**: 
   - Create a project in the Google API Console and create OAuth 2.0 credentials.
   - Copy and paste the Google OAuth 2.0 client ID to the Backoffice -> Settings -> Voices4Budget Content Settings -> Miscellaneous -> Google OAuth 2.0 Client ID.

## Technologies Used

- **Platform**: October CMS v3
- **UI Framework**: Bootstrap 5.3

## License

Voices4Budget is free to use; however, it is built on top of October CMS, which is a paid platform. You will need a valid license for October CMS to use the full features of this application. For more information, visit [October CMS](https://octobercms.com/).

## Contributing

We welcome contributions! Please follow these guidelines:

- Fork the repository.
- Create a new branch for your feature or bugfix.
- Submit a pull request with a detailed description of your changes.

## Authors

Team Voices4Budget  
Contact: [admin@voices4budget.org](mailto:admin@voices4budget.org)

## Future Enhancements

- Improve country selection functionality for better user experience.
- Handle the fraud better by preventing people from outside the voting area to log in and vote

## Acknowledgements

- [AccountabilityLab](https://accountabilitylab.org/)
- [Development Gateway](https://developmentgateway.org/)