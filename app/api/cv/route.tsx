import { NextRequest } from "next/server";
import React from "react";
import { Document, Page, View, Text, Image, Svg, Path, Rect, Circle, StyleSheet } from "@react-pdf/renderer";
import { siteConfig, timelineData, projects } from "@/lib/data";
import { translations, additionalSkills, techList, languages } from "@/lib/cv-data";
import path from "path";
import fs from "fs";

const avatarBase64 = (() => {
  const p = path.join(process.cwd(), "public", siteConfig.avatar);
  const buf = fs.readFileSync(p);
  return `data:image/png;base64,${buf.toString("base64")}`;
})();

const C = {
  indigo: "#4f46e5",
  indigoLight: "#eef2ff",
  indigoBg: "#e0e7ff",
  dark: "#0f172a",
  dark2: "#1e293b",
  gray500: "#64748b",
  gray400: "#94a3b8",
  gray300: "#cbd5e1",
  gray200: "#e2e8f0",
  gray100: "#f1f5f9",
  gray50: "#f8fafc",
  white: "#ffffff",
};

function BriefcaseIcon() {
  return (
    <Svg width={9} height={9} viewBox="0 0 24 24" fill="none">
      <Rect x="2" y="7" width="20" height="14" rx="2" fill={C.indigo} />
      <Path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" fill={C.indigo} />
    </Svg>
  );
}

function GraduationIcon() {
  return (
    <Svg width={9} height={9} viewBox="0 0 24 24" fill="none">
      <Path d="M22 10l-10-5L2 10l10 5 10-5z" fill={C.indigo} />
      <Path d="M6 12v5c3 3 9 3 12 0v-5" fill={C.indigo} />
    </Svg>
  );
}

function StarIcon() {
  return (
    <Svg width={9} height={9} viewBox="0 0 24 24" fill="none">
      <Path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill={C.indigo} />
    </Svg>
  );
}

function SparkleIcon() {
  return (
    <Svg width={9} height={9} viewBox="0 0 24 24" fill="none">
      <Path d="M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2z" fill={C.indigo} />
    </Svg>
  );
}

function WrenchIcon() {
  return (
    <Svg width={9} height={9} viewBox="0 0 24 24" fill="none">
      <Path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" fill={C.indigo} />
    </Svg>
  );
}

function UserIcon() {
  return (
    <Svg width={9} height={9} viewBox="0 0 24 24" fill="none">
      <Path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" fill={C.indigo} />
      <Circle cx="12" cy="7" r="4" fill={C.indigo} />
    </Svg>
  );
}

