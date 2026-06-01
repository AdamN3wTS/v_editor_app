export interface ResponseDto<T> {
    data: T|null,
    msg: string|null,
    success:boolean
}