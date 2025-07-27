import LoginBox from '@/app/login/LoginBox/LoginBox';

export default async function LoginPage() {
    return (
        <div className="w-full h-[90vh] flex items-center justify-end">
            <div className="p-4">
                <LoginBox/>
            </div>
        </div>
    );
}