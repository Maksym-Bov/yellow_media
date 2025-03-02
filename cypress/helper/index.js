export const getDateList = (daysCount) => {
    const result = {};
    const timestamp = Date.now();
    const monthGenitive = {
        "січень": "січня", "лютий": "лютого", "березень": "березня", "квітень": "квітня",
        "травень": "травня", "червень": "червня", "липень": "липня", "серпень": "серпня",
        "вересень": "вересня", "жовтень": "жовтня", "листопад": "листопада", "грудень": "грудня"
    };


    for (let i = 1; i < daysCount; i++) {
        const date = new Date(timestamp + i * 24 * 60 * 60 * 1000);
        const dayNumber = date.getDate().toString().padStart(2, '0');
        const monthName = date.toLocaleDateString('uk-ua', { month: 'long' }).toLowerCase();
        const dayName = date.toLocaleDateString('uk-ua', { weekday: 'long' });

        result[`day${i}`] = {
            nameDay: dayName.charAt(0) + dayName.slice(1),
            dayNumber,
            nameMonth: monthGenitive[monthName]
        };
    }

    const today = new Date(timestamp);
    const todayMonthName = today.toLocaleDateString('uk-UA', { month: 'long' }).toLowerCase();

    result[`day${daysCount}`] = {
        nameDay: today.toLocaleDateString('uk-UA', { weekday: 'long' }).charAt(0) +
            today.toLocaleDateString('uk-UA', { weekday: 'long' }).slice(1),
        dayNumber: today.getDate().toString().padStart(2, '0'),
        nameMonth: monthGenitive[todayMonthName]
    };

    return result;
}