export type ResumeProps = {
    data: Resume
}

export type Resume = {
    first_name: string
    last_name: string
    img: string
    nav: IconLinkProps[]
    infor: IconLinkProps[]
    professtion: string
    social: IconLinkProps[]
    description: string
    education: TimelineProps[]
    languages: string[]
    frameworks: string[]
}

export type HeaderProps = {
    name: string
    nav: IconLinkProps[]
}

export type HomeProps = {
    img: string
    first_name: string
    last_name: string
    infor: IconLinkProps[]
    professtion: string
}

export type SocialProps = {
    social: IconLinkProps[]
}

export type ProfileProps = {
    description: string
}

export type EducationProps = {
    education: TimelineProps[]
}

export type SkillsProps = {
    languages: string[]
    frameworks: string[]
}

export type TimelineProps = {
    title: string
    where: string
    time: string
    last?: boolean
    experience?: boolean
    description?: string
}

export type IconLinkProps = {
    icon: string
    text: string
    link?: string
    clickToggle?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

export type ListItemProps = {
    text: string
}

export type CertificatesItemProps = {
    title: string
    description: string
}

export type ReferencesItemProps = {
    title: string
    subtitle: string
    contact: {type: string, value: string}[]
}

/**
 * I am a person, reponsible with their work during working hours. Finish various technical and higher studies at universities. I have several years of experience and achievements in the labor field.
 */
