import { renderHook, act } from "@testing-library/react";
import useBackGroundImg from "./useBackGroundImg";

const forest =
  "https://i.pinimg.com/originals/a9/59/22/a9592215c9342174fb0b4d5643727247.jpg";
const mountine =
  "https://i.pinimg.com/originals/b6/65/c3/b665c39693c925a6c4d5c415e6ae93d1.jpg";
const river =
  "https://avatars.mds.yandex.net/i?id=6afe9003dc58a345d08f85621db2475d_l-4012815-images-thumbs&n=13";
const sky =
  "https://avatars.mds.yandex.net/i?id=557ea8789a278f192ff1c3ddcc00f5b3_l-5169643-images-thumbs&n=13";

describe("useBackGroundImg", () => {
  it("returns initial forest image", () => {
    const { result } = renderHook(() => useBackGroundImg());
    expect(result.current.bgImg).toBe(forest);
  });

  it("setForest sets bgImg to forest image", () => {
    const { result } = renderHook(() => useBackGroundImg());
    act(() => {
      result.current.setForest();
    });
    expect(result.current.bgImg).toBe(forest);
  });

  it("setMountine sets bgImg to mountine image", () => {
    const { result } = renderHook(() => useBackGroundImg());
    act(() => {
      result.current.setMountine();
    });
    expect(result.current.bgImg).toBe(mountine);
  });

  it("setRiver sets bgImg to river image", () => {
    const { result } = renderHook(() => useBackGroundImg());
    act(() => {
      result.current.setRiver();
    });
    expect(result.current.bgImg).toBe(river);
  });

  it("setSky sets bgImg to sky image", () => {
    const { result } = renderHook(() => useBackGroundImg());
    act(() => {
      result.current.setSky();
    });
    expect(result.current.bgImg).toBe(sky);
  });
});