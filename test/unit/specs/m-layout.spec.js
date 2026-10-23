import { afterEach, describe, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Layout from "@/components/m-layout.vue";
import Resume from "@/components/m-resume.vue";
import resume from "@/conf/resume.js";

describe("m-layout.vue", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
  });

  it("renders the resume directly without a router", () => {
    const wrapper = mount(Layout);
    expect(wrapper.classes()).toContain("m-layout");
    expect(wrapper.findComponent(Resume).exists()).toBe(true);
    expect(wrapper.find(".resume-title h1").text()).toBe(resume.title);
    expect(document.title).toBe(resume.pageAndFileName);
    wrapper.unmount();
  });

  it("preserves unrelated origin storage on first load", () => {
    localStorage.setItem("another-app", "saved-data");
    const wrapper = mount(Layout);
    expect(localStorage.getItem("another-app")).toBe("saved-data");
    expect(localStorage.getItem("MazeyVersion")).toBeNull();
    wrapper.unmount();
  });

  it("renders without accessing unavailable browser storage", () => {
    const storage = vi.spyOn(window, "localStorage", "get").mockImplementation(() => {
      throw new DOMException("Storage is blocked", "SecurityError");
    });
    const wrapper = mount(Layout);
    expect(wrapper.find(".resume-title h1").text()).toBe(resume.title);
    expect(storage).not.toHaveBeenCalled();
    wrapper.unmount();
  });
});
