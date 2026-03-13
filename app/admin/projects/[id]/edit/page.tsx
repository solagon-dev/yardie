import { db } from '@/lib/db';
import { notFound } from 'next/navigation';
import ProjectForm from '../../../components/ProjectForm';

export const dynamic = 'force-dynamic';

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = await db.project.findUnique({ where: { id } });
  if (!project) notFound();

  return (
    <ProjectForm
      initial={{
        id: project.id,
        title: project.title,
        slug: project.slug,
        summary: project.summary ?? '',
        description: project.description ?? '',
        featuredImage: project.featuredImage ?? '',
        galleryImages: project.galleryImages,
        projectLocation: project.projectLocation ?? '',
        serviceCategories: project.serviceCategories,
        completionDate: project.completionDate ?? '',
        challenge: project.challenge ?? '',
        approach: project.approach ?? '',
        materials: project.materials.join('\n'),
        featured: project.featured,
        publishStatus: project.publishStatus,
        seoTitle: project.seoTitle ?? '',
        seoDescription: project.seoDescription ?? '',
      }}
    />
  );
}