const s = StyleSheet.create({
  page: {
    padding: 0,
    backgroundColor: C.white,
    fontFamily: "Helvetica",
    flexDirection: "column",
  },
  header: {
    padding: "12px 32px 8px",
    borderBottom: `2.5px solid ${C.indigo}`,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    border: `2px solid ${C.indigo}`,
  },
  headerContent: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: C.dark,
    marginBottom: 1,
  },
  contactLine: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 2,
  },
  contactText: {
    fontSize: 6.5,
    color: C.gray500,
  },
  contactSep: {
    fontSize: 6.5,
    color: C.gray300,
  },
  body: {
    padding: "6px 28px 0",
    flex: 1,
  },
  section: {
    marginBottom: 7,
  },
  sectionTitle: {
    fontSize: 8,
    fontWeight: "bold",
    color: C.indigo,
    textTransform: "uppercase" as const,
    letterSpacing: 1,
    borderBottom: `1px solid ${C.gray200}`,
    paddingBottom: 2,
    marginBottom: 4,
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  aboutText: {
    fontSize: 7,
    color: C.dark2,
    lineHeight: 1.4,
    textAlign: "justify" as const,
  },
  expRow: {
    flexDirection: "row",
    marginBottom: 5,
  },
  timelineCol: {
    width: 12,
    alignItems: "center",
  },
  timelineDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: C.indigo,
    marginTop: 3,
  },
  expContent: {
    flex: 1,
    paddingLeft: 3,
  },
  expTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 1,
  },
  expCompany: {
    fontSize: 8,
    fontWeight: "bold",
    color: C.indigo,
  },
  expRole: {
    fontSize: 7.5,
    color: C.dark,
    fontStyle: "italic",
  },
  expDate: {
    fontSize: 6.5,
    color: C.gray500,
    textAlign: "right",
  },
  expLocation: {
    fontSize: 6.5,
    color: C.gray400,
    textAlign: "right",
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: 0.5,
  },
  bulletText: {
    fontSize: 7,
    color: C.dark2,
    lineHeight: 1.35,
    flex: 1,
  },
  projectCard: {
    backgroundColor: C.gray50,
    borderLeft: `3px solid ${C.indigo}`,
    borderTop: `1px solid ${C.gray200}`,
    borderRight: `1px solid ${C.gray200}`,
    borderBottom: `1px solid ${C.gray200}`,
    borderRadius: 3,
    padding: 5,
  },
  projectTitle: {
    fontSize: 8,
    fontWeight: "bold",
    color: C.indigo,
    marginBottom: 1,
  },
  projectMeta: {
    fontSize: 6,
    color: C.gray500,
    marginBottom: 2,
  },
  projectBullet: {
    fontSize: 7,
    color: C.dark2,
    lineHeight: 1.35,
    marginBottom: 0.5,
    paddingLeft: 1,
  },
  eduTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  eduSchool: {
    fontSize: 8,
    fontWeight: "bold",
    color: C.indigo,
  },
  eduTitle: {
    fontSize: 7.5,
    color: C.dark2,
  },
  eduDate: {
    fontSize: 6.5,
    color: C.gray500,
    textAlign: "right",
  },
  eduLoc: {
    fontSize: 6.5,
    color: C.gray400,
    textAlign: "right",
  },
  skillItem: {
    fontSize: 7,
    color: C.dark2,
    lineHeight: 1.4,
    marginBottom: 0.5,
    paddingLeft: 1,
  },
  techRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 3,
  },
  techBadge: {
    fontSize: 6,
    color: C.indigo,
    backgroundColor: C.indigoLight,
    padding: "1px 5px",
    borderRadius: 2,
  },
  langRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 3,
  },
  langBadge: {
    fontSize: 6.5,
    color: C.dark2,
    backgroundColor: C.gray100,
    padding: "1px 6px",
    borderRadius: 2,
  },
  footer: {
    borderTop: `1px solid ${C.indigo}`,
    padding: "4px 28px",
    flexDirection: "row",
    justifyContent: "center",
  },
  footerText: {
    fontSize: 6,
    color: C.gray400,
  },
});

function bulletPoints(text: string): string[] {
  return text
    .split(/\.\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 10);
}

function parseLocation(subtitle?: string): { company: string; city: string } {
  if (!subtitle) return { company: "", city: "" };
  const parts = subtitle.split(",").map((s) => s.trim());
  const company = parts[0] || subtitle;
  const city = parts.slice(1).join(", ").trim();
  return { company, city };
}

function CVHeader() {
  const parts = [
    siteConfig.location,
    "LinkedIn",
    siteConfig.email,
    siteConfig.github.replace("https://", ""),
  ];

  return (
    <View style={s.header}>
      <Image style={s.avatar} src={avatarBase64} />
      <View style={s.headerContent}>
        <Text style={s.name}>{siteConfig.name}</Text>
        <View style={s.contactLine}>
          {parts.map((p, i) => (
            <React.Fragment key={p}>
              <Text style={s.contactText}>{p}</Text>
              {i < parts.length - 1 && <Text style={s.contactSep}>·</Text>}
            </React.Fragment>
          ))}
        </View>
      </View>
    </View>
  );
}

function ProfileSection() {
  return (
    <View style={s.section}>
      <View style={s.sectionTitle}>
        <UserIcon />
        <Text>Perfil Profesional</Text>
      </View>
      <Text style={s.aboutText}>{siteConfig.description}</Text>
    </View>
  );
}

function ExperienceSection() {
  const jobs = timelineData.filter((e) => e.type === "Trabajo");

  return (
    <View style={s.section}>
      <View style={s.sectionTitle}>
        <BriefcaseIcon />
        <Text>Experiencia Profesional</Text>
      </View>
      {jobs.map((job, idx) => {
        const { company, city } = parseLocation(job.subtitle);
        const bullets = bulletPoints(job.description);
        return (
          <View key={job.title + job.year} style={s.expRow}>
            <View style={s.timelineCol}>
              <View style={s.timelineDot} />
            </View>
            <View style={s.expContent}>
              <View style={s.expTop}>
                <View>
                  <Text style={s.expCompany}>{company}</Text>
                  <Text style={s.expRole}>{job.title}</Text>
                </View>
                <View>
                  <Text style={s.expDate}>{job.year}</Text>
                  <Text style={s.expLocation}>{city}</Text>
                </View>
              </View>
              {bullets.slice(0, 2).map((b, i) => (
                <View key={i} style={s.bulletRow}>
                  <Text style={s.bulletText}>▸ {b}.</Text>
                </View>
              ))}
            </View>
          </View>
        );
      })}
    </View>
  );
}

