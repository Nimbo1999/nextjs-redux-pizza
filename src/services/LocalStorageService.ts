interface LocalStorageData {
    points: number;
}

class LocalStorageService {
    recoverData() {
        const data = JSON.parse(localStorage.getItem('points')) as LocalStorageData;
        return data;
    }

    addPoints(points: number) {
        const localStorageData: LocalStorageData = { ...this.recoverData() };
        localStorageData.points = localStorageData.points
            ? localStorageData.points + points
            : points;

        const updatedPoints = JSON.stringify(localStorageData);
        localStorage.setItem('points', updatedPoints);
    }

    getPoints() {
        if (typeof window === 'undefined') return 0;

        const localStorageData: LocalStorageData = { ...this.recoverData() };

        if (!localStorageData.points) return 0;

        return localStorageData.points;
    }

    static clearPoints() {
        localStorage.removeItem('points');
    }
}

export default LocalStorageService;
