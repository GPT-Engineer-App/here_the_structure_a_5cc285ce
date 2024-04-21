import { Box, Heading, Text, List, ListItem, Link, VStack } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function AboutUs() {
  return (
    <VStack spacing={8}>
      <Box as="header">
        <Link href="/" fontSize="2xl">ProBau</Link>
      </Box>
      <Box>
        <Heading>Erfahren Sie mehr über ProBau – Ihr Partner für Bauprojekte</Heading>
        <Text>Willkommen bei ProBau, der innovativen Plattform, die Bauvorhaben revolutioniert. Unsere Mission ist es, Bauherren und Fachleute aus der Baubranche zusammenzubringen, um jedes Bauprojekt effizient, transparent und erfolgreich zu gestalten.</Text>
      </Box>
      <Box>
        <Heading>Unsere Reise zur führenden Bau-Plattform</Heading>
        <Text>ProBau wurde 2023 gegründet mit dem Ziel, den Bauprozess für alle Beteiligten zu vereinfachen. Seitdem haben wir uns zu einer der vertrauenswürdigsten Plattformen in der Bauindustrie entwickelt, unterstützt durch ein starkes Netzwerk von qualifizierten Bauunternehmen und zufriedenen Kunden.</Text>
      </Box>
      <Box>
        <Heading>Unsere Mission: Effizienz und Qualität in jedem Bauprojekt</Heading>
        <Text>Bei ProBau steht die Kundenzufriedenheit im Mittelpunkt. Wir streben danach, die beste Matchmaking-Plattform für Bauprojekte zu sein, indem wir innovative Lösungen anbieten, die den gesamten Bauprozess von der Planung bis zur Fertigstellung optimieren.</Text>
      </Box>
      <Box>
        <Heading>Unsere Kernwerte: Transparenz, Vertrauen, Innovation</Heading>
        <List>
          <ListItem>Transparenz: Klare Kommunikation und offene Preisgestaltung</ListItem>
          <ListItem>Vertrauen: Geprüfte Bauunternehmen und echte Kundenbewertungen</ListItem>
          <ListItem>Innovation: Ständige Verbesserung unserer Plattform und Services</ListItem>
        </List>
      </Box>
      <Box>
        <Heading>Treffen Sie das Team hinter ProBau</Heading>
        <Text>Unser Team besteht aus leidenschaftlichen Experten aus den Bereichen Bauwesen, Technologie und Kundenservice. Gemeinsam arbeiten wir jeden Tag daran, ProBau zu verbessern und unsere Kunden bei der Verwirklichung ihrer Bauprojekte zu unterstützen.</Text>
      </Box>
      <Box>
        <Heading>Warum ProBau für Ihr nächstes Bauprojekt wählen?</Heading>
        <Text>Mit ProBau wählen Sie nicht nur eine Plattform, sondern einen Partner, der sich für die Erfüllung Ihrer Bauprojektziele einsetzt. Von der einfachen Projektplanung bis zur Auswahl des perfekten Bauunternehmens – ProBau steht Ihnen zur Seite.</Text>
      </Box>
      <Box as="footer">
        <Link href="#">Datenschutzrichtlinie</Link>
        <Link href="#">Impressum</Link>
        <Link href="#">Nutzungsbedingungen</Link>
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <Box>
          <Text>Newsletter-Anmeldung:</Text>
          <input type="email" placeholder="Ihre E-Mail-Adresse" />
        </Box>
      </Box>
    </VStack>
  );
}

export default AboutUs;