function FeaturedProjectSection() {
  const project = projects.find((p) => p.featured);
  if (!project) return null;

  const bullets = project.description
    .split("\n")
    .map((s) => s.trim())
    .filter((s) => s.startsWith("•"));

  return (
    <View style={s.section}>
      <View style={s.sectionTitle}>
        <StarIcon />
        <Text>Proyecto Destacado</Text>
      </View>
      <View style={s.projectCard}>
        <Text style={s.projectTitle}>{project.title}</Text>
        <Text style={s.projectMeta}>100% Open Source · MIT</Text>
        {bullets.map((b, i) => (
          <Text key={i} style={s.projectBullet}>
            ▸ {b.replace("• ", "")}
          </Text>
        ))}
      </View>
    </View>
  );
}

function EducationSection() {
  const edu = timelineData.filter((e) => e.type === "Educación");

  return (
    <View style={s.section}>
      <View style={s.sectionTitle}>
        <GraduationIcon />
        <Text>Educación</Text>
      </View>
      {edu.map((e) => {
        const { company: school, city } = parseLocation(e.subtitle);
        return (
          <View key={e.title + e.year} style={s.expRow}>
            <View style={s.timelineCol}>
              <View style={s.timelineDot} />
            </View>
            <View style={s.expContent}>
              <View style={s.expTop}>
                <View>
                  <Text style={s.eduSchool}>{school}</Text>
                  <Text style={s.eduTitle}>{e.title}</Text>
                </View>
                <View>
                  <Text style={s.eduDate}>{e.year}</Text>
                  <Text style={s.eduLoc}>{city}</Text>
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}

function SkillsSection() {
  const skills = additionalSkills.es;

  return (
    <View style={s.section}>
      <View style={s.sectionTitle}>
        <SparkleIcon />
        <Text>Skills Adicionales</Text>
      </View>
      {skills.map((skill, i) => (
        <Text key={i} style={s.skillItem}>
          ▸ {skill}
        </Text>
      ))}
    </View>
  );
}

function TechnologiesSection() {
  return (
    <View style={s.section}>
      <View style={s.sectionTitle}>
        <WrenchIcon />
        <Text>Tecnologías</Text>
      </View>
      <View style={s.techRow}>
        {techList.map((t) => (
          <Text key={t} style={s.techBadge}>{t}</Text>
        ))}
      </View>
      <View style={s.langRow}>
        {languages.map((l) => (
          <Text key={l.name} style={s.langBadge}>
            {l.name} ({l.level})
          </Text>
        ))}
      </View>
    </View>
  );
}

function CvDocument({ lang }: { lang: string }) {
  const t = translations[lang];

  return (
    <Document>
      <Page size="A4" style={s.page}>
        <CVHeader />
        <View style={s.body}>
          <ProfileSection />
          <ExperienceSection />
          <FeaturedProjectSection />
          <EducationSection />
          <SkillsSection />
          <TechnologiesSection />
        </View>
        <View style={s.footer}>
          <Text style={s.footerText}>
            {siteConfig.name} · {t.footer} · {new Date().getFullYear()}
          </Text>
        </View>
      </Page>
    </Document>
  );
}

async function bufferFromStream(stream: NodeJS.ReadableStream): Promise<Buffer> {
  const chunks: Buffer[] = [];
  for await (const chunk of stream) {
    chunks.push(Buffer.from(chunk));
  }
  return Buffer.concat(chunks);
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const lang = searchParams.get("lang") === "en" ? "en" : "es";

  const { renderToStream } = await import("@react-pdf/renderer");

  const stream = await renderToStream(<CvDocument lang={lang} />);
  const buffer = await bufferFromStream(stream);

  const suffix = lang === "en" ? "EN" : "ES";
  const filename = `CV-CESAR_IVAN_BARCENAS_ROSALES-${suffix}.pdf`;

  return new Response(new Uint8Array(buffer), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}
