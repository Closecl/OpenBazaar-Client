var Backbone = require('backbone');

/* use BCP 47 language tags as the key for each language http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry */

module.exports = Backbone.Model.extend({
  defaults: {
    languages: [
      {
        langName: "English",
        langCode: "en",
       /* Use capitalized keys for widely reused text that must be capitalized */
        Next: "Next",
        IAgree: "I Agree",
        Back: "Back",
        Skip: "Skip",
        Done: "Done",
        Cancel: "Cancel",
        Yes: "Yes",
        No: "No",
        of: "of",
        Sell: "Sell",
        New: "New",
        Excellent: "Excellent",
        Good: "Good",
        Poor: "Poor",
        SKU: "SKU",
        Refurbished: "Refurbished",
        Physical: "Physical",
        Digital: "Digital",
        Service: "Service",
        Visit: "View Page",
        Item: "Item",
        Items: "Items",
        Stores: "Stores",
        Follow: "Follow",
        Feed: "Feed",
        FeedPlaceholder: "A feed of updates from all the pages you follow",
        Unfollow: "Unfollow",
        About: "About",
        NoDescriptionAdded: "No description added",
        AboutEmpty: "About is blank...",
        Followers: "Followers",
        Following: "Following",
        Message: "Message",
        Store: "Store",
        Edit: "Edit",
        Used: "Used",
        Delete: "Delete",
        ConfirmDelete: "Confirm Delete",
        Website: "Website",
        Guid: "OpenBazaar ID (GUID)",
        Welcome: "Welcome",
        CreateStore: "Become a Store",
        GoToMyPage: "Go to my page",
        SearchForItemsPlaceholder: "Search by name or keyword",
        SearchForPagesPlaceholder: "Search by name or keyword",
        SearchFeedPlaceholder: "Search by handle or guid",
        SearchForFollowersPlaceholder: "Search by handle or guid",
        SearchForUsersPlaceholder: "Search by handle or guid",
        EstDeliveryDomesticPlaceholder: "3-5 Business Days",
        EstDeliveryInternationalPlaceholder: "7-15 Business Days",
        OrderProcessingTimePlaceholder: "1-2 Business Days",
        TermsAndConditionsPlaceholder: "Enter terms and conditions...",
        TitlePlaceholder: "Enter title",
        DescriptionPlaceholder: "Enter description...",
        ReturnPolicyPlaceholder: "Enter return policy...",
        CategoryPlaceholder: "Enter category",
        CategoryHelperText: "Categories are used to group and organize items within your store.",
        KeywordsHelperText: "Setting keywords helps your item to be discovered in the market.",
        ExpirationDateHelperText: "Set a date for the item to automatically be pulled from your store.",
        ClearExpirationDate: "Clear Expiration Date",
        ReturnPolicy: "Return Policy",
        TermsAndConditions: "Terms and Conditions",
        Photos: "Photos",
        Added: "Added",
        Categorization: "Categorization",
        Expiration: "Expiration",
        Search: "Search",
        Email: "Email",
        Facebook: "Facebook",
        Instagram: "Instagram",
        Twitter: "Twitter",
        Snapchat: "Snapchat",
        BUYNOW: "BUY NOW",
        Description: "Description",
        Reviews: "Reviews",
        Shipping: "Shipping",
        Returns: "Returns",
        ReturnsPolicy: "Returns Policy",
        Ampersand: "&",
        ShipsFrom: "Ships From",
        ShipsTo: "Ships To",
        Optional: "Optional",
        Customize: "Customize",
        Save: "Save",
        Changes: "Changes",
        SaveChanges: "Save Changes",
        YourName: "Your name",
        BitcoinReturnAddress: "Bitcoin return address",
        LocalCurrency: "Local currency",
        TimeZone: "Time zone",
        ShipToName: "Ship to name",
        ShipToStreet: "Ship to street",
        ShipToCity: "Ship to city",
        ShipToState: "Ship to state",
        ShipToPostalCode: "Ship to postal code",
        PostalCode: "Postal code",
        ShipToCountry: "Ship to country",
        EnableNotifications: "Enable notifications",
        EnableSSL: "Enable SSL",
        LibbitcoinServerAddress: "Libbitcoin server address",
        ServerIPPort: "Server IP:Port",
        All: "All",
        Name: "Name",
        Price: "Price",
        Available: "Available",
        Keywords: "Keywords",
        Type: "Type",
        Condition: "Condition",
        NSFW: "NSFW",
        Local: "Local",
        Domestic: "Domestic",
        Location: "Location",
        International: "International",
        Time: "Time",
        Free: "Free",
        Category: "Category",
        ProcessingTime: "Processing Time",
        UploadPhotos: "Upload photos",
        DragOrUploadPhotos: "Drag or upload photos",
        ExpirationDate: "Expires On",
        UploadCoverPhoto: "Upload a cover photo",
        ShortDescription: "Short Description",
        UpTo140Characters: "Up to 140 Characters",
        PrimaryColor: "Primary Color",
        SecondaryColor: "Secondary Color",
        TextColor: "Text Color",
        BackgroundColor: "Background Color",
        NotificationFollow: "is now following you",
        NoNotifications: "No notifications",
        WelcomeToYourPage: "Welcome to your page!",
        SearchForCategory: "Search for category",
        Moderators: "Moderators",
        Categories: "Categories",
        UpTo3: "Up to 3",
        AboutYourStore: "A description of your store",
        AllListings: "All Listings",
        ComingSoon: "Coming Soon",
        LoadingImage: "Loading Image...",
        UploadAvatar: "Upload Avatar",
        SaveAvatar: "Save Avatar",
        errorMessages: {
          saveError: "Data could not be saved.",
          getError: "Data could not be retrieved.",
          missingError: "Some fields are missing or incorrect.",
          serverError: "An incorrect reply was received from the server.",
          userError: "Information for this ID could not be found",
          userNotFoundError: "This person's information is not available. They may have gone offline.",
          notFoundError: "Data could not be loaded for:",
          socketError: "URL for WebSocket failed. Connecting to socket with default address of ws://localhost:18466"
        },
        saveMessages: {
          Saved: "Saved",
          SaveSuccess: "Your changes have been saved."
        },
        filters: {
          pagesAllTypes: "All types",
          pagesStores: "Stores",
          pagesMods: "Moderator services",
          pagesBasic: "Basic users",
          listingsCurated: "From stores I follow",
          listingsAll: "From all stores"
        },
        nav: {
          searchPlaceholder: "Enter handle or search",
          myPage: "My Page",
          customizePage:"Customize Page",
          sellItem:"New",
          createListing:"New Listing",
          purchases:"Purchases",
          sales:"Sales",
          cases:"Cases",
          notifications:"Notifications",
          settings:"Settings",
          about:"About OpenBazaar",
          support:"Support OpenBazaar"
        },
        onboarding: {
          intro: "OpenBazaar Configuration",
          theme: "Select a Theme for your Page",
          chooseLanguage: "Select Your Language",
          contributors: "%{smart_count} Contributor |||| %{smart_count} Contributors",
          configure: "Configure your experience",
          disclaimer_title: "Disclaimer",
          disclaimer_body: "OpenBazaar is a network for trading goods and services directly between people - using Bitcoin - without any central organization controlling the platform. This means you are responsible for your own activity on the network.<br /><br />OpenBazaar users are not anonymous by default. Most communications between parties are encrypted, but IP addresses are public and can be associated with activity on the network. Malicious parties could use this information against you; protecting your privacy is your own responsibility.<br /><br />OpenBazaar users must ahdere to the laws in their own legal jurisdiction as well as their conscience. The OpenBazaar developers do not condone - and are not responsible for - any use of the platform for illegal activity.<br /><br />The OpenBazaar community of developers has worked hard to deliver a free platform for trade to the world. But as with any software, bugs will be found. The developers are not responsible for any monetary loss associated with problems in the software.<br /><br />By using OpenBazaar you're responsible for your own actions on the OpenBazaar network.",
          yourCountry: "Select Your Country",
          localCurrency: "Select Your Currency",
          LanguagePlaceholder: "Search for language",
          CountryPlaceholder: "Search for country",
          CurrencyPlaceholder: "Search for currency",
          TimezonePlaceholder: "Search for time zone",
          timeZone: "Select Your Time Zone",
          yourDetails: "Set Your Information",
          handle: "Handle",
          knownAs: "You're currently known as:",
          wouldYou: "Would you like to register an easy to remember handle?",
          registerNew: "Register New",
          recommended: "Recommended Pages to Follow",
          connectExisting: "Connect Existing",
          avatar: "Set an Avatar",
          chooseAvatar: "Select Avatar"
        },
      },
      {
        langName: "Espa&ntilde;ol",
        langCode: "sp",
        Next: "Siguiente",
        IAgree: "Estoy de acuerdo",
        Back: "Atr&aacute;s",
        Skip: "Omitir",
        Done: "Hecho",
        Cancel: "Cancelar",
        Yes: "S&iacute;",
        No: "No",
        of: "de",
        Sell: "Vender",
        New: "Nuevo",
        Excellent: "Excelente",
        Good: "Bueno",
        Poor: "Deteriorado",
        SKU: "SKU",
        Refurbished: "Reformado",
        Physical: "F&iacute;sico",
        Digital: "Digital",
        Service: "Servicio",
        Visit: "Ver p&aacute;gina",
        Item: "Art&iacute;culo",
        Items: "Art&iacute;culos",
        Stores: "Tiendas",
        Follow: "Seguir",
        Feed: "Feed",
        FeedPlaceholder: "RSS próximamente",
        Unfollow: "Dejar de seguir",
        About: "Acerca de",
        NoDescriptionAdded: "No hay descripci&oacute;n a&ntilde;adida",
        AboutEmpty: "Acerca de la secci&oacute;n est&aacute; en blanco ...",
        Followers: "Seguidores",
        Following: "Siguiendo a",
        Message: "Mensaje",
        Store: "Tienda",
        Edit: "Editar",
        Used: "Usado",
        Delete: "Borrar",
        ConfirmDelete: "Confirmar eliminaci&oacute;n",
        Website: "Sitio Web",
        Guid: "OpenBazaar ID (GUID)",
        Welcome: "Bienvenida",
        CreateStore: "Crear Tienda",
        GoToMyPage: "Ir a mi p&aacute;gina",
        SearchForItemsPlaceholder: "B&uacute;squeda de art&iacute;culos",
        SearchForPagesPlaceholder: "B&uacute;squeda por palabra clave",
        SearchFeedPlaceholder: "B&uacute;squeda por nombre o apodo",
        SearchForFollowersPlaceholder: "B&uacute;squeda por nombre o apodo",
        SearchForUsersPlaceholder: "B&uacute;squeda por nombre o apodo",
        EstDeliveryDomestic: "3-5 d&iacute;s h&aacute;biles",
        EstDeliveryInternational: "7-15 d&iacute;s h&aacute;biles",
        TermsAndConditionsPlaceholder: "Introduzca T&eacute;rminos y condiciones...",
        TitlePlaceholder: "Introduzca t&iacute;tulo",
        DescriptionPlaceholder: "Introduzca descripci&ooacute;n",
        ReturnPolicyPlaceholder: "Introduzca pol&iacute;ticas de devoluciones",
        CategoryPlaceholder: "Introduzca categor&iacute;a",
        CategoryHelperText: "Las categor&iacute;as se utilizan para agrupar y organizar art&iacute;culos dentro de su tienda.",
        KeywordsHelperText: "Poner palabras claves ayuda a que sus art&iacute;culos sean encontrados en el mercado.",
        ExpirationDateHelperText : "Establecer una fecha para que el art&iacute;culo autom&aacute;ticamente ser&aacute; retirado de su tienda.",
        ClearExpirationDate : "Fecha de Vencimiento Clara",
        ReturnPolicy: "Pol&iacute;tica de devoluciones",
        TermsAndConditions: "T&eacute;rminos y Condiciones",
        Photos: "Fotos",
        Added: "Agregado",
        Categorization: "Categorizaci&oacute;n",
        Expiration: "Expiraci&oacute;n",
        Search: "Buscar",
        Email: "Correo electr&oacute;nico",
        Facebook: "Facebook",
        Instagram: "Instagram",
        Twitter: "Twitter",
        Snapchat: "Snapchat",
        BUYNOW: "COMPRA AHORA",
        Description: "Descripci&oacute;n",
        Reviews: "Cr&iacute;ticas",
        Shipping: "Env&iacute;o",
        Returns: "Devoluciones",
        ReturnsPolicy: "Pol&iacute;tica de devoluciones",
        Ampersand: "y",
        ShipsFrom: "Ships From",
        ShipsTo: "Realiza env&iacute;os a",
        Optional: "",
        Customize: "Personaliza",
        Save: "Guardar",
        Changes: "Cambios",
        All: "Todo",
        Name: "Nombre",
        Price: "Precio",
        Available: "Disponible",
        Keywords: "Palabras claves",
        Type: "Tipo",
        Condition: "Condici&oacute;n",
        NSFW: "NSFW",
        Local: "Local",
        Domestic: "Interno",
        Location: "Localizaci&oacute;n",
        International: "Internacional",
        Time: "Hora",
        Free: "Gratis",
        Category: "Categor&iacute;a",
        ProcessingTime: "Tiempo de procesamiento",
        UploadPhotos: "Subir fotos",
        DragOrUploadPhotos: "Arrastre o subir fotos",
        UploadCoverPhoto: "Sube una foto de portada",
        ExpirationDate: "Fecha de caducidad",
        ShortDescription: "Breve descripcion",
        UpTo140Characters: "Hasta 140 caracteres",
        PrimaryColor : "Color primario",
        SecondaryColor : "Color secundario",
        TextColor : "Color del texto",
        BackgroundColor : "Color de fondo",
        WelcomeToYourPage: "La bienvenida a su p&aacute;gina",
        SearchForCategory: "B&uacute;squeda de categor&iacute;a",
        Moderators: "Moderadores",
        Categories: "Categor&iacute;as",
        UpTo3: "Hasta 3",
        AboutYourStore: "Una descripci&oacute;n de su tienda",
        AllListings: "Todos los listados",
        ComingSoon: "Pr&oacute;ximamente",
        SaveChanges: "Guardar Cambios",
        YourNombre: "Su nombre",
        BitcoinReturnAddress: "Direcci&oacute;n de devoluciones Bitcoin",
        LocalCurrency: "Moneda local",
        TimeZone: "Zona horaria",
        ShipToName: "Env&iacute;r a nombre de",
        ShipToStreet: "Env&iacute;r a la calle",
        ShipToCity: "Env&iacute;r a la ciudad",
        ShipToState: "Env&iacute;r al estado",
        ShipToPostalCode: "Env&iacute;r al c&oacute;digo postal",
        PostalCode: "C&oacute;digo postal",
        ShipToCountry: "Env&iacute;r a pa&iacute;s",
        EnableNotifications: "Activar notificaciones",
        EnableSSL: "Habilitar SSL",
        LibbitcoinServerAddress: "Dirección del servidor Libbitcoin",
        ServerIPPort: "Server IP : Puerto",
        LoadingImage: "Cargando Imagen ... ",
        UploadAvatar: "Subir Avatar ",
        SaveAvatar: "Guardar Avatar ",
        errorMessages: {
          saveError: "Los datos no se pudieron guardar.",
          getError: "Los datos no se pudieron recuperar.",
          missingError: "Algunos campos faltan o est&aacute;n incorrectos.",
          serverError: "Una respuesta incorrecta se recibi&oacute; desde el servidor.",
          userError: "La informaci&oacute;n para este ID no se pudo encontrar",
          userNotFoundError: "La informaci&oacute;n de esta persona no est&aacute; disponible. Es posible que se hayan desconectado.",
          notFoundError: "Los datos no se pudieron cargar para:",
          socketError: "La URL del WebSocket fall&oacute;. Conectando a socket con la direcci&oacute;n por defecto de ws://localhost:18466"
        },
        saveMessages: {
          Saved: "Salvado",
          SaveSuccess: "Se han guardado los cambios."
        },
        filters: {
          pagesAllTypes: "Todos los tipos",
          pagesStores: "Tiendas",
          pagesMods: "Servicios de moderadores",
          pagesBasic: "Usuarios b&aacute;sicos",
          listingsCurated: "De tiendas que sigo",
          listingsAll: "De dodas las tiendas"
        },
        nav: {
          searchPlaceholder: "Introduzca un apodo o una palabra clave",
          myPage: "Mi p&aacute;gina",
          customizePage:"Personalizar P&aacute;gina",
          sellItem:"Nuevo",
          createListing:"Nuevo Listado",
          purchases:"Compras",
          sales:"Ventas",
          cases:"Casos",
          notifications:"Notificaciones",
          settings:"Ajustes",
          about:"Acerca de OpenBazaar",
          support:"Soporte OpenBazaar"
        },
        onboarding: {
          intro: "Personalice Su OpenBazaar",
          theme: "El tema de la p&aacute;gina",
          chooseLanguage: "Elige tu idioma",
          contributors: "%{smart_count} Colaboradores |||| %{smart_count} Colaboradores",
          configure: "Configure su Experiencia",
          disclaimer_title: "Nota Legal",
          disclaimer_body: "OpenBazaar es una red para el intercambio de bienes y servicios directamente entre la gente - utilizando Bitcoin - sin ninguna organizaci&oacute;n central que controle la plataforma. Esto quiere decir que eres responsable por tus propias actividades dentro de la red.<br /><br />Los usuarios de OpenBazaar NO SON ANONIMOS por defecto. La mayor&iacute;a de las comunicaciones entre las partes son encriptadas, pero las direcciones IP son p&uacute;blicas y pueden ser asociadas con la actividad en la red. Entes maliciosos pudieran utilizar esta informaci&oacute;n en tu contra; el proteger tu privacidad es tu propia responsabilidad.<br /><br >Los usuarios de OpenBazaar deben apegarse a las leyes de su propia jurisdicci&oacute;n legal tambi&eacute;n as&iacute; como tambien su conciencia. Los desarrolladores de OpenBazaar no condonan - y no son responsables de - ning&uacute;n uso de la plataforma para actividades ilegales.<br /><br />La comunidad de desarrolladores de OpenBazaar ha trabajado duro en entregar una plataforma libre para el comercio internacional. Pero como en todo software, errores ser&aacute;n encontrados. Los desarrolladores no son responsables por ninguna perdida monetaria asociada a los problemas con el software.<br /><br />Al utilizar OpenBazaar Ud. es responsable de sus propias acciones en la red OpenBazaar.",
          yourCountry: "Tu pa&iacute;s",
          localCurrency: "Moneda Local",
          LanguagePlaceholder: "Buscar por idioma",
          CountryPlaceholder: "Buscar por pa&iacute;s",
          CurrencyPlaceholder: "Buscar por moneda",
          TimezonePlaceholder: "Seleccione su zona horaria",
          timeZone: "Zona Horaria",
          yourDetails: "Establecer su informaci&oacute;n",
          handle: "Apodo",
          knownAs: "A Ud. se le conoce como:",
          wouldYou: "Desea registrar un apodo f&aacute;cil de recordar?",
          registerNew: "Registrar Nuevo",
          recommended: "P&aacute;ginas Recomendadas a Seguir",
          connectExisting: "Conectar Existente",
          avatar: "Establecer un Avatar",
          chooseAvatar: "Seleccione avatar"
        }
      },
      {
        langName: "German",
        langCode: "de",
        /* Use capitalized keys for widely reused text that must be capitalized */
        Next: "N&auml;chste",
        IAgree: "Ich akzeptiere",
        Back: "Zur&uuml;ck",
        Skip: "&Uuml;berspringen",
        Done: "Fertig",
        Cancel: "Abbrechen",
        Yes: "Ja",
        No: "Nein",
        of: "von",
        Sell: "Verkaufen",
        New: "Neu",
        Excellent: "Excellent",
        Good: "Gut",
        Poor: "Mangelhaft",
        SKU: "SKU",
        Refurbished: "&Uuml;berholt",
        Physical: "Physisch",
        Digital: "Digital",
        Service: "Dienstleistung",
        Item: "Gegenstand",
        Items: "Gegenst&auml;nde",
        Stores: "L&auml;den",
        Follow: "Folgen",
        Feed: "Feed",
        FeedPlaceholder: "A feed of updates from all the pages you follow",
        Unfollow: "Entfolgen",
        About: "&Uuml;ber",
        AboutEmpty: "'&Uuml;ber' ist leer...",
        Followers: "Followers",
        Following: "Folgt",
        Message: 'Nachricht',
        Store: "Store",
        Edit: "Editieren",
        Used: "Benutzt",
        Delete: "L&ouml;schen",
        ConfirmDelete: "L&ouml;schen Best&auml;tigen",
        Website: "Webseite",
        Guid: "OpenBazaar ID (GUID)",
        Welcome: "Willkommen",
        CreateStore: "Werde ein Verk&auml;ufer",
        GoToMyPage: "Zur eigenen Seite",
        SearchForItemsPlaceholder: "Nach Name oder Schlagwort suchen",
        SearchForPagesPlaceholder: "Nach Name oder Schlagwort suchen",
        SearchFeedPlaceholder: "Nach Name oder Handle suchen",
        SearchForFollowersPlaceholder: "Nach Name oder Handle suchen",
        SearchForUsersPlaceholder: "Nach Name oder Handle suchen",
        EstDeliveryDomesticPlaceholder: "3-5 Werktage",
        EstDeliveryInternationalPlaceholder: "7-15 Werktage",
        OrderProcessingTimePlaceholder: "1-2 Werktage",
        TermsAndConditionsPlaceholder: "Gesch&auml;ftsbedingungen eingeben...",
        TitlePlaceholder: "Titel eingeben",
        DescriptionPlaceholder: "Beschreibung eingeben...",
        ReturnPolicyPlaceholder: "R&uuml;ckgabebedingungen eingeben...",
        CategoryPlaceholder: "Kategorie eingeben",
        CategoryHelperText: "Kategorien werden benutzt um Gegenst&auml;nde in deinem Laden zu gruppieren und organisieren",
        KeywordsHelperText: "Stichw&ouml;rter zu setzen, hilft deinen Gegenstand im Markt zu finden.",
        ExpirationDateHelperText: "Setze ein Datum, an dem dein Gegenstand automatisch gel&ouml;scht werden soll.",
        ClearExpirationDate: "L&ouml;sche das Verfalldatum",
        ReturnPolicy: "R&uuml;cknahmebedingungen",
        TermsAndConditions: "Gesch&auml;ftsbedingungen",
        Photos: "Fotos",
        Added: "Hinzugef&uuml;gt",
        Categorization: "Kategorisierung",
        Expiration: "Verfall",
        Search: "Suchen",
        Email: "Email",
        Facebook: "Facebook",
        Instagram: "Instagram",
        Twitter: "Twitter",
        Snapchat: "Snapchat",
        BUYNOW: "JETZT KAUFEN",
        Description: "Beschreibung",
        Reviews: "Rezensionen",
        Shipping: "Versand",
        Returns: "R&uuml;ckgabe",
        ReturnsPolicy: "R&uuml;cknahmebedingungen",
        Ampersand: "&",
        ShipsFrom: "Versand von",
        ShipsTo: "Versand nach",
        Optional: "Optional",
        Customize: "Anpassen",
        Save: "Speichern",
        Changes: "&Auml;nderungen",
        SaveChanges: "&Auml;nderungen speichern",
        YourName: "Dein Name",
        BitcoinReturnAddress: "Bitcoin R&uuml;cksendeaddresse",
        LocalCurrency: "Lokale W&auml;hrung",
        TimeZone: "Zeitzone",
        ShipToName: "Versand an Name",
        ShipToStreet: "Versand nach Straße",
        ShipToCity: "Versand nach Stadt",
        ShipToState: "Versand nach Bundesland",
        ShipToPostalCode: "Versand nach Postleitzahl",
        PostalCode: "Postleitzahl",
        ShipToCountry: "Versand nach Land",
        EnableNotifications: "Benachrichtungen aktivieren",
        EnableSSL: "SSL aktivieren",
        LibbitcoinServerAddress: "Libbitcoin server addresse",
        ServerIPPort: "Server IP:Port",
        All: "Alle",
        Name: "Name",
        Price: "Preis",
        Available: "Verf&uuml;gbar",
        Keywords: "Schlagwort",
        Type: "Typ",
        Condition: "Beschaffenheit",
        NSFW: "NSFW",
        Local: "Lokal",
        Domestic: "Inland",
        Location: "Standort",
        International: "International",
        Time: "Zeit",
        Free: "Kostenlos",
        Category: "Kategorie",
        ProcessingTime: "Bearbeitungszeit",
        UploadPhotos: "Fotos hochladen",
        DragOrUploadPhotos: "Zieh oder load Fotos hoch",
        ExpirationDate: "L&auml;uft ab an ",
        UploadCoverPhoto: "Coverbild hochladen",
        ShortDescription: "Kurzbeschreibung",
        UpTo140Characters: "Bis zu 140 Zeichen",
        PrimaryColor: "Prim&auml;rfarbe",
        SecondaryColor: "Sekond&auml;rfarbe",
        TextColor: "Textfarbe",
        BackgroundColor: "Hintergrundfarbe",
        NotificationFollow: "folgt dir nun.",
        NoNotifications: "Keine Benachrichtigungen",
        SearchForCategory: "Nach Kategorie suchen",
        Moderators: "Moderator",
        Categories: "Kategorien",
        UpTo3: "Bis zu 3",
        AboutYourStore: "Eine Beschreibung deines Ladens",
        AllListings: "Alle Eintr&auml;ge",
        ComingSoon: "Demn&auml;chst verf&uuml;gbar",
        LoadingImage: "Bild wird geladen...",
        UploadAvatar: "Avatar hochladen",
        SaveAvatar: "Avatar speichern",
        errorMessages: {
          saveError: "Daten konnten nicht gespeichert werden.",
          getError: "Daten konnten nicht empfangen werden.",
          missingError: "Einige Felder fehlen oder sind fehlerhaft.",
          serverError: "Eine falsche R&uuml;ckmeldung wurde von dem Server empfangen.",
          userError: "Informationen f&uuml;r diese ID konnten nicht gefunden werden",
          userNotFoundError: "Die Informationen dieser Person sind nicht verf&uuml;gbar. M&ouml;glicherweise ist sie offline gegangen.",
          notFoundError: "Daten konnten nicht geladen werden f&uuml;r:",
          socketError: "URL f&uuml;r den Websocket ist fehlgschlagen. Verbindung mit der Standard-Addresse ws://localhost:18466 wird aufgebaut."
        },
        filters: {
          pagesAllTypes: "Alle Arten",
          pagesStores: "L&auml;den",
          pagesMods: "Moderator Services",
          pagesBasic: "Einfacher Benutzer",
          listingsCurated: "Von L&auml;den, welchen ich folge",
          listingsAll: "Von allen L&auml;den"
        },
        nav: {
          searchPlaceholder: "Handle eingeben oder suchen",
          myPage: "Meine Seite",
          customizePage:"Seite anpassen",
          sellItem:"Neu",
          createListing:"Neuer Eintrag",
          purchases:"Eink&auml;ufe",
          sales:"Verk&auml;ufe",
          cases:"F&auml;lle",
          notifications:"Benachrichtigungen",
          settings:"Einstellungen",
          about:"&Uuml;ber OpenBazaar",
          support:"OpenBazaar unterst&uuml;tzen"
        },
        onboarding: {
          intro: "OpenBazaar Konfiguration",
          theme: "W&auml;hle ein Theme f&uuml;r deine Seite",
          chooseLanguage: "W&auml;hle deine Sprache",
          contributors: "%{smart_count} Mitwirkeder |||| %{smart_count} Mitwirkende",
          configure: "Konfiguriere dein Erlebnis",
          disclaimer_title: "Ausschlussklausel",
          disclaimer_body: "OpenBazaar ist ein Netzwerk um Gegenst&auml;nde und Dienstleistungen zwischen Menschen zu handeln - mit Bitcoin - ohne eine zentrale Organisation, welche die Platform kontrolliert. Dies heißt, dass du verantwortlich f&uuml;r deine Aktivit&auml;t im Netzwerk bist.<br /><br />OpenBazaar Benutzer sind nicht automatisch anonym. Die meiste Kommunikation zwischen Teilnehmern ist verschl&uuml;sselt, aber IP Addressen sind &ouml;ffentlich und k&ouml;nnen mit Aktivit&auml;t auf dem Netzwerk verbunden werden. B&ouml;sartige Teilnehmer k&ouml;nnten diese Information gegen dich verwenden; deine Privatsp&auml;hre zu sch&uuml;tzen ist deine eigene Verantwortung.<br /><br />OpenBazaar Benutzer m&uuml;ssen das Gesetz sowie ihr eigenes Gewissen befolgen - und sind nicht verantwortlich f&uuml;r - jegliche Nutzung der Plattform f&uuml;r illegale Aktivit&auml;ten.<br /><br />Die OpenBazar Community von Entwicklern hat hart gearbeitet, um eine freie Plattform f&uuml;r Handel in der Welt zu schaffen. Aber so wie mit jeder Software, Bugs werden gefunden werden. Die Entwickler sind nicht verantwortlich f&uuml;r jeglichen finanziellen Verlust verbunden mit Problemen in der Software.<br /><br />Indem du OpenBazaar benutzt, bist du verantwortlich f&uuml;r deine Aktionen auf dem OpenBazaar Netzwerk.",
          yourCountry: "W&auml;hle dein Land",
          localCurrency: "W&auml;hle deine W&auml;hrung",
          LanguagePlaceholder: "Suche nach Sprache",
          CountryPlaceholder: "Suche nach Land",
          CurrencyPlaceholder: "Suche nach W&auml;hrung",
          TimezonePlaceholder: "Suche nach Zeitzone",
          timeZone: "W&auml;hle deine Zeitzone",
          yourDetails: "Setze deine Information",
          handle: "Handle",
          knownAs: "Du bist derzeit bekannt als:",
          wouldYou: "Willst du dir einen leicht zu merkenden Handle registrieren?",
          registerNew: "Neu registrieren",
          recommended: "Empfohlene Seiten zu Folgen",
          connectExisting: "Verbinde existierenden",
          avatar: "Setze einen Avatar",
          chooseAvatar: "W&auml;hle einen Avatar"
        }
      },
      {
        langName: "Italiano",
        langCode: "it",
       /* Use capitalized keys for widely reused text that must be capitalized */
        Next: "Avanti",
        IAgree: "Sono d'accordo",
        Back: "Indietro",
        Skip: "Salta",
        Done: "Finito",
        Cancel: "Annulla",
        Yes: "Si",
        No: "No",
        of: "di",
        Sell: "Vendere",
        New: "Nuovo",
        Excellent: "Eccellente",
        Good: "Buono",
        Poor: "Scarso",
        SKU: "SKU",
        Refurbished: "Ricondizionato",
        Physical: "Fisico",
        Digital: "Digitale",
        Service: "Servizio",
        Visit: "Visualizza pagina",
        Item: "Oggetto",
        Items: "Oggetti",
        Stores: "Negozi",
        Follow: "Segui",
        Feed: "Feed",
        FeedPlaceholder: "Un feed di aggiornamenti da tutte le pagine che segui",
        Unfollow: "Smetti di seguire",
        About: "About",
        NoDescriptionAdded: "Nessuna descrizione aggiunta",
        AboutEmpty: "L'about è vuoto...",
        Followers: "Seguaci",
        Following: "Segue",
        Message: "Messaggio",
        Store: "Negozio",
        Edit: "Modifica",
        Used: "Usato",
        Delete: "Cancella",
        ConfirmDelete: "Conferma cancellazione",
        Website: "Sito web",
        Guid: "OpenBazaar ID (GUID)",
        Welcome: "Benvenuto",
        CreateStore: "Diventa un negozio",
        GoToMyPage: "Vai alla mia pagina",
        SearchForItemsPlaceholder: "Cerca per nome o parola chiave",
        SearchForPagesPlaceholder: "Cerca per nome o parola chiave",
        SearchFeedPlaceholder: "Cerca per nickname o guid",
        SearchForFollowersPlaceholder: "Cerca per nickname o guid",
        SearchForUsersPlaceholder: "Cerca per nickname o guid",
        EstDeliveryDomesticPlaceholder: "3-5 giorni di lavoro",
        EstDeliveryInternationalPlaceholder: "7-15 giorni di lavoro",
        OrderProcessingTimePlaceholder: "1-2 giorni di lavoro",
        TermsAndConditionsPlaceholder: "Inserire termini e condizioni...",
        TitlePlaceholder: "Inserire titolo",
        DescriptionPlaceholder: "Inserire descrizione...",
        ReturnPolicyPlaceholder: "Inserire politiche di restituazione...",
        CategoryPlaceholder: "Inserire categoria",
        CategoryHelperText: "Le categorie sono usate per raggruppare e organizzare gli oggetti nel tuo negozio.",
        KeywordsHelperText: "Impostare delle parole chiave aiuta i tuoi oggetti ad essere trovari sul mercato.",
        ExpirationDateHelperText: "Imposta una data per l'oggetto per far si che venga tolto automaticamente dal tuo negozio.",
        ClearExpirationDate: "Cancella data di scadenza",
        ReturnPolicy: "Politica di restituzione",
        TermsAndConditions: "Termini e condizioni",
        Photos: "Foto",
        Added: "Aggiunto",
        Categorization: "Categorizzazione",
        Expiration: "Scadenza",
        Search: "Ricerca",
        Email: "Email",
        Facebook: "Facebook",
        Instagram: "Instagram",
        Twitter: "Twitter",
        Snapchat: "Snapchat",
        BUYNOW: "COMPRA ORA",
        Description: "Descrizione",
        Reviews: "Recensioni",
        Shipping: "Invio",
        Returns: "Restituzione",
        ReturnsPolicy: "Politica di restituzione",
        Ampersand: "&",
        ShipsFrom: "Inviato da",
        ShipsTo: "Inviato verso",
        Optional: "Facoltativo",
        Customize: "Personalizza",
        Save: "Salva",
        Changes: "Modifiche",
        SaveChanges: "Salva modifiche",
        YourName: "Tuo nome",
        BitcoinReturnAddress: "Bitcoin return address",
        LocalCurrency: "Moneta locale",
        TimeZone: "Fuso orario",
        ShipToName: "Invia a nominativo",
        ShipToStreet: "Invia all'indirizzo",
        ShipToCity: "Invia alla città",
        ShipToState: "Invia alla regione",
        ShipToPostalCode: "Invia al codice postale",
        PostalCode: "Codice postale",
        ShipToCountry: "Invia alla nazione",
        EnableNotifications: "Abilita notifiche",
        EnableSSL: "Abilita SSL",
        LibbitcoinServerAddress: "Indirizzo del server Libbitcoin",
        ServerIPPort: "Server IP:Port",
        All: "Tutti",
        Name: "Nome",
        Price: "Prezzo",
        Available: "Disponibile",
        Keywords: "Parole chiave",
        Type: "Tipo",
        Condition: "Condizione",
        NSFW: "NSFW",
        Local: "Locale",
        Domestic: "Nazionale",
        Location: "Locazione",
        International: "Internazionale",
        Time: "Tempo",
        Free: "Gratuito",
        Category: "Categoria",
        ProcessingTime: "Tempo di preparazione",
        UploadPhotos: "Caricare foto",
        DragOrUploadPhotos: "Trascina o carica foto",
        ExpirationDate: "Scadenza per il",
        UploadCoverPhoto: "Upload a cover photo",
        ShortDescription: "Breve descrizione",
        UpTo140Characters: "Fino a 140 caratteri",
        PrimaryColor: "Colore principale",
        SecondaryColor: "Colore secondario",
        TextColor: "Colore testo",
        BackgroundColor: "Colore di sfondo",
        NotificationFollow: "ora ti sta seguendo",
        NoNotifications: "Nessuna notifica",
        WelcomeToYourPage: "Benvenuto alla tua pagina!",
        SearchForCategory: "Cerca per categoria",
        Moderators: "Moderatori",
        Categories: "Categorie",
        UpTo3: "Fino a 3",
        AboutYourStore: "Una descrizione del tuo negozio",
        AllListings: "Tutti gli annunci",
        ComingSoon: "In arrivo",
        LoadingImage: "Caricamento immagine...",
        UploadAvatar: "Carica Avatar",
        SaveAvatar: "Salva Avatar",
        errorMessages: {
          saveError: "I dati non sono stati salvati.",
          getError: "I dati non sono stati recuperati.",
          missingError: "Alcuni campi sono mancanti o non corretti.",
          serverError: "E' stata ricevuta dal server una risposta non corretta.",
          userError: "Non è stato possibile trovare le informazioni di questo ID.",
          userNotFoundError: "Le informazioni di questa persona non sono disponibili. Potrebbero essere scollegati.",
          notFoundError: "I dati non sono stati caricati per:",
          socketError: "Connessione all'URL per WebSocket fallita. Connettere al socket con l'indirizzo di default ws://localhost:18466"
        },
        saveMessages: {
          Saved: "Salvato",
          SaveSuccess: "Le tue modifiche sono state salvate."
        },
        filters: {
          pagesAllTypes: "Tutti i tipi",
          pagesStores: "Negozi",
          pagesMods: "Servizi di moderazione",
          pagesBasic: "Utenti normali",
          listingsCurated: "Dai negozi che seguo",
          listingsAll: "Da tutti i negozi"
        },
        nav: {
          searchPlaceholder: "Inserisci nickname o cerca",
          myPage: "La mia pagina",
          customizePage:"Personalizza pagina",
          sellItem:"Nuovo",
          createListing:"Crea elenco",
          purchases:"Acquisti",
          sales:"Vendite",
          cases:"Cause",
          notifications:"Notifiche",
          settings:"Impostazioni",
          about:"About OpenBazaar",
          support:"Supporto OpenBazaar"
        },
        onboarding: {
          intro: "Configurazione OpenBazaar",
          theme: "Seleziona un Tema per la tua pagina",
          chooseLanguage: "Seleziona la tua lingua",
          contributors: "%{smart_count} Contributore |||| %{smart_count} Contributori",
          configure: "Imposta la tua esperienza",
          disclaimer_title: "Disclaimer",
          disclaimer_body: "OpenBazaar è un network per scambi di beni e servizi direttamente fra le persone - usando Bitcoin - senza nessuna organizzazione centrale che controlli la piattaforma. Questo significa che tu sei responsabile per le tue attività sul network.<br /><br />Gli utenti di OpenBazaar non sono anonimi di default. La maggior parte delle comunicazioni fra le parti sono cifrate, ma gli indirizzi IP sono pubblici e possono essere associati con le attività sul network. Parti malevole potrebbero utilizzare queste informazioni contro di voi; proteggere la tua privay è una tua responsabilità.<br /><br />Gli utenti di OpenBazaar devono rispettare le leggi nella propria giurisdizione legale così come la loro coscienza. Gli sviluppatori di OpenBazaar non perdonano - e non sono responsabili - per alcun uso illegale della piattaforma.<br /><br />La comunità deglo sviluppatori di OpenBazaar ha lavorato duramente per fornire una piattaforma libera per il commercio nel mondo. Ma come per ogni software, si troveranno bug. Gli sviluppatori non sono responsabili per alcuna perdita monetaria associata a problemi nel software.<br /><br />Usando OpenBazaar sei responsabile per le tue azioni sul network OpenBazaar.",
          yourCountry: "Seleziona il tuo paese",
          localCurrency: "Seleziona la tua moneta",
          LanguagePlaceholder: "Seleziona la tua lingua",
          CountryPlaceholder: "Cerca per paese",
          CurrencyPlaceholder: "Cerca per moneta",
          TimezonePlaceholder: "Cerca per fuso orario",
          timeZone: "Seleziona il tuo fuso orario",
          yourDetails: "Imposta le tue informazioni",
          handle: "Nickname",
          knownAs: "Sei conosciuto come:",
          wouldYou: "Ti andrebbe di registrare un nickname facile da ricordare?",
          registerNew: "Registra nuovo",
          recommended: "Pagine raccomandate di seguire",
          connectExisting: "Collega ad esistente",
          avatar: "Imposta un Avatar",
          chooseAvatar: "Seleziona Avatar"
        }
      }
    ]
  }
});
