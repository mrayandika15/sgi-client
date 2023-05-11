// Copyright 1999-2022. Plesk International GmbH. All rights reserved.

import { Layout } from "../layouts";
import {
  ExperienceSection,
  HomeSection,
  AboutSection,
  BusinessSection,
  ContactSection,
} from "../components/containers";
import { Box } from "@chakra-ui/react";
import { HEADER_IMG_NEW } from "../mock/image";

export default function Home() {
  return (
    <>
      <Layout documentTitle="SGI - Indonesia">
        <Box
          backgroundImage={HEADER_IMG_NEW}
          backgroundSize="cover"
          backgroundPosition="center center"
        >
          {/* Home Section */}
          <HomeSection />

          {/* About Section */}
          <AboutSection />
        </Box>

        {/* Business Section */}
        <BusinessSection />

        {/* Experience Section */}
        <ExperienceSection />

        {/* Contact Session */}
        <ContactSection />
      </Layout>
    </>
  );
}
