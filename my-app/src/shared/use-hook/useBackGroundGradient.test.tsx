import { renderHook, act } from "@testing-library/react";
import useBackGroundGradient from "./useBackGroundGradient";

describe("useBackGroundGradient", () => {
  it("returns initial bgGradientColor", () => {
    const { result } = renderHook(() => useBackGroundGradient());
    expect(result.current.bgGradientColor).toBe("linear-gradient(to right, #ff4b1f, #ff9068)");
  });

  it("setBgSulvia sets correct gradient", () => {
    const { result } = renderHook(() => useBackGroundGradient());
    act(() => {
      result.current.setBgSulvia();
    });
    expect(result.current.bgGradientColor).toBe("linear-gradient(to right, #ff4b1f, #ff9068)");
  });

  it("setBgTransfile sets correct gradient", () => {
    const { result } = renderHook(() => useBackGroundGradient());
    act(() => {
      result.current.setBgTransfile();
    });
    expect(result.current.bgGradientColor).toBe("linear-gradient(to right, #16bffd, #cb3066)");
  });

  it("setBgMagic sets correct gradient", () => {
    const { result } = renderHook(() => useBackGroundGradient());
    act(() => {
      result.current.setBgMagic();
    });
    expect(result.current.bgGradientColor).toBe("linear-gradient(to right, #59c173, #a17fe0, #5d26c1)");
  });

  it("setBgCitrus sets correct gradient", () => {
    const { result } = renderHook(() => useBackGroundGradient());
    act(() => {
      result.current.setBgCitrus();
    });
    expect(result.current.bgGradientColor).toBe("linear-gradient(to right, #fceabb, #f8b500)");
  });

  it("setBgSelenium sets correct gradient", () => {
    const { result } = renderHook(() => useBackGroundGradient());
    act(() => {
      result.current.setBgSelenium();
    });
    expect(result.current.bgGradientColor).toBe("linear-gradient(to right, #3c3b3f, #605c3c)");
  });

  it("setBgZink sets correct gradient", () => {
    const { result } = renderHook(() => useBackGroundGradient());
    act(() => {
      result.current.setBgZink();
    });
    expect(result.current.bgGradientColor).toBe("linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)");
  });
});