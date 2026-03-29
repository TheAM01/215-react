import type { APIUser } from "../../types/user";

function Section({ label, children }: { label: string, children: React.ReactNode }) {
    return (
        <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
                {label}
            </p>
            {children}
        </div>
    );
}

function Field({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
    return (
        <div className="flex items-start gap-3">
            <span className="mt-0.5 text-slate-400">{icon}</span>
            <div>
                <p className="text-xs text-slate-500">{label}</p>
                <p className="text-sm text-slate-200">{value}</p>
            </div>
        </div>
    );
}

export default function UserCard({ user }: { user: APIUser }) {
    const initials = user.name
        .split(" ")
        .map((n: string) => n[0])
        .join("");

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
            <div className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">

                {/* Header */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 px-6 py-6 flex items-center gap-4 border-b border-slate-800">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                        {initials}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                            <h2 className="text-lg font-semibold text-white truncate">{user.name}</h2>
                            <span className="text-xs bg-violet-500/20 text-violet-300 border border-violet-500/30 px-2 py-0.5 rounded-full">
                                #{user.id}
                            </span>
                        </div>
                        <p className="text-sm text-slate-400">@{user.username}</p>
                    </div>
                </div>

                <div className="p-6 space-y-6">

                    {/* Contact */}
                    <Section label="Contact">
                        <div className="space-y-3">
                            <Field
                                icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                                label="Email"
                                value={user.email}
                            />
                            <Field
                                icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                                label="Phone"
                                value={user.phone}
                            />
                            <Field
                                icon={<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" /></svg>}
                                label="Website"
                                value={user.website}
                            />
                        </div>
                    </Section>

                    <div className="border-t border-slate-800" />

                    {/* Address */}
                    <Section label="Address">
                        <div className="bg-slate-800/50 rounded-xl p-4 space-y-2">
                            <p className="text-sm text-slate-200">
                                {user.address.street}, {user.address.suite}
                            </p>
                            <p className="text-sm text-slate-400">
                                {user.address.city} · {user.address.zipcode}
                            </p>
                            <div className="flex gap-3 pt-1">
                                <span className="text-xs bg-slate-700 text-slate-400 px-2 py-1 rounded-lg">
                                    lat {user.address.geo.lat}
                                </span>
                                <span className="text-xs bg-slate-700 text-slate-400 px-2 py-1 rounded-lg">
                                    lng {user.address.geo.lng}
                                </span>
                            </div>
                        </div>
                    </Section>

                    <div className="border-t border-slate-800" />

                    {/* Company */}
                    <Section label="Company">
                        <div className="bg-slate-800/50 rounded-xl p-4 space-y-2">
                            <p className="text-sm font-semibold text-slate-200">{user.company.name}</p>
                            <p className="text-xs text-slate-400 italic">"{user.company.catchPhrase}"</p>
                            <p className="text-xs text-slate-500">{user.company.bs}</p>
                        </div>
                    </Section>

                </div>
            </div>
        </div>
    );
}