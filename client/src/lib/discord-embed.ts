interface DiscordEmbedData {
  title: string;
  description: string;
  url?: string;
  color?: string;
  author?: {
    name: string;
    icon_url?: string;
  };
  fields?: Array<{
    name: string;
    value: string;
    inline?: boolean;
  }>;
  thumbnail?: {
    url: string;
  };
  footer?: {
    text: string;
    icon_url?: string;
  };
}

export function generateDiscordEmbed(data: DiscordEmbedData): string {
  const baseUrl = window.location.origin;
  const favicon = `${baseUrl}/favicon.ico`;
  
  const embed = {
    title: data.title,
    description: data.description,
    url: data.url || baseUrl,
    color: parseInt((data.color || "3366ff").replace("#", ""), 16),
    author: {
      name: data.author?.name || "Hiro.null",
      icon_url: data.author?.icon_url || favicon,
    },
    fields: data.fields || [],
    thumbnail: data.thumbnail || { url: favicon },
    footer: {
      text: data.footer?.text || "Portfolio • Hiro.null",
      icon_url: data.footer?.icon_url || favicon,
    },
    timestamp: new Date().toISOString(),
  };

  return JSON.stringify({ embeds: [embed] }, null, 2);
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}

export function generateProjectEmbed(project: { name: string; description: string; url: string; status: string }) {
  return generateDiscordEmbed({
    title: `🚀 ${project.name}`,
    description: project.description,
    url: project.url,
    color: "3366ff",
    fields: [
      {
        name: "Status",
        value: project.status,
        inline: true,
      },
      {
        name: "Link",
        value: `[Visit Project](${project.url})`,
        inline: true,
      },
    ],
  });
}

export function generateContactEmbed() {
  return generateDiscordEmbed({
    title: "💻 Contact Hiro.null",
    description: "Get in touch for collaboration or inquiries",
    color: "00d9ff",
    fields: [
      {
        name: "GitHub",
        value: "[github.com/streliziasys](https://github.com/streliziasys)",
        inline: false,
      },
      {
        name: "Discord",
        value: "hiro.null",
        inline: false,
      },
    ],
  });
}