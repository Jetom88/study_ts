/**
 * @description Record<K, T>
 * 타입 T의 프로퍼티의 집합 K로 타입을 구성한다. 이 유틸리티는 타입의 프로퍼티들을 다른 타입에 매핑시키는 데 사용될 수 있다.
 */

interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "contact";

//'title' 속성이 '{}' 형식에 없지만 'PageInfo' 형식에서 필수입니다.ts(2741)
const x: Record<Page, PageInfo> = {
  about: { title: "about" },
  contact: { title: "contact" },
  home: { title: "home" },
};
