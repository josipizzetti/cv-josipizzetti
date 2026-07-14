import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

// Import your data and avatar image
import { EXPERIENCE, SKILLS, LEADERSHIP_EXPERIENCE, EDUCATION } from '../constants';
import avatarImage from '@/assets/josi.jpg';

// PDF styles - clean and professional layout
const styles = StyleSheet.create({
  // Main page container
  page: {
    padding: 40,
    backgroundColor: '#ffffff',
  },

  // ===== HEADER =====
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid #000',
    paddingBottom: 12,
    marginBottom: 24, // Increased spacing after header
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    flex: 1,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    objectFit: 'cover',
  },
  nameContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18, // Reduced from 28
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  title: {
    fontSize: 10, // Reduced from 12
    color: '#666',
    marginTop: 2,
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  headerRight: {
    fontSize: 8,
    color: '#666',
    textAlign: 'right',
    lineHeight: 1.5,
  },

  // ===== SECTIONS =====
  section: {
    marginBottom: 8, // Increased spacing between sections
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
    borderBottom: '1px solid #e0e0e0',
    paddingBottom: 4,
    marginBottom: 8,
  },

  // ===== ABOUT =====
  aboutText: {
    fontSize: 8.5,
    lineHeight: 1.5,
    color: '#333',
    marginBottom: 3,
  },

  // ===== EXPERIENCE =====
  experienceItem: {
    marginBottom: 12, // Increased spacing between experience items
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  role: {
    fontSize: 9.5,
    fontWeight: 'bold',
  },
  company: {
    fontSize: 8.5,
    color: '#666',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  period: {
    fontSize: 8,
    color: '#999',
  },
  location: {
    fontSize: 8,
    color: '#999',
  },
  experienceDesc: {
    fontSize: 8,
    lineHeight: 1.4,
    color: '#444',
    marginTop: 8,
    alignment: 'justify',
    marginBottom: 8,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
    gap: 4,
  },
  tag: {
    fontSize: 7,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 2,
    color: '#666',
  },

  // ===== SKILLS =====
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 16,
  },
  skillBadge: {
    fontSize: 8,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 2,
    color: '#333',
  },

  // ===== EDUCATION =====
  educationItem: {
    marginBottom: 10, // Increased spacing between education items
  },
  educationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  degree: {
    fontSize: 9.5,
    fontWeight: 'bold',
  },
  educationPeriod: {
    fontSize: 8,
    color: '#999',
  },
  institution: {
    fontSize: 8.5,
    color: '#666',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginTop: 1,
  },
  educationNote: {
    fontSize: 8,
    color: '#555',
    marginTop: 2,
  },

  // ===== FOOTER =====
  footer: {
    borderTop: '1px solid #e0e0e0',
    paddingTop: 12,
    marginTop: 24, // Increased spacing before footer
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 7,
    color: '#999',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  footerLinks: {
    flexDirection: 'row',
    gap: 12,
  },
  footerLink: {
    fontSize: 7,
    color: '#666',
    textDecoration: 'none',
  },
});

// Main PDF Component
export const CVPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* ===== HEADER ===== */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          {/* Avatar Image */}
          <Image src={avatarImage} style={styles.avatar} />
          <View style={styles.nameContainer}>
            <Text style={styles.name}>Josiane S. Pizzetti</Text>
            <Text style={styles.title}>Front-End Software Engineer</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <Text>josipizzetti@gmail.com</Text>
          <Text>linkedin.com/in/josipizzetti</Text>
          <Text>github.com/josipizzetti</Text>
          <Text>https://cv-josipizzetti.vercel.app/</Text>
        </View>
      </View>

      {/* ===== ABOUT SECTION ===== */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.aboutText}>
          I live at the intersection of design thinking and engineering rigour — translating complex ideas into interfaces that feel effortless.
        </Text>
        <Text style={[styles.aboutText, { marginTop: 3 }]}>
          I help e-commerce platforms, SaaS startups, and scale-ups turn complex Figma designs into high-performance React, Next.js, and React Native applications. With a background at Shopify and experience serving 500,000+ monthly users, I specialize in migrating legacy systems, optimizing page load speeds, and building cross-platform mobile experiences that drive merchant retention. Available for end-to-end project delivery, team augmentation, or technical consulting.
        </Text>
      </View>

      {/* ===== EXPERIENCE SECTION ===== */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {EXPERIENCE.map((exp, i) => (
          <View key={i} style={styles.experienceItem}>
            <View style={styles.experienceHeader}>
              <View>
                <Text style={styles.role}>{exp.role}</Text>
                <Text style={styles.company}>{exp.company}</Text>
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={styles.period}>{exp.period}</Text>
                <Text style={styles.location}>{exp.location}</Text>
              </View>
            </View>
            <Text style={styles.experienceDesc}>{exp.desc}</Text>
            <View style={styles.tagsContainer}>
              {exp.tags.map((tag, j) => (
                <Text key={j} style={styles.tag}>{tag}</Text>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* ===== LEADERSHIP SECTION ===== */}
    <View style={styles.section}>
    <Text style={styles.sectionTitle}>Leadership & Management</Text>
    {LEADERSHIP_EXPERIENCE.map((exp, i) => (
        <View key={i} style={styles.experienceItem}>
        <View style={styles.experienceHeader}>
            <View>
            <Text style={styles.role}>{exp.role}</Text>
            <Text style={styles.company}>{exp.company}</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.period}>{exp.period}</Text>
            <Text style={styles.location}>{exp.location}</Text>
            </View>
        </View>
        <Text style={styles.experienceDesc}>{exp.desc}</Text>
        <View style={styles.tagsContainer}>
            {exp.tags.map((tag, j) => (
            <Text key={j} style={styles.tag}>{tag}</Text>
            ))}
        </View>
        </View>
    ))}
    </View>



      {/* ===== SKILLS SECTION ===== */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillsContainer}>
          {SKILLS.map((skill, i) => (
            <Text key={i} style={styles.skillBadge}>{skill.name}</Text>
          ))}
        </View>
      </View>

      {/* ===== EDUCATION SECTION ===== */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        {EDUCATION.map((edu, i) => (
          <View key={i} style={styles.educationItem}>
            <View style={styles.educationHeader}>
              <Text style={styles.degree}>{edu.degree}</Text>
              <Text style={styles.educationPeriod}>{edu.period}</Text>
            </View>
            <Text style={styles.institution}>{edu.institution}</Text>
            <Text style={styles.educationNote}>{edu.note}</Text>
          </View>
        ))}
      </View>

      {/* ===== FOOTER ===== */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Josiane S. Pizzetti · Front-End Engineer</Text>
        <View style={styles.headerRight}>
          <Text>josipizzetti@gmail.com</Text>
          <Text>linkedin.com/in/josipizzetti</Text>
          <Text>github.com/josipizzetti</Text>
        </View>
      </View>
    </Page>
  </Document>
);