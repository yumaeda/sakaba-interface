export interface Restaurant {
    readonly id: string
    readonly area: string
    readonly url: string
    readonly name: string
    readonly genre: string
    readonly tel: string
    readonly businessDayInfo: string
    readonly address: string
    readonly latitude: string
    readonly longitude: string
    readonly distance: string
    readonly isOpen: number
}

export interface Category {
    readonly parentId?: number
    readonly id: number
    readonly name: string
}

export interface Menu {
    readonly restaurantId: string
    readonly id: string
    readonly sortOrder: number
    readonly name: string
    readonly nameJpn: string
    readonly category: number
    readonly subCategory: number
    readonly region: number
    readonly price: number
    readonly isMinPrice: number
}
