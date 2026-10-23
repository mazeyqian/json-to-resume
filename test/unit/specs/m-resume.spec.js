import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import Resume from "@/components/m-resume.vue";
import Experience from "@/components/m-resume-experience.vue";
import resume from "@/conf/resume.js";

describe("resume rendering", () => {
  it("preserves the title, trusted HTML, hidden sections, and skill values", () => {
    const wrapper = mount(Resume);
    expect(document.title).toBe(resume.pageAndFileName);
    expect(wrapper.find(".resume-title h1").text()).toBe(resume.title);
    expect(wrapper.find(".resume-small").text()).toContain("2017");
    expect(wrapper.findAll(".resume-item.hide")).toHaveLength(1);
    wrapper.findAll('[role="progressbar"]').forEach((bar, index) => {
      const skill = resume.skills[index];
      expect(bar.attributes("aria-label")).toBe(skill.name);
      expect(bar.attributes("aria-valuenow")).toBe(String(skill.level));
      expect(bar.attributes("aria-valuemax")).toBe("100");
      expect(bar.element.style.width).toBe(skill.level + "%");
      expect(bar.element.parentElement.style.height).toBe("12px");
    });
    wrapper.unmount();
  });

  it("preserves badges, optional links, colors, detail HTML, and print markers", () => {
    const wrapper = mount(Experience, {
      props: {
        title: "Projects",
        colon: ": ",
        projects: [{
          name: "Project",
          hideInPrint: true,
          tags: [{ name: "Tag", bgc: "orange" }],
          description: "<strong>Description</strong>",
          details: [{ name: "Detail", value: "<em>Value</em>" }],
          products: [
            { name: "Linked", link: "https://example.com/", bgc: "cyan", bgcColor: "#123456" },
            { name: "Plain" },
            { name: "Empty link", link: "" },
          ],
        }],
      },
    });
    expect(wrapper.find(".project-badge").classes()).toEqual(expect.arrayContaining(["badge", "badge-pill", "badge-secondary", "orange"]));
    const badges = wrapper.findAll(".product-badge");
    expect(badges[0].element.tagName).toBe("A");
    expect(badges[0].attributes("href")).toBe("https://example.com/");
    expect(badges[0].attributes("target")).toBe("_blank");
    expect(badges[0].attributes("rel")).toBe("noopener");
    expect(badges[0].element.style.backgroundColor).toBe("rgb(18, 52, 86)");
    expect(badges[1].element.tagName).toBe("SPAN");
    expect(badges[1].attributes("href")).toBeUndefined();
    for (const badge of badges.slice(1)) {
      expect(badge.element.tagName).toBe("SPAN");
      expect(badge.attributes("href")).toBeUndefined();
      expect(badge.attributes("target")).toBeUndefined();
      expect(badge.attributes("rel")).toBeUndefined();
    }
    expect(wrapper.find(".content-description strong").text()).toBe("Description");
    expect(wrapper.find(".detail-content em").text()).toBe("Value");
    expect(wrapper.find(".resume-experience").classes()).toContain("hide-in-print");
    wrapper.unmount();
  });

  it("hides an empty experience section", () => {
    const wrapper = mount(Experience, { props: { projects: [], title: "Empty", colon: ":" } });
    expect(wrapper.classes()).toContain("hide");
    expect(wrapper.findAll(".resume-experience")).toHaveLength(0);
    wrapper.unmount();
  });
});
