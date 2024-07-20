import { create } from 'zustand';

type DarkModeStoreType = {
	darkMode: boolean;
	setDarkMode: (darkMode: boolean) => void;
};

/**
 * @description 다크모드 상태를 관리하기 위한 전역 데이터 상태
 */
const DarkModeStore = create<DarkModeStoreType>((set) => ({
	darkMode: false,
	setDarkMode: (darkMode) => {
		set(() => ({ darkMode }));
	},
}));

export default DarkModeStore;